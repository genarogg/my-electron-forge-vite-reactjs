import React from 'react'

interface IconoProps {
  icono?: React.ReactNode;
  className?: string;
}

const Icono: React.FC<IconoProps> = ({ icono, className = " " }) => {
  return <span className={`icono ${className}`}>{icono}</span>;
};

export default Icono;
