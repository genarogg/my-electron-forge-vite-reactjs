import React, { useState } from "react";
/* import ReactSelect, { SingleValue } from "react-select"; */
import { Icono } from "@nano";
import Select from "react-select";

interface SelectInputProps {
  options: any;
  name: string;
  id?: string;
  placeholder: string;

  icono?: React.ReactNode;
  value: any | null;
  valueChange: any;
  content?: boolean;
}

const SelectInput: React.FC<SelectInputProps> = ({
  options,
  name,
  id = name,
  placeholder,
  icono,

  valueChange,
  content = false,

  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasContent, setHasContent] = useState(content);

  const handleInputChange = (selectedOption: any) => {
    setHasContent(selectedOption !== null);
    valueChange(selectedOption);
  };

  return (
    <div
      className={`container-input select ${isFocused ? "focus" : ""}`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    >
      {icono && (
        <label htmlFor={id}>
          <Icono icono={icono} />
        </label>
      )}

      <Select
        options={options}
        id={id}
        onChange={handleInputChange}
        name={name}
        defaultInputValue={options[0].value}
      />
      <span className={`holder ${hasContent ? "has-content" : ""}`}>
        {placeholder}
      </span>
    </div>
  );
};

export default SelectInput;
