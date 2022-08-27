import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import styles from "./SectionInfo.module.scss";

interface Info {
  paragraph: string | null;
  sectionSelector: string | null;
  section: string;
}
const SectionInfo: React.FC<Info> = ({
  section,
  paragraph,
  sectionSelector,
}: Info) => {
  switch (section) {
    case "note":
      paragraph = "Здесь будут ваши заметки";
      sectionSelector = "note";
      break;
    case "reminder":
      paragraph = "Здесь будут заметки с напоминаниями.";
      sectionSelector = "reminder";
      break;
    case "label":
      paragraph = "Нет заметок с этим ярлыком";
      sectionSelector = "label";
      break;
    case "basket":
      paragraph = "В корзине ничего нет.";
      sectionSelector = "basket";
      break;
    case "archieve":
      paragraph = "Здесь будут храниться архивированные заметки.";
      sectionSelector = "archieve";
      break;
  }
  return (
    <Box className={styles["section-info"]}>
      <Box className={styles[`section-info_logo-${sectionSelector}`]}></Box>
      <Typography className={styles["section-info_title"]} variant="h6">
        {paragraph}
      </Typography>
    </Box>
  );
};

export default SectionInfo;
