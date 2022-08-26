import React, { useState } from "react";
import styles from "./Workspace.module.scss";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import { motion } from "framer-motion";
import SectionInfo from "./SectionInfo";

const Workspace = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <Box
      className={styles.workspace}
      component={motion.div}
      onClick={() => setIsShow(!isShow)}
    >
      <InputBase
        placeholder="Заметка..."
        className={styles["workspace__input"]}
      />
      <Box className={styles["workspace__options"]} component={motion.div}>
        <Box className={styles["workspace__options_item"]}>
          <Tooltip title="Создать список">
            <Box className={styles["workspace__options_item_list-add"]} />
          </Tooltip>
        </Box>
        <Box className={styles["workspace__options_item"]}>
          <Tooltip title="Создать заметку с рисунком">
            <Box className={styles["workspace__options_pic-add"]} />
          </Tooltip>
        </Box>
        <Box className={styles["workspace__options_item"]}>
          <Tooltip title="Создать фотозаметку">
            <Box className={styles["workspace__options_img-add"]} />
          </Tooltip>
        </Box>
      </Box>
      <Box className={styles["workspace__section-info"]}>
        <SectionInfo section={"note"} />
      </Box>
    </Box>
  );
};

export default Workspace;
