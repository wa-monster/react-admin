import React, { useEffect, useState } from "react";
import styles from "./index.module.less";
import {
  useLocation,
  useMatches,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
const TopNavbar = () => {
  const location = useLocation();
  const matches = useMatches();
  const navigate = useNavigate();
  const [tags, setTags] = useState<any[]>([]);
  const tagsMap = new Map();

  const addTags = (tag: any) => {
    console.log("tagsMap", tagsMap);

    if (!tagsMap.has(tag.id)) {
      tagsMap.set(tag.id, tag);
      setTags([...tagsMap.values()]);
    }
    if (location.pathname !== tag.pathname) {
      navigate(tag.pathname);
    }
  };
  useEffect(() => {
    console.log("location", location);
    let current = matches[matches.length - 1];
    console.log("current", current);
    addTags(current);
    console.log("tags", tags);
  }, [matches]);
  return (
    <div className={styles.topNavbar}>
      {tags.map((v) => {
        return <div key={v.id}>{v.handle.name}</div>;
      })}
    </div>
  );
};
export default TopNavbar;
