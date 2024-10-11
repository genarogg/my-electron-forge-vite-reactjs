import React from 'react'
import { Link } from "react-router-dom";

interface AProps {
  href: string;
  type?: string;
  children?: React.ReactNode;
  className?: string;
}

const A: React.FC<AProps> = ({ href, type, children, className }) => {
  if (type === "mailto") {
    return (
      <a href={`mailto:${href}`} className={className}>
        {children}
      </a>
    );
  }

  if (type === "a") {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
};

export default A;
