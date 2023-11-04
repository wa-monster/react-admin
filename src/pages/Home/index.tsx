import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, DatePicker } from "antd";
import { observer, useStore } from "@/store";
import { t } from "i18next";

function Home() {
  const { i18n, layout } = useStore();

  const changeLang = (lan: string) => {
    i18n.setLocal(lan);
  };
  const deleteLogo = () => {
    layout.setLogoDisabled(!layout.logoDisabled);
  };
  const deleteTop = () => {
    layout.setTopDisabled(!layout.topDisabled);
  };
  const deleteMenu = () => {
    layout.setMenuDisabled(!layout.menuDisabled);
  };
  return (
    <div>
      Home
      <Button onClick={() => changeLang("en_US")}>切换英文</Button>
      <Button onClick={() => changeLang("zh_CN")}>切换中文</Button>
      <Button onClick={() => deleteLogo()}>
        {!layout.logoDisabled ? "开" : "关"}logo
      </Button>
      <Button onClick={() => deleteTop()}>
        {!layout.topDisabled ? "开" : "关"}top
      </Button>
      <Button onClick={() => deleteMenu()}>
        {!layout.menuDisabled ? "开" : "关"}menu
      </Button>
      <DatePicker />
      <span>wwww{t("home")}</span>
      {/* <div className="h-10">
        <Loader type="line-scale" active></Loader>
      </div> */}
    </div>
  );
}
export default observer(Home);
