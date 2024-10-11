import React, { useEffect, useState, useContext } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { GlobalStateContext } from "@redux";
import { components } from "./components/Components";

interface MainSimpleProps {}

const MainSimple: React.FC<MainSimpleProps> = () => {
  const [context, setContext] = useState<string | null>("inicio");

  const { state } = useContext(GlobalStateContext);

  console.log(state);

  useEffect(() => {
    setContext(state.context);
  }, [state]);

  console.log(components);

  const renderComponent = () => {
    for (const section of components) {
      for (const element of section.elements) {
        if (element.context === context) {
          return React.createElement(element.component);
        }
      }
    }
    return <p></p>;
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
