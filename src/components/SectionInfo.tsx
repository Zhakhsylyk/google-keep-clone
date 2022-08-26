import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import styles from "./SectionInfo.module.scss";

const SectionInfo: React.FC<{ section: string }> = ({ section }) => {
  switch (section) {
    case "note":
      return <Box>Note</Box>;
    case "basket":
      return <Box>Basket</Box>;
    case "archieve":
      return <Box>Archieve</Box>;
  }
  return (
    <Box className={styles["section-info"]}>
      <Box className={styles["section-info_logo"]}></Box>
      <Typography className={styles["section-info_title"]} variant="h6">
        Здесь будут ваши заметки. {section}
      </Typography>
    </Box>
  );
};

export default SectionInfo;
