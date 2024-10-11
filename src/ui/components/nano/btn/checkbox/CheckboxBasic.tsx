import React, { useState } from "react";
import { Icono } from "@nano";
import { FaSquareCheck } from "react-icons/fa6";
import { ImCheckboxUnchecked } from "react-icons/im";

interface CheckBoxBasicProps {
  text: string;
  valueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBoxBasic: React.FC<CheckBoxBasicProps> = ({ text, valueChange }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    valueChange({ target: { checked: !isClicked } } as React.ChangeEvent<
      HTMLInputElement
    >);
  };

  return (
    <div className="checkbox-basic" onClick={handleClick}>
      {isClicked ? (
        <Icono icono={<FaSquareCheck />} className="animate" />
      ) : (
        <Icono icono={<ImCheckboxUnchecked />} />
      )}
      <span className="text">{text}</span>
    </div>
  );
};

export default CheckBoxBasic;
