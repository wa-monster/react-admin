import React from "react";
import { ConfigProvider } from "antd";
import { observer, useStore } from "@/store";
import RouterApp from "@/router/index";
import { useAntdI18n } from "@/i18n/antd";
function App() {
  const { theme } = useStore();
  const { locale } = useAntdI18n();

  return (
    <ConfigProvider
      locale={locale}
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
