import { ColDef, ColGroupDef } from "ag-grid-community";
import UsuarioTypes from "./UsuarioTypes";
import ActionsCellRenderer from "../../cell-renderers/ActionsCellRenderer";

const UsuarioTypesColumnDefs: (
  | ColDef<UsuarioTypes>
  | ColGroupDef<UsuarioTypes>
)[] = [
  {
    headerName: "Index",
    field: "id",
    width: 100,
    valueGetter: (params) => {
      if (
        params.node &&
        params.node.rowIndex !== null &&
        params.node.rowIndex !== undefined
      ) {
        return params.node.rowIndex + 1;
      }
      return null;
    },
  },

  { headerName: "Nombres", field: "nombre", filter: true },
  { headerName: "Apellidos", field: "apellido", filter: true },
  { headerName: "Email", field: "email", filter: true },

  { headerName: "Role", field: "role", filter: true },
  { headerName: "C.I", field: "ci", filter: true },
  {
    headerName: "Cargo Institucional",
    field: "cargo_institucional",
    filter: true,
  },

  {
    headerName: "Acciones",
    cellRenderer: (params: any) => {
      return ActionsCellRenderer(params);
    },
  },
];

export default UsuarioTypesColumnDefs;
