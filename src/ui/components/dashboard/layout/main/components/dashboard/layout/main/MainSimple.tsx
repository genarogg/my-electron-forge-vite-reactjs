import React, { useEffect, useState, useContext } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { GlobalStateContext } from "@components/state/Redux";
import { components } from "./components/Components";

interface MainSimpleProps {}

const MainSimple: React.FC<MainSimpleProps> = () => {
  const [context, setContext] = useState<string | null>("inicio");

  const { state } = useContext(GlobalStateContext);

  useEffect(() => {
    setContext(state.context);
  }, [state]);

  const renderComponent = () => {
    for (const section of components) {
      for (const element of section.elements) {
        if (element.context === context) {
          return React.createElement(element.component);
        }
      }
    }
    return <p>Componente no encontrado</p>; // Componente por defecto si no se encuentra coincidencia
  };

  return (
    <SwitchTransition>
      <CSSTransition
        key={context}
        timeout={500}
        classNames="main-component fade"
      >
        <div className="container-main-db">{renderComponent()}</div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default MainSimple;
