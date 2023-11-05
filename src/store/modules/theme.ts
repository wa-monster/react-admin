import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
const themeObj = {
  colorPrimary: "#4096ff",
  getColorPrimary() {
    this.colorPrimary = "";
  },
  setColorPrimary(color: string) {
    this.colorPrimary = color;
  },
  colorMenuLogo: "#001529",
  getColorMenuLogo() {
    this.colorPrimary = "";
  },
  setColorMenuLogo(color: string) {
    this.colorPrimary = color;
  },
};
const theme = makeAutoObservable(themeObj);
makePersistable(theme, {
  name: "theme",
  properties: ["colorPrimary", "colorMenuLogo"],
  storage: window.localStorage,
});

export default theme;
