import React from 'react'
import SimpleNav from "./nav/SimpleNav";
import TituloNavSimple from "./titulo/TituloNavSimple";
import FooterNavSimple from "./footer/FooterNavSimple";
import { useContext } from "react";
import { GlobalStateContext, ActionTypes } from "@redux";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
interface AsideSimpleProps {}

const AsideSimple: React.FC<AsideSimpleProps> = () => {
  const { dispatch, state } = useContext(GlobalStateContext);

  const handleActiveAside = () => {
    dispatch({
      type: ActionTypes.SET_ACTIVE_ASIDE,
      payload: !state.active_aside,
    });
  };

  return (
    <aside className="simple-aside">
      <TituloNavSimple />
      <SimpleNav />
      <FooterNavSimple />
      <div className="closed-nav-simple">
        <button
          onClick={() => {
            handleActiveAside();
          }}
        >
          {state.active_aside ? <FaAngleRight /> : <FaAngleLeft />}
        </button>
      </div>
    </aside>
  );
};

export default AsideSimple;
