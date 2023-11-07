import React, { useEffect, useState } from "react";
import styles from "./index.module.less";
import { useLocation, useMatches, useLoaderData } from "react-router-dom";
const TopNavbar = () => {
  const location = useLocation();
  const matches = useMatches();
  const [tags, setTags] = useState([]);
  useEffect(() => {
    console.log("matches", matches);
    console.log("location", location);
  }, [location]);
  return (
    <div className={styles.topNavbar}>
      <div></div>
    </div>
  );
};
export default TopNavbar;
