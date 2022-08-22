import React, { Fragment } from "react";
import "./App.css";
import ListItem from "./components/ListItem";
import SearchBox from "./components/SearchBox";
import Sidebar from "./components/Sidebar";
import Workspace from "./components/Workspace";

function App() {
  return (
    <Fragment>
      <SearchBox />
      <Workspace />
      <ListItem />
      <Sidebar />
    </Fragment>
  );
}

export default App;
