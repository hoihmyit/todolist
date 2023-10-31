import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
const index = ({ setActiveTab, activeTab }) => {
  const isActive = activeTab === "all";
  return (
    <div
      className={styles.navigationAll}
      onClick={() => setActiveTab("all")}
    >
      <div
        className={`${styles.navigationBar} ${isActive ? styles.active : ""}`}
      >
        <Link to='/'>All</Link>
      </div>
    </div>
  );
};

export default index;
