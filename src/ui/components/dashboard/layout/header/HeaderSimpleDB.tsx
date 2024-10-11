import React from 'react'

import { A } from "@nano";

import { GlobalStateContext } from "@redux";

import { useEffect, useContext, useState } from "react";
import LogoORuser from "./btn/LogoORuser";

interface HeaderSimpleDBProps {}

const HeaderSimpleDB: React.FC<HeaderSimpleDBProps> = () => {
  const { state } = useContext(GlobalStateContext);

  const [context, setContext] = useState<string | null>("");
  const [subContext, subSetContext] = useState<string | null>("");
  useEffect(() => {
    setContext(state.context);
    subSetContext(state.sub_context);
  }, [state.context]);

  const cantidadDeItems = 2;

  return (
    <>
      <header className="header-simple-db">
        <div className="left">
          <div className="ruta">
            <div className="ruta-completa">
              <h6>
                <A href="#">Dashboard</A>
                {" / "}
                <A href="#">{subContext}</A>
                {" / "}
                <A href="#">{context}</A>
              </h6>
            </div>
            <div className="name-component">
              <h4>{context}</h4>
            </div>
          </div>
        </div>

        <div className="right ">
          <div className="container-nav">
            <nav>
              <ul
                style={{
                  gridTemplateColumns: `repeat(${cantidadDeItems}, 1fr)`,
                }}
              >
                <li>
                  <button>1</button>
                </li>
                <li>
                  <button>2</button>
                </li>
              </ul>
            </nav>
          </div>
          <LogoORuser />
        </div>
      </header>
    </>
  );
};

export default HeaderSimpleDB;
