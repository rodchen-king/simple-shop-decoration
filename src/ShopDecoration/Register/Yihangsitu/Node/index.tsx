/*
 * @Description:
 * @Author: rodchen
 * @Date: 2021-07-14 14:14:46
 * @LastEditTime: 2021-07-14 20:06:19
 * @LastEditors: rodchen
 */
import React, { Fragment } from 'react';

const template = (props = {}) => {
  console.log(props);
  const { data } = props;
  const urls = [];
  return (
    <Fragment>
      <div>一行四图</div>
      <div
        style={{
          height: '90px',
          backgroundColor: '#fff',
        }}
      >
        name: {props.name}
      </div>
    </Fragment>
  );
};

export default template;
