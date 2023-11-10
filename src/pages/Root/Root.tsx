import React from "react";
import st from "./Root.module.scss";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div className={st.page}>
      <h1 className={st.page__head}>TO-DO-LIST</h1>
      <Outlet />
    </div>
  );
};

export default Root;
