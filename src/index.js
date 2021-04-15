import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Button from "./Button";
import List from "./List";
import Card from "./Card";
import Table from "./Table";
import "./index.css";

ReactDOM.render(
  <div>
    <Button />
    <Card />
    <List />
    <App />
    <Table />
  </div>,
  document.getElementById("root")
);
