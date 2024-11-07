import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Icono } from "@nano";

interface InputProps {
  type: string;
  name: string;
  id?: string;
  placeholder: string;
  icono?: React.ReactNode;
  value: string | number | boolean;
  valueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasContentState?: boolean;
  max?: number;
  min?: number;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  checked?: boolean; // Nueva propiedad opcional
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  id = name,
  placeholder,
  icono,
  value,
  valueChange,
  hasContentState = false,
  min,
  max,
  required = true,
  disabled = false,
  className = "",
  checked, // Nueva propiedad opcional
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasContent, setHasContent] = useState(hasContentState);
  const [inputType, setInputType] = useState(type);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasContent(event.target.value !== "");
    valueChange(event);
  };

  const togglePasswordVisibility = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <div
      className={`container-input ${className} ${isFocused ? "focus" : ""} ${
        icono ? "" : "no-icon"
      }`}
    >
      {icono && (
        <label htmlFor={id}>
          <Icono icono={icono} />
        </label>
      )}

      <input
        type={inputType}
        name={name}
        required={required}
        disabled={disabled}
        id={id}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleInputChange}
        value={value as string | number | readonly string[] | undefined}
        {...(min ? { min } : {})}
        {...(max ? { max } : {})}
        {...(checked !== undefined ? { checked } : {})} // Manejar la propiedad checked
      />

      {type === "password" && (
        <button
          className="view-pass"
          type="button"
          onClick={togglePasswordVisibility}
        >
          {inputType === "password" ? (
            <label>
              <Icono icono={<FaRegEye />} />
            </label>
          ) : (
            <label>
              <Icono icono={<FaRegEyeSlash />} />
            </label>
          )}
        </button>
      )}
      <span className={`holder ${hasContent ? "has-content" : ""}`}>
        {placeholder}
      </span>
    </div>
  );
};

export default Input;