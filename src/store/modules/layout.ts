import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
export const layoutBoxObj = {
  logoDisabled: true,
  logoJustIcon: false,
  topDisabled: true,
  menuDisabled: true,
  menuJustIcon: false,
  setLogoDisabled(bool: boolean) {
    this.logoDisabled = bool;
  },
  setLogoJustIcon(bool: boolean) {
    this.logoJustIcon = bool;
  },
  setMenuJustIcon(bool: boolean) {
    this.menuJustIcon = bool;
  },
};
export type layoutBoxObjType = typeof layoutBoxObj;
const layout = makeAutoObservable(layoutBoxObj);
makePersistable(layout, {
  name: "layout",
  properties: ["logoDisabled", "topDisabled", "menuDisabled"],
  storage: window.localStorage,
});

export default layout;
