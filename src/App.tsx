import React from "react";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import { observer, useStore } from "@/store";
import RouterApp from "@/router/index";

function App() {
  const { theme } = useStore();

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: theme.colorPrimary,
        },
      }}
    >
      <RouterApp></RouterApp>
    </ConfigProvider>
  );
}
export default observer(App);
