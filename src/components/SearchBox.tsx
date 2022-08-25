import React from "react";
import styles from "./SearchBox.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const bentoDots = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const SearchBox = () => {
  return (
    <Box className={styles.header}>
      <Box className={styles["header__menu"]}>
        <MenuIcon />
      </Box>
      <Box className={styles["header__logo"]}>
        <img
          src={require("../assets/images/keep_icon.png")}
          alt=""
          width="40"
          height="40"
        />
      </Box>
      <Box className={styles["header__title"]}>
        <Typography sx={{ fontSize: 22 }}>Keep</Typography>
      </Box>
      <Box className={styles["header__search-bar"]}>
        <SearchIcon />
        <InputBase placeholder="Поиск" />
      </Box>
      <Box className={styles["header__panel"]}>
        <Box className={styles["header__panel-reload"]} />
        <Box className={styles["header__panel-grid"]} />
        <Box className={styles["header__panel-settings"]} />
      </Box>
      <Box>
        <Box className={styles["header__personal"]}>
          <Box className={styles["bento-menu"]}>
            {bentoDots.map((item) => (
              <Box className={styles["bento-dot"]} key={item}></Box>
            ))}
          </Box>
          <AccountCircleIcon fontSize="large" />
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBox;
