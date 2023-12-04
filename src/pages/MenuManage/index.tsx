import React from "react";
import { Form, Input, Button, Table, Space } from "antd";
import ResizeTable from "@/components/ResizeTable/index";
const MenuManage = () => {
  const onFinish = () => {};
  const columnsData = [
    {
      title: "菜单名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "图标",
      dataIndex: "icon",
      key: "icon",
    },
    {
      title: "排序",
      dataIndex: "sort",
      key: "sort",
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "组件路径",
      dataIndex: "url",
      key: "url",
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
    name: "菜单管理",
    icon: "19653456675",
    sort: "1",
    status: "正常",
    url: "menu/index",
    createTime: "2023-12-04",
  };
  const dataSource = [];
  for (let i = 0; i <= 50; i++) {
    dataSource.push({ ...obj });
  }
  return (
    <div className="bg-white h-full p-2 ">
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
            label="菜单名称"
            name="username"
            rules={[{ required: true, message: "请输入菜单名称!" }]}
          >
            <Input placeholder="请输入菜单名称" />
          </Form.Item>
          <Form.Item>
            <Button type="primary">搜索</Button>
          </Form.Item>
        </Form>
      </div>
      <div className="pl-4 pr-4 p-2">
        <Button type="primary">新增</Button>
      </div>
      <div style={{ height: "calc(100% - 14rem)" }}>
        <ResizeTable
          className="h-full"
          dataSource={dataSource}
          columns={columnsData}
          rowKey={(record: any) => record.id}
        />
      </div>
    </div>
  );
};
export default MenuManage;
