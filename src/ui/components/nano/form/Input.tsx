import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

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
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasContent, setHasContent] = useState(hasContentState);
  const [inputType, setInputType] = useState(type); // Nuevo estado para el tipo de entrada

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasContent(event.target.value !== "");
    valueChange(event);
  };

  const togglePasswordVisibility = () => {
    // Nueva función para cambiar la visibilidad de la contraseña
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
        type={inputType} // Usar inputType en lugar de type
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
      />

      {type === "password" && ( // Si el tipo es password, mostrar el botón
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
