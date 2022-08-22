import React from "react";
import styles from "./SearchBox.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
        <Typography variant="h6">
          Keep
        </Typography>
      </Box>
      <Box className={styles["header__search-bar"]}>
        <SearchIcon />
        <InputBase placeholder="Поиск" />
      </Box>
      <Box className={styles['panel']}>
        <Box className={styles['panel__reload']} />
        <Box className={styles['panel__grid']} />
        <Box className={styles['panel__settings']} />
      </Box>
      <Box>
        <Box className="info">
            <AccountCircleIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBox;
