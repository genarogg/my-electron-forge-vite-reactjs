import React from "react";
import { Icono } from "@nano";
import { BtnNormalBasic } from "@btn";
import { useSimpleNav } from "@components/state/useSimpleNav";

import { components } from "../../main/components/Components";

interface SimpleNavProps {}

const SimpleNav: React.FC<SimpleNavProps> = () => {
  const { selectedContext, handleChangeContext } = useSimpleNav();

  const navSections = components
    .filter((section: any) => section.titleSecction !== "otros")
    .map((section: any) => ({
      title: section.titleSecction,
      items: section.elements.map((element: any) => ({
        context: element.context,
        text: element.context,
        icon: element.icon,
      })),
    }));

  return (
    <div className="container-nav-simple">
      {navSections.map((section: any, sectionIndex: any) => (
        <div key={sectionIndex}>
          <div className="title-nav">
            <h4>{section.title}</h4>
          </div>
          <nav>
            <ul>
              {section.items.map((item: any, itemIndex: any) => (
                <li key={itemIndex}>
                  <BtnNormalBasic
                    className={
                      selectedContext === item.context ? "selected" : ""
                    }
                    onClick={() =>
                      handleChangeContext(item.context, section.title)
                    }
                  >
                    <Icono icono={item.icon} />
                    <div className="text">{item.text}</div>
                  </BtnNormalBasic>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ))}
    </div>
  );
};

export default SimpleNav;
