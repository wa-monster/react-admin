import { makeAutoObservable } from "mobx";
interface StoreProps {
  openTags: any[];
  tagsMap: Map<string, any>;
  setTags: (tag: any) => void;
  deleteTag: (tag: any) => void;
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
  deleteTag(tag: any) {
    if (this.tagsMap.has(tag.pathname)) {
      this.tagsMap.delete(tag.pathname);
      this.openTags = this.openTags.filter((v) => {
        return v.pathname !== tag.pathname;
      });
      console.log("this.openTags", this.openTags);
    }
  },
};
const tags = makeAutoObservable(tagsObj);

export default tags;
