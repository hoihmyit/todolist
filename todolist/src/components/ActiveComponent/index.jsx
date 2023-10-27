import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
const index = () => {
  return (
    <div
      className={styles.navigationActive}
      onClick={() => setActiveTab("active")}
    >
      <div
        className
      >
        <Link to='/'>Active</Link>
      </div>
    </div>
  );
};

export default index;
