import { makeAutoObservable } from "mobx";
interface StoreProps {
  openTags: any[];
  tagsMap: Map<string, any>;
  setTags: (tag: any) => void;
}
const homeObj = {
  pathname: "/home",
  handle: {
    name: "首页",
  },
};
const tagsObj: StoreProps = {
  openTags: [],
  tagsMap: new Map(),
  setTags(tag: any) {
    if (!this.tagsMap.has(tag.pathname)) {
      this.tagsMap.set(tag.pathname, "ok");
      this.openTags.push(tag);
    }
  },
};
const tags = makeAutoObservable(tagsObj);

export default tags;
