/*
 * @Description:
 * @Author: rodchen
 * @Date: 2021-07-14 14:14:46
 * @LastEditTime: 2021-07-14 20:00:00
 * @LastEditors: rodchen
 */

import React from 'react';
import ShopDecorationNode from '../LeftNode/Nodes';
import { Yihangsitu, YihangsituProperty } from './Yihangsitu';
import Yihangyitu from './Yihangyitu';

const { registerNode, registerNodeProperty } = ShopDecorationNode;

registerNode('yihangsitu', (config: any) => {
  return React.createElement(Yihangsitu as unknown as React.FC<{}>, config);
});

registerNodeProperty('yihangsitu', (config: any) => {
  return React.createElement(
    YihangsituProperty as unknown as React.FC<{}>,
    config,
  );
});

registerNode('yihangyitu', (config: any) => {
  return React.createElement(Yihangyitu, config);
});
