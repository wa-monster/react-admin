import React, { useState } from "react";
import {
  Divider,
  Avatar,
  Space,
  Card,
  Tabs,
  Form,
  Input,
  Button,
  Radio,
} from "antd";
import type { TabsProps } from "antd";
import userJPG from "@/assets/img/user.jpg";
import {
  UserOutlined,
  PhoneOutlined,
  UsergroupAddOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import { t } from "i18next";
const Cell = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) => {
  return (
    <div>
      <div>
        <span>{icon}</span>
        <span>{label}</span>
      </div>
      <div>{value}</div>
      <Divider />
    </div>
  );
};
const PasswordForm = () => {
  return (
    <Form>
      <Form.Item
        label={t("旧密码")}
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("新密码")}
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("确认新密码")}
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary">{t("保存")}</Button>
      </Form.Item>
    </Form>
  );
};

const BseInfo = () => {
  const onChange = () => {};
  const [value] = useState();
  return (
    <Form>
      <Form.Item
        label="用户昵称"
        name="nickName"
        rules={[{ required: true, message: "" }]}
      >
        <Input></Input>
      </Form.Item>
      <Form.Item
        label="手机号码"
        name="nickName"
        rules={[{ required: true, message: "" }]}
      >
        <Input></Input>
      </Form.Item>
      <Form.Item
        label="性别"
        name="nickName"
        rules={[{ required: true, message: "" }]}
      >
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>男</Radio>
          <Radio value={2}>女</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Button type="primary">{t("保存")}</Button>
      </Form.Item>
    </Form>
  );
};
//
const Personal = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: t("基本资料"),
      children: <BseInfo />,
    },
    {
      key: "2",
      label: t("修改密码"),
      children: <PasswordForm />,
    },
  ];
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <Space className="h-full p-2 grid grid-cols-[25rem_1fr]">
      <Card
        className="left-box"
        title={t("个人信息")}
        bordered={false}
        style={{ width: "100%" }}
      >
        <div className="p-2">
          <div>
            <Avatar src={<img src={userJPG} alt="avatar" />}></Avatar>
          </div>
          <Divider />
          <Cell
            icon={<UserOutlined />}
            label={t("用户名称")}
            value={"羊羊羊"}
          ></Cell>
          <Cell
            icon={<PhoneOutlined />}
            label={t("手机号码")}
            value={"13988654753"}
          ></Cell>
          <Cell
            icon={<UsergroupAddOutlined />}
            label={t("用户角色")}
            value={"董事长"}
          ></Cell>
          <Cell
            icon={<FieldTimeOutlined />}
            label={t("创建日期")}
            value={"2023-12-06"}
          ></Cell>
        </div>
      </Card>
      <div className="right-box"></div>
      <Card title={t("基本资料")} bordered={false} style={{ width: "100%" }}>
        <div className="p-2">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
        </div>
      </Card>
    </Space>
  );
};
export default Personal;
