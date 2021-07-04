/*
 * @Description:
 * @Author: rodchen
 * @Date: 2021-07-14 14:14:46
 * @LastEditTime: 2021-07-14 17:45:20
 * @LastEditors: rodchen
 */
import React from 'react';
import { Button } from 'antd';
import styles from './index.less';
import ShopDecorationNode from './Nodes';

export default () => {
  const ondragstart = (event: any, text: string) => {
    event.dataTransfer.setData('Text', text);
  };

  const { nodeTypes } = ShopDecorationNode;
  const nodes = Object.keys(nodeTypes);

  return (
    <div className={styles.left_node}>
      {nodes.map((item) => (
        <Button
          type="primary"
          draggable={true}
          onDragStart={(event) => {
            ondragstart(event, item);
          }}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};
