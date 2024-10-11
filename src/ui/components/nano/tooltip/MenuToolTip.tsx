import React from "react";

interface MenuToolTipProps {
  children: React.ReactNode;
  items: string[] | React.ReactNode[] | undefined;
  className?: string;
  placement?: "top" | "bottom" | "left" | "right";
}

const MenuToolTip: React.FC<MenuToolTipProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`container-menu-tooltip ${className}`}>
      <button>{children}</button>
    </div>
  );
};

export default MenuToolTip;
