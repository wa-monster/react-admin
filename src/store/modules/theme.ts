import { makeAutoObservable } from "mobx";

export default makeAutoObservable({
  colorPrimary: "#4096ff",
  getColorPrimary() {
    this.colorPrimary = "";
  },
  setColorPrimary(color: string) {
    this.colorPrimary = color;
  },
  colorMenuLogo: "#001529",
  getColorMenuLogo(color: string) {
    this.colorPrimary = "";
  },
  setColorMenuLogo(color: string) {
    this.colorPrimary = color;
  },
});
