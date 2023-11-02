import React from "react";
import styles from "./style.module.css";
const index = () => {
  //It accepts two parameters, setActiveTab and activeTab. props from the parent (from the App component)
  return (
    <div
      className={styles.navigationCompleted}
    >
      <div
      >
        Completed
      </div>
    </div>
  );
};

export default index;
