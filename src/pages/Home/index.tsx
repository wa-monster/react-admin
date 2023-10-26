import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, DatePicker } from "antd";
import { observer, useStore } from "@/store";
import { t } from "i18next";

function Home() {
  const { i18n } = useStore();
  const navigate = useNavigate();
  const outLogin = () => {
    navigate("/login", { replace: true });
  };

  const qiehuan = (lan: string) => {
    i18n.setLocal(lan);
  };
  return (
    <div>
      Home
      <Button onClick={() => qiehuan("en_US")}>切换英文</Button>
      <Button onClick={() => qiehuan("zh_CN")}>切换中文</Button>
      <Button onClick={() => outLogin()}>退出登录</Button>
      <DatePicker />
      <span>wwww{t("home")}</span>
      {/* <div className="h-10">
        <Loader type="line-scale" active></Loader>
      </div> */}
    </div>
  );
}
export default observer(Home);
