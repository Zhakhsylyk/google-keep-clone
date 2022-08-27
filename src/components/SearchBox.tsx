import React from "react";
import styles from "./SearchBox.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Tooltip from "@mui/material/Tooltip";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import useOutside from "../hooks/useOutside";

const bentoDots = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const SearchBox = () => {
  const [ref, isFocus, setIsFocus] = useOutside(false);
  const onSearchHandler = () => {
    setIsFocus(true);
  };

  return (
    <Box className={styles.header}>
      <Tooltip title="Главное меню">
        <Box className={styles["header__menu"]}>
          <MenuIcon />
        </Box>
      </Tooltip>
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
      <Box
        className={`${
          isFocus
            ? styles["header__search-bar_on"]
            : styles["header__search-bar"]
        }`}
      >
        <SearchIcon />
        <InputBase placeholder="Поиск" onClick={onSearchHandler} ref={ref} />
      </Box>
      <Box className={styles["header__panel"]}>
        <Tooltip title="Обновить">
          <Box className={styles["header__panel_item"]}>
            <Box className={styles["header__panel-reload"]} />
          </Box>
        </Tooltip>
        <Tooltip title="Список">
          <Box className={styles["header__panel_item"]}>
            <Box className={styles["header__panel-grid"]} />
          </Box>
        </Tooltip>
        <Tooltip title="Настройки">
          <Box className={styles["header__panel_item"]}>
            <Box className={styles["header__panel-settings"]} />
          </Box>
        </Tooltip>
      </Box>
      <Box>
        <Box className={styles["header__personal"]}>
          <Tooltip title="Приложение Google">
            <Box className={styles["header__panel_bento-menu"]}>
              <Box className={styles["bento-menu"]}>
                {bentoDots.map((item) => (
                  <Box className={styles["bento-dot"]} key={item}></Box>
                ))}
              </Box>
            </Box>
          </Tooltip>
          <AccountCircleIcon fontSize="large" />
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBox;
