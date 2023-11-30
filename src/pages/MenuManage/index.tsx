import React from "react";
import { Form, Input, Button, Table, Space } from "antd";
import ResizeTable from "@/components/ResizeTable/index";
const MenuManage = () => {
  const onFinish = () => {};
  const columnsData = [
    {
      title: "菜单名称",
      dataIndex: "menuName",
      key: "menuName",
    },
    {
      title: "角色描述",
      dataIndex: "roleDes",
      key: "roleDes",
    },
    {
      title: "所属部门",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      key: "createTime",
    },
    {
      title: "操作",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button type="link">修改</Button>
          <Button type="link" danger>
            删除
          </Button>
        </Space>
      ),
    },
  ];
  const obj = {
    id: "1",
    roleName: "董事长",
    roleDes: "董事长",
    department: "懒羊羊公司董事长",
    createTime: "2023-11-29",
  };
  const dataSource = [];
  for (let i = 0; i <= 50; i++) {
    obj.id = i + 1 + "";
    dataSource.push({ ...obj });
  }
  return (
    <div className="bg-white h-full p-2">
      <div className=" m-2">
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
            label="角色名称"
            name="username"
            rules={[{ required: true, message: "请输入用户名称!" }]}
          >
            <Input placeholder="请输入用户名称" />
          </Form.Item>
          <Form.Item>
            <Button type="primary">搜索</Button>
          </Form.Item>
        </Form>
      </div>
      <div className="pl-4 pr-4 p-2">
        <Button type="primary">新增</Button>
      </div>
      <div style={{ height: "calc(100% - 95px - 4rem)" }}>
        <ResizeTable
          className="h-full"
          dataSource={dataSource}
          columns={columnsData}
          rowKey={(record: any) => record.id}
          scroll={{ y: 600 }}
        />
      </div>
    </div>
  );
};
export default MenuManage;
