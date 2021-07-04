/*
 * @Description:
 * @Author: rodchen
 * @Date: 2021-07-14 14:14:46
 * @LastEditTime: 2021-07-14 20:05:38
 * @LastEditors: rodchen
 */

// @ts-nocheck
import { Form, Input, Button, Checkbox } from 'antd';
import styles from './index.less';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default ({ onValuesChange, keyString, content }) => {
  const onFinish = (values: any) => {
    onValuesChange({ key: keyString, content: { name: values.target.value } });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form {...layout} name="basic" initialValues={content}>
      <div>一行四图</div>
      <Form.Item
        label="name"
        name="name"
        onChange={onFinish}
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};
