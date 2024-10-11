import React, { useContext } from "react";
import { GlobalStateContext, ActionTypes } from "@redux";
import { A } from "@nano";
import { BtnNormalBasic } from "@btn";
import Separador from "../separador/Separador";

interface FooterNavSimpleProps {}

const FooterNavSimple: React.FC<FooterNavSimpleProps> = () => {
  const { dispatch } = useContext(GlobalStateContext);

  const handleReset = () => {
    dispatch({ type: ActionTypes.RESET_STATE });
    // A({ href: "/", type: "push" });
  };

  return (
    <>
      <footer className="nav-footer-simple">
        <Separador />
        <A href="/">
          <BtnNormalBasic onClick={handleReset} className="cerrar-sesion">
            <h2>Cerrar sesión</h2>
          </BtnNormalBasic>
        </A>
      </footer>
    </>
  );
};

export default FooterNavSimple;
