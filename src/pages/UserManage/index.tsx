import React from "react";
import { Form, Input } from "antd";
const UserManage = () => {
  const onFinish = () => {};
  return (
    <div className="bg-white h-full">
      <div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          layout="inline"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default UserManage;
