/*
 * @Description:
 * @Author: rodchen
 * @Date: 2021-07-14 14:14:46
 * @LastEditTime: 2021-07-04 21:16:05
 * @LastEditors: rodchen
 */

import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { DeleteOutlined } from '@ant-design/icons';
import store from '../Utils/store';
import ShopDecorationNode from '../LeftNode/Nodes';
import { NodeClass } from '../Type/interface';
import { NodeClassType } from '../Type/type';

const _changeOrder = (
  data: NodeClassType[],
  pushByItemKey: string,
  needChangeItemKey: string,
) => {
  const nodeItemObject: {
    [key: string]: NodeClassType;
  } = {};

  const keyArray = data.map(
    (item) => ((nodeItemObject[item.key] = item), item.key),
  );
  keyArray.splice(
    keyArray.indexOf(pushByItemKey),
    0,
    keyArray.splice(keyArray.indexOf(needChangeItemKey), 1)[0],
  );

  const newStoreData = keyArray.map((item) => nodeItemObject[item]);

  store.updateStoreData(newStoreData);
  store.setCurrentNode(nodeItemObject[needChangeItemKey]);
};

export default () => {
  const [tempStoreData, setTempStoreData] = useState<NodeClassType[]>([]);
  const { renderNode } = ShopDecorationNode;

  useEffect(() => {
    store.subscriptionStoreDataChange((storeData: NodeClassType[]) => {
      setTempStoreData(storeData);
    });
  }, []);

  const onDrop = (event: any) => {
    const dataText: string = event.dataTransfer.getData('Text');

    if (dataText) {
      event.preventDefault();
      const newNode = new NodeClass(dataText);
      store.updateStoreData(store.storeData.concat([newNode]));
      store.setCurrentNode(newNode);
    } else {
      const keyText: string = event.dataTransfer.getData('key');

      _changeOrder(
        store.storeData,
        store.storeData[store.storeData.length - 1].key,
        keyText,
      );
    }
  };

  const onInnerDrop = (event: any, key: string) => {
    const dataText: string = event.dataTransfer.getData('Text');
    const keyText: string = event.dataTransfer.getData('key');

    if (dataText) {
      event.preventDefault();
      const newNode = new NodeClass(dataText);
      store.updateStoreData(store.storeData.concat([newNode]));
      _changeOrder(store.storeData, newNode.key, key);
      store.setCurrentNode(newNode);
    } else {
      _changeOrder(store.storeData, key, keyText);
    }

    event.dataTransfer.clearData();
    event.preventDefault();
    event?.stopPropagation();
  };

  const allowDrop = (event: any) => {
    event.preventDefault();
    event?.stopPropagation();
  };

  const onClickForHanldeProperty = (item: NodeClassType) => {
    store.setCurrentNode(item);
  };

  const getCurrentNodeContent = (key: string) => {
    const content = tempStoreData.filter(
      (innerItem) => innerItem.key === key,
    )[0].content;

    try {
      return JSON.parse(content as string);
    } catch (e) {
      return '';
    }
  };

  const onInnerDragStart = (event: any, key: string) => {
    event.dataTransfer.setData('key', key);
  };

  const deleteNodeItem = (key: string) => {
    store.updateStoreData(store.storeData.filter((item) => item.key !== key));
  };

  return (
    <div
      onDrop={onDrop}
      onDragOver={allowDrop}
      className={styles.content_render}
    >
      {tempStoreData.map((item) => (
        <div
          key={item.key}
          className={styles.content_node}
          onDrop={(event) => onInnerDrop(event, item.key)}
          onDragOver={allowDrop}
          onDragStart={(event) => {
            onInnerDragStart(event, item.key);
          }}
          draggable={true}
          onClick={() => {
            onClickForHanldeProperty(item);
          }}
        >
          <DeleteOutlined
            onClick={() => {
              deleteNodeItem(item.key);
            }}
            style={{ position: 'absolute', right: '5px', top: '2px' }}
          />
          {renderNode(item.type, getCurrentNodeContent(item.key))}
        </div>
      ))}
    </div>
  );
};
