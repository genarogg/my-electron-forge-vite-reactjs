import { GlobalStateContext, ActionTypes } from "@redux";
import React, { useContext } from "react";
import Separador from "../separador/Separador";

interface TituloNavSimpleProps {}

const TituloNavSimple: React.FC<TituloNavSimpleProps> = () => {
  const { dispatch } = useContext(GlobalStateContext);

  const handleChangeContext = (newContext: string) => {
    dispatch({ type: ActionTypes.SET_CONTEXT, payload: newContext });
  };

  return (
    <div className="nav-title-simple">
      <button
        className="nav-title-button"
        onClick={() => handleChangeContext("SimpleDB")}
      >
        <h2>
          e.t. ademar <br />
          vasquez chavez
        </h2>
        <Separador />
      </button>
    </div>
  );
};

export default TituloNavSimple;
