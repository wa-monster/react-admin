import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
export const layoutBoxObj = {
  logoDisabled: true,
  topDisabled: true,
  menuDisabled: true,
  logoJustIcon: false,
  menuJustIcon: false,
  contentDisabled: true,
  templateAreas: `
    "logo top"
    "menu content"
  `,
  setLogoDisabled(bool: boolean) {
    this.logoDisabled = bool;
    this.updateLayout();
  },
  setTopDisabled(bool: boolean) {
    this.topDisabled = bool;
    this.updateLayout();
  },
  setMenuDisabled(bool: boolean) {
    this.menuDisabled = bool;
    this.updateLayout();
  },
  setLogoJustIcon(bool: boolean) {
    this.logoJustIcon = bool;
  },
  setMenuJustIcon(bool: boolean) {
    this.menuJustIcon = bool;
  },
  setContentDisabled(bool: boolean) {
    this.contentDisabled = bool;
  },
  // 根据开关有8种布局
  updateLayout() {
    const strDisabled = `${layout.logoDisabled}-${layout.topDisabled}-${layout.menuDisabled}`;
    switch (strDisabled) {
      case "true-true-true":
        layout.templateAreas = `"logo top""menu content"`;
        break;
      case "false-false-false":
        layout.templateAreas = `"content content""content content"`;
        break;
      case "false-false-true":
        layout.templateAreas = `"menu content""menu content"`;
        break;
      case "false-true-false":
        layout.templateAreas = `"top top""content content"`;
        break;
      case "true-false-false":
        layout.logoDisabled = false;
        layout.templateAreas = `"content content""content content"`;
        break;
      case "false-true-true":
        layout.templateAreas = `"menu top""menu content"`;
        break;
      case "true-false-true":
        layout.templateAreas = `"logo content""menu content"`;
        break;
      case "true-true-false":
        layout.templateAreas = `"logo top""content content"`;
        break;
    }
  },
};
export type layoutBoxObjType = typeof layoutBoxObj;
const layout = makeAutoObservable(layoutBoxObj);
makePersistable(layout, {
  name: "layout",
  properties: ["logoDisabled", "topDisabled", "menuDisabled", "templateAreas"],
  storage: window.localStorage,
});

export default layout;
