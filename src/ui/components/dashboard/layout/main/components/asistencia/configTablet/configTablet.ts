import { ColDef, ColGroupDef } from "ag-grid-community";
import Empleado from "./AsistenciaTypes";

const empleadoColumnDefs: (ColDef<Empleado> | ColGroupDef<Empleado>)[] = [
  {
    headerName: "ID",
    field: "id",
    width: 100,
    icons: {
      sortAscending: '<i class="fa fa-sort-alpha-up"/>',
      sortDescending: '<i class="fa fa-sort-alpha-down"/>',
    },
  },
  {
    headerName: "Personal ID",
    field: "personal_id",
    filter: true,
    width: 150,
  },
  {
    headerName: "Nombres",
    field: "nombres",
    filter: true,
    width: 150,
  },
  {
    headerName: "Apellidos",
    field: "apellidos",
    filter: true,
    width: 150,
  },
  {
    headerName: "CI",
    field: "ci",
    filter: true,
    width: 150,
  },
  {
    headerName: "Fecha",
    field: "fecha",
    filter: true,
    width: 150,
  },
  {
    headerName: "Hora de Entrada",
    field: "hora_entrada",
    filter: true,
    width: 150,
  },
  {
    headerName: "Hora de Salida",
    field: "hora_salida",
    filter: true,
    width: 150,
  },
  {
    headerName: "Vino",
    field: "vino",
    filter: true,
    width: 150,
  },
];

export default empleadoColumnDefs;
