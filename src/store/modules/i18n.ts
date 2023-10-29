import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

const i18nObj = {
  lang: "zh_CN",
  setLocal(lang: string) {
    this.lang = lang;
  },
};
const i18n = makeAutoObservable(i18nObj);
makePersistable(i18n, {
  name: "i18n",
  properties: ["lang"],
  storage: window.localStorage,
});

export default i18n;
