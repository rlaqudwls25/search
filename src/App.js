import React from "react";
import Search from "./search/container/Search";
import User from "./user/container/User";
import "antd/dist/antd.css";
import { Route } from "react-router";

function App() {
  return (
    <>
      <Route exact path="/" component={Search} />
      <Route path="/user/:name" component={User} />
    </>
  );
}

export default App;
