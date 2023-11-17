import { makeAutoObservable } from "mobx";
interface StoreProps {
  openTags: any[];
  tagsMap: Map<string, any>;
  setTags: (tag: { pathname: string }) => void;
  deleteTag: (tag: { pathname: string }) => void;
  deleteOther: (tag: { pathname: string }) => void;
  deleteAll: () => void;
}
// const homeObj = {
//   pathname: "/home",
//   handle: {
//     name: "首页",
//   },
// };
const tagsObj: StoreProps = {
  openTags: [],
  tagsMap: new Map(),
  setTags(tag: { pathname: string }) {
    if (!this.tagsMap.has(tag.pathname)) {
      this.tagsMap.set(tag.pathname, "ok");
      this.openTags.push(tag);
    }
  },
  deleteTag(tag: { pathname: string }) {
    if (this.tagsMap.has(tag.pathname)) {
      this.tagsMap.delete(tag.pathname);
      this.openTags = this.openTags.filter((v) => {
        return v.pathname !== tag.pathname;
      });
      console.log("this.openTags", this.openTags);
    }
  },
  deleteOther(tag: { pathname: string }) {
    this.tagsMap = new Map([[tag.pathname, "ok"]]);
    this.openTags = [tag];
  },
  deleteAll() {
    this.tagsMap = new Map();
    this.openTags = [];
  },
};
const tags = makeAutoObservable(tagsObj);

export default tags;
