import React from "react";

import { GlobalStateContext, ActionTypes } from "@redux";

import AsideSimple from "./aside/AsideSimple";
import { useContext, useEffect } from "react";
import HeaderSimpleDB from "./header/HeaderSimpleDB";

// import { LayoutElectron } from "@electron";

import MainSimple from "./main/MainSimple";

interface LayoutSimpleDBProps {}

const LayoutSimpleDB: React.FC<LayoutSimpleDBProps> = () => {
  const { state, dispatch } = useContext(GlobalStateContext);

  // @revision
  // useEffect(() => {
  //   dispatch({ type: ActionTypes.SET_CONTEXT, payload: "SimpleDB" });
  //   dispatch({ type: ActionTypes.SET_SUB_CONTEXT, payload: "" });
  // }, []);

  return (
    // <LayoutElectron>
    <div className={`simple-db ${state.active_aside ? "aside-active" : ""}`}>
      <AsideSimple />
      <div className="container-simple">
        <HeaderSimpleDB />
        <main className="main-simple">
          <MainSimple />
        </main>
      </div>
    </div>
    // </LayoutElectron>
  );
};

export default LayoutSimpleDB;
