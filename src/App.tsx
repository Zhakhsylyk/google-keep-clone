import React, { Fragment } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Fragment>
      <SearchBox />
      {/* <Workspace />
      <ListItem /> */}
      <Sidebar />
    </Fragment>
  );
}

export default App;
