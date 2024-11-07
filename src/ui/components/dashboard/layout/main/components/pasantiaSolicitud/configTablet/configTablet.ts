import { ColDef, ColGroupDef } from "ag-grid-community";
import SolicitudPasantiaTypes from "./SolicitudPasantiaTypes";
import ActionsCellRenderer from "../../cell-renderers/ActionsCellRenderer";

const solicitudPasantiaColumnDefs: (ColDef<SolicitudPasantiaTypes> | ColGroupDef<SolicitudPasantiaTypes>)[] = [
  {
    headerName: "Index",
    field: "id",
    width: 100,
    valueGetter: (params) => {
      if (params.node && params.node.rowIndex !== null && params.node.rowIndex !== undefined) {
        return params.node.rowIndex + 1;
      }
      return null;
    },
  },
  {
    headerName: "DATOS DE LA EMPRESA",
    children: [
      { headerName: "Nombre Empresa", field: "nombreEmpresa", filter: true },
      { headerName: "Dirección Empresa", field: "direccionEmpresa", filter: true },
      { headerName: "Punto de Referencia", field: "puntoDeReferencia", filter: true },
      { headerName: "Nombre y Apellido a Quien Dirigir", field: "nombreYApellidoAquienDirigir", filter: true },
      { headerName: "Cargo a Quien Dirigir", field: "cargoAquienDirigir", filter: true },
      { headerName: "Teléfono Empresa", field: "telefonoEmpresa", filter: true },
    ],
  },
  {
    headerName: "INFORMACIÓN DE LAS MATERIAS PENDIENTES",
    children: [
      { headerName: "Asignatura", field: "asignatura", filter: true },
      { headerName: "Docente Tutor", field: "docenteTutor", filter: true },
      { headerName: "Fecha", field: "fecha", filter: true },
      { headerName: "Evaluación", field: "evaluacion", filter: true },
    ],
  },
  {
    headerName: "INFORMACIÓN DEL PASANTE",
    children: [
      { headerName: "Nombre", field: "nombre", filter: true },
      { headerName: "Apellido", field: "apellido", filter: true },
      { headerName: "Cédula", field: "cedula", filter: true },
      { headerName: "Teléfono", field: "telefono", filter: true },
    ],
  },
  {
    headerName: "DOCUMENTACIÓN",
    children: [
      { headerName: "Foto Tipo de Carnet", field: "fotoTipoDeCarnet", filter: true },
      { headerName: "Copia de Cédula", field: "copiaDeCedula", filter: true },
      { headerName: "Copia RIF", field: "copiaRIF", filter: true },
      { headerName: "Copia de Partida de Nacimiento", field: "copiaDePartidaDeNacimiento", filter: true },
      { headerName: "Constancia de Residencia", field: "constanciaDeResidencia", filter: true },
      { headerName: "Carnet Militar", field: "carnetMilitar", filter: true },
      { headerName: "Certificado de Salud", field: "certificadoDeSalud", filter: true },
      { headerName: "Examen Médico", field: "examenMedico", filter: true },
      { headerName: "Carta de Postulación", field: "cartaDePostulacion", filter: true },
      { headerName: "Síntesis Curricular", field: "sintesisCurricular", filter: true },
    ],
  },
  {
    headerName: "STATUS",
    children: [
      { headerName: "Aprobado", field: "aprobado", filter: true },
      { headerName: "Motivo", field: "motivo", filter: true },
    ],
  },
  {
    headerName: "Acciones",
    cellRenderer: (params: any) => {
      return ActionsCellRenderer(params);
    },
  },
];

export default solicitudPasantiaColumnDefs;