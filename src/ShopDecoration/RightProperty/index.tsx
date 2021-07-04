/*
 * @Description:
 * @Author: rodchen
 * @Date: 2021-07-14 14:14:46
 * @LastEditTime: 2021-07-14 19:18:00
 * @LastEditors: rodchen
 */
import React, { useState } from 'react';
import store from '../Utils/store';
import ShopDecorationNode from '../LeftNode/Nodes';
import { NodeClassType } from '../Type/type';

export default () => {
  const { renderNodeProperty } = ShopDecorationNode;
  const [property, setProperty] = useState<NodeClassType>({
    type: '',
    key: '',
  });

  store.subscriptionNodeChange((item: any) => {
    setProperty(item);
  });

  return (
    <div key={property.key}>
      {renderNodeProperty(property.type, {
        keyString: property.key,
        onValuesChange: store.updateNodeContent.bind(store),
        content: JSON.parse(property.content || '{}'),
      })}
    </div>
  );
};
