import React from "react";
import { Icono } from "@nano";
import { BtnNormalBasic } from "@btn";
import { useSimpleNav } from "../../../../state/useSimpleNav";

import { components } from "../../main/components/Components";

interface SimpleNavProps {}

const SimpleNav: React.FC<SimpleNavProps> = () => {
  const { selectedContext, handleChangeContext } = useSimpleNav();

  const navSections = components
    .filter((section) => section.titleSecction !== "otros")
    .map((section) => ({
      title: section.titleSecction,
      items: section.elements.map((element) => ({
        context: element.context,
        text: element.context,
        icon: element.icon,
      })),
    }));
    
  return (
    <div className="container-nav-simple">
      {navSections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <div className="title-nav">
            <h4>{section.title}</h4>
          </div>
          <nav>
            <ul>
              {section.items.map((item, itemIndex) => (
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
