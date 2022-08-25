import React, { useState, useRef, useLayoutEffect } from "react";
import Box from "@mui/material/Box";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const widthRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState<any>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useLayoutEffect(() => {
    setWidth(widthRef.current?.offsetWidth);
  }, []);

  const mouseOverHandler = () => {
    setIsOpen(true);
  };
  const mouseOutHandler = () => {
    setIsOpen(false);
  };

  const onSelectedHandler = (e: any) => {
    e.currentTarget.style.backgroundColor = "#feefc3";
  };

  return (
    <Box
      className={styles.sidebar}
      ref={widthRef}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <Box style={{ height: 48, width: 48 }}>
        <Box
          className={styles["sidebar__note"]}
          onClick={onSelectedHandler}
        ></Box>
      </Box>
      <Box style={{ height: 48, width: 48 }}>
        <Box className={styles["sidebar__reminder"]}></Box>
      </Box>
      <Box style={{ height: 48, width: 48 }}>
        <Box className={styles["sidebar__label"]}></Box>
      </Box>
      <Box style={{ height: 48, width: 48 }}>
        <Box className={styles["sidebar__archieve"]}></Box>
      </Box>
      <Box style={{ height: 48, width: 48 }}>
        <Box className={styles["sidebar__basket"]}></Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
