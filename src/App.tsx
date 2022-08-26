import React, { Fragment } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import Sidebar from "./components/Sidebar";
import Workspace from "./components/Workspace";

function App() {
  return (
    <Fragment>
      <SearchBox />
      <Workspace />
      <Sidebar />
    </Fragment>
  );
}

export default App;
