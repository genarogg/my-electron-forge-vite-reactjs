import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import LayoutTablet from "./LayoutTablet";
import { BtnNormalBasic } from "@btn";

import { useSimpleNav } from "@components/state/useSimpleNav";

interface TabletTrabajadorProps {
  nameTabla: string;
  onClick: () => void;
  rowData: any[];
  columnDefs: any[];
  ir: string;
  subname?: string;
}

const TabletTrabajador: React.FC<TabletTrabajadorProps> = ({
  nameTabla,
  subname = "añadir un",
  onClick,
  rowData,
  columnDefs,
  ir,
}) => {
  const { state, handleChangeContext } = useSimpleNav();
  const [quickFilterText, setQuickFilterText] = useState<string>("");

  const combinedFunction = () => {
    onClick();
    handleChangeContext(ir, state.context);
  };

  return (
    <LayoutTablet>
      <div className={`container-header-tablet ${nameTabla}`}>
        <BtnNormalBasic onClick={combinedFunction}>
          <span>
            {subname} {nameTabla}
          </span>
        </BtnNormalBasic>
        <input
          type="text"
          placeholder="Buscar..."
          onChange={(e) => setQuickFilterText(e.target.value)}
        />
      </div>
      <div className="ag-theme-alpine table-container">
        <AgGridReact
          rowData={rowData.reverse()}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={30}
          quickFilterText={quickFilterText}
        />
      </div>
    </LayoutTablet>
  );
};

export default TabletTrabajador;
