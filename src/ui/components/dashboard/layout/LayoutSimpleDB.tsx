import { GlobalStateContext } from "@redux";

import AsideSimple from "./aside/AsideSimple";
import React, { useContext } from "react";
import HeaderSimpleDB from "./header/HeaderSimpleDB";
import { ToastContainer } from "react-toastify";
import MainSimple from "./main/MainSimple";
// import DemoEnviar from "./main/DemoEnviar";

interface LayoutSimpleDBProps {}

const LayoutSimpleDB: React.FC<LayoutSimpleDBProps> = () => {
  const { state } = useContext(GlobalStateContext);

  return (
    // <LayoutElectron>
    <div className={`simple-db ${state.active_aside ? "aside-active" : ""}`}>
      <AsideSimple />
      <div className="container-simple">
        <HeaderSimpleDB />

        <main className="main-simple">
          {/* <DemoEnviar /> */}
          <MainSimple />
        </main>
      </div>
      <ToastContainer />
    </div>
    // </LayoutElectron>
  );
};

export default LayoutSimpleDB;
