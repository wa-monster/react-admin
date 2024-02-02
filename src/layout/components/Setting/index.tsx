import React from "react";
import { Drawer, Switch, theme, Tooltip, ColorPicker } from "antd";
import { useState } from "react";
import { SettingOutlined } from "@ant-design/icons";
import styles from "./index.module.less";
import { useStore } from "@/store";
import type { Color } from "antd/es/color-picker";
const { useToken } = theme;
import { t } from "i18next";
import { debounce } from "lodash";
const Setting = () => {
  const { token } = useToken();
  const { layout, theme: themeColor } = useStore();
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState<Color | string>(token.colorPrimary);
  const onClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };
  const changeLogo = (checked: boolean) => {
    layout.setLogoDisabled(checked);
  };
  const changeTop = (checked: boolean) => {
    layout.setTopDisabled(checked);
  };
  const changeMenu = (checked: boolean) => {
    layout.setMenuDisabled(checked);
  };
  const ChangeThemeColor = (color: Color, hex: string) => {
    themeColor.setColorPrimary(hex as unknown as string);
    setColor(color);
  };
  return (
    <>
      <div
        onClick={onOpen}
        className={styles.settingTool}
        style={{ backgroundColor: token.colorPrimary }}
      >
        <SettingOutlined
          style={{ color: "#fff", fontSize: "20px" }}
        ></SettingOutlined>
      </div>
      <Drawer
        title={t("全局设置")}
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="flex justify-between w-56 mt-6">
          <Tooltip title={t("当其他两项关闭，logo也会自动关闭")}>
            <span style={{ marginRight: "10px" }}>{t("Logo")}:</span>
          </Tooltip>
          <Switch
            checkedChildren="开启"
            unCheckedChildren="关闭"
            checked={layout.logoDisabled}
            onChange={changeLogo}
          />
        </div>
        <div className="flex justify-between w-56 mt-6">
          <span style={{ marginRight: "10px" }}>{t("顶部信息")}:</span>
          <Switch
            checkedChildren="开启"
            unCheckedChildren="关闭"
            checked={layout.topDisabled}
            onChange={changeTop}
          />
        </div>
        <div className="flex justify-between w-56 mt-6">
          <span style={{ marginRight: "10px" }}>{t("侧边菜单")}:</span>
          <Switch
            checkedChildren="开启"
            unCheckedChildren="关闭"
            checked={layout.menuDisabled}
            onChange={changeMenu}
          />
        </div>
        <div className="flex justify-between w-56 mt-6">
          <span style={{ marginRight: "10px" }}>{t("主题颜色")}:</span>
          <ColorPicker
            value={color}
            onChange={debounce(ChangeThemeColor, 200)}
          />
        </div>
      </Drawer>
    </>
  );
};
export default Setting;
