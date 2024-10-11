import React from 'react'

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

interface LayoutTabletProps {
  children: React.ReactNode;
}

const LayoutTablet: React.FC<LayoutTabletProps> = ({ children }) => {
  return (
    <>
      <div className="container-tablet">{children}</div>
    </>
  );
};

export default LayoutTablet;
