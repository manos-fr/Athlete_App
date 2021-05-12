import React from "react";
import ReactDOM from "react-dom";
import MainInfo from "./MainInfo";
import TopBar from "./TopBar";
import Profile from "./Profile";
import SecondInfo from "./SecondInfo";
import OpenMenu from "./OpenMenu";
import "./index.css";

ReactDOM.render(
  <div>
    <TopBar />
    <OpenMenu />
    <Profile />
    <SecondInfo />
  </div>,
  document.getElementById("root")
);
