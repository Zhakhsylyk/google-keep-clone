import React from "react";
import Box from "@mui/material/Box";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <Box className={styles.sidebar}>
      <Box className={styles["sidebar__section"]}>
        <Box className={styles["sidebar__note"]}></Box>
      </Box>
      <Box className={styles["sidebar__section"]}>
        <Box className={styles["sidebar__reminder"]}></Box>
      </Box>
      <Box className={styles["sidebar__section"]}>
        <Box className={styles["sidebar__label"]}></Box>
      </Box>
      <Box className={styles["sidebar__section"]}>
        <Box className={styles["sidebar__archieve"]}></Box>
      </Box>
      <Box className={styles["sidebar__section"]}>
        <Box className={styles["sidebar__basket"]}></Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
