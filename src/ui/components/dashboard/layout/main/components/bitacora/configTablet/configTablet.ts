import { ColDef, ColGroupDef } from "ag-grid-community";
import BitacoraTypes from "./BitacoraTypes";

const bitacoraColumnDefs: (
  | ColDef<BitacoraTypes>
  | ColGroupDef<BitacoraTypes>
)[] = [
  {
    field: "id",
    width: 100,
  },

  { headerName: "Usuario", field: "usuario", filter: true },
  { headerName: "Acción", field: "accion", filter: true },
  { headerName: "Fecha", field: "fecha", filter: true },
  { headerName: "Hora", field: "hora", filter: true },
];

export default bitacoraColumnDefs;
