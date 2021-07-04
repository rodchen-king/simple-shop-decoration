/*
 * @Description:
 * @Author: rodchen
 * @Date: 2021-07-14 16:07:34
 * @LastEditTime: 2021-07-04 14:49:40
 * @LastEditors: rodchen
 */
import React, { useEffect } from 'react';
import styles from './index.less';

import LeftNode from './LeftNode';
import storeData from './Utils/store';
import ContentRender from './ContentRender';
import RightProperty from './RightProperty';

import './Register';

export default () => {
  useEffect(() => {
    storeData.storeData = [];
  }, []);

  return (
    <div className={styles.shop_decation}>
      <div className={styles.shop_decation_left}>
        <LeftNode />
      </div>
      <div className={styles.shop_decation_content}>
        <ContentRender />
      </div>
      <div className={styles.shop_decation_right}>
        <RightProperty />
      </div>
    </div>
  );
};
