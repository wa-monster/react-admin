import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

const i18nObj = {
  lang: "zh_CN",
  setLocal(lang: string) {
    this.lang = lang;
  },
};
const a = makeAutoObservable(i18nObj);
makePersistable(a, {
  name: "i18n",
  properties: ["lang"],
  storage: window.localStorage,
});

export default a;
