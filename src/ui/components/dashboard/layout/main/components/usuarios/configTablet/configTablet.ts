import { ColDef, ColGroupDef } from "ag-grid-community";
import EstudianteFamiliaTypes from "./EstudianteFamiliaTypes";
import ActionsCellRenderer from "../../cell-renderers/ActionsCellRenderer";

const EstudianteFamiliaTypesColumnDefs: (
  | ColDef<EstudianteFamiliaTypes>
  | ColGroupDef<EstudianteFamiliaTypes>
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
  {
    headerName: "DATOS DEL ESTUDIANTE",
    children: [
      { headerName: "Nombres", field: "nombres", filter: true },
      { headerName: "Apellidos", field: "apellidos", filter: true },
      { headerName: "C.I", field: "ci", filter: true },
      {
        headerName: "Fecha de Nacimiento",
        field: "fecha_nacimiento",
        filter: true,
      },
      { headerName: "Nacionalidad", field: "nacionalidad", filter: true },
      { headerName: "Sexo", field: "sex", filter: true },
      {
        headerName: "Lugar de Nacimiento",
        field: "lugar_nacimiento",
        filter: true,
      },
      {
        headerName: "Entidad Federativa",
        field: "entd_federativa",
        filter: true,
      },
      {
        headerName: "Plantel de Procedencia",
        field: "plantel_de_procedencia",
        filter: true,
      },
      { headerName: "Talla", field: "talla", filter: true },
      { headerName: "Peso", field: "peso", filter: true },
      { headerName: "Medidas", field: "medidas", filter: true },
      { headerName: "Edad", field: "edad", filter: true },
      { headerName: "Lateralidad", field: "lateralidad", filter: true },
      { headerName: "Talla de Camisa", field: "talla_camisa", filter: true },
      {
        headerName: "Talla de Pantalón",
        field: "talla_pantalon",
        filter: true,
      },
      { headerName: "Talla de Zapato", field: "talla_zapato", filter: true },
      {
        headerName: "Vía de Acceso al Lugar donde Vive",
        field: "via_de_acceso_al_lugar_donde_vive",
        filter: true,
      },
      { headerName: "Con Quién Vive", field: "con_quien_vive", filter: true },
      {
        headerName: "Condición Especial",
        field: "condicion_especial",
        filter: true,
      },
      {
        headerName: "Observación de Condición",
        field: "observacion_de_condicion",
        filter: true,
      },
      {
        headerName: "El Estudiante Consume Medicamento",
        field: "el_estudiante_consume_medicamento",
        filter: true,
      },
      {
        headerName: "Observación de Medicamento",
        field: "observacion_de_medicamento",
        filter: true,
      },
      {
        headerName: "Inicio del Período Escolar",
        field: "inicio_periodo_escolar",
        filter: true,
      },
      {
        headerName: "Fin del Período Escolar",
        field: "fin_periodo_escolar",
        filter: true,
      },
      { headerName: "Usuario", field: "usuario", filter: true },
      { headerName: "Creado en", field: "created_at", filter: true },
      { headerName: "Actualizado en", field: "updated_at", filter: true },
    ],
  },
  {
    headerName: "DATOS DEL REPRESENTANTE",
    children: [
      {
        headerName: "Apellidos",
        field: "representante_apellidos",
        filter: true,
      },
      { headerName: "Nombres", field: "representante_nombres", filter: true },
      {
        headerName: "Nacionalidad",
        field: "representante_nacionalidad",
        filter: true,
      },
      { headerName: "Cédula", field: "representante_cedula", filter: true },
      {
        headerName: "Fecha de Nacimiento",
        field: "representante_fecha_nacimiento",
        filter: true,
      },
      { headerName: "Urb/Br", field: "representante_urb_br", filter: true },
      {
        headerName: "Dirección de Habitación",
        field: "representante_direccion_habitacion_av",
        filter: true,
      },
      { headerName: "Calle", field: "representante_calle", filter: true },
      {
        headerName: "Casa/Apartamento",
        field: "representante_casa_apartamento",
        filter: true,
      },
      {
        headerName: "Número de Habitación",
        field: "representante_numero_habitacion",
        filter: true,
      },
      {
        headerName: "Referencia",
        field: "representante_referencia",
        filter: true,
      },
      { headerName: "Ciudad", field: "representante_ciudad", filter: true },
      {
        headerName: "Parroquia",
        field: "representante_parroquia",
        filter: true,
      },
      { headerName: "Estado", field: "representante_estado", filter: true },
      {
        headerName: "Teléfono de Habitación",
        field: "representante_telefono_habitacion",
        filter: true,
      },
      {
        headerName: "Teléfono Personal",
        field: "representante_telefono_personal",
        filter: true,
      },
      {
        headerName: "Correo Electrónico",
        field: "representante_email",
        filter: true,
      },
      {
        headerName: "Profesión",
        field: "representante_profesion",
        filter: true,
      },
      {
        headerName: "Lugar de Trabajo",
        field: "representante_lugarTrabajo",
        filter: true,
      },
      {
        headerName: "Teléfono de Trabajo",
        field: "representante_telefono_trabajo",
        filter: true,
      },
      { headerName: "Cargo", field: "representante_cargo", filter: true },
    ],
  },
  {
    headerName: "DATOS DE LA MADRE",
    children: [
      { headerName: "Apellidos", field: "madre_apellidos", filter: true },
      { headerName: "Nombres", field: "madre_nombres", filter: true },
      { headerName: "Nacionalidad", field: "madre_nacionalidad", filter: true },
      { headerName: "Cédula", field: "madre_cedula", filter: true },
      { headerName: "Urb/Br", field: "madre_urb_br", filter: true },
      {
        headerName: "Dirección de Habitación",
        field: "madre_direccion_habitacion_av",
        filter: true,
      },
      { headerName: "Calle", field: "madre_calle", filter: true },
      {
        headerName: "Casa/Apartamento",
        field: "madre_casa_apartamento",
        filter: true,
      },
      {
        headerName: "Número de Habitación",
        field: "madre_numero_habitacion",
        filter: true,
      },
      { headerName: "Referencia", field: "madre_referencia", filter: true },
      { headerName: "Ciudad", field: "madre_ciudad", filter: true },
      { headerName: "Parroquia", field: "madre_parroquia", filter: true },
      { headerName: "Estado", field: "madre_estado", filter: true },
      {
        headerName: "Teléfono de Casa",
        field: "madre_movil_casa",
        filter: true,
      },
      {
        headerName: "Teléfono Personal",
        field: "madre_telefono_personal",
        filter: true,
      },
      {
        headerName: "Teléfono de Trabajo",
        field: "madre_telefono_trabajo",
        filter: true,
      },
      { headerName: "Correo Electrónico", field: "madre_email", filter: true },
      {
        headerName: "Nivel Académico",
        field: "madre_nivelAcademico",
        filter: true,
      },
      { headerName: "Profesión", field: "madre_profesion", filter: true },
      {
        headerName: "Lugar de Trabajo",
        field: "madre_lugarTrabajo",
        filter: true,
      },
      { headerName: "Cargo", field: "madre_cargo", filter: true },
    ],
  },
  {
    headerName: "DATOS DEL PADRE",
    children: [
      { headerName: "Apellidos", field: "padre_apellidos", filter: true },
      { headerName: "Nombres", field: "padre_nombres", filter: true },
      { headerName: "Nacionalidad", field: "padre_nacionalidad", filter: true },
      { headerName: "Cédula", field: "padre_cedula", filter: true },
      { headerName: "Urb/Br", field: "padre_urb_br", filter: true },
      {
        headerName: "Dirección de Habitación",
        field: "padre_direccion_habitacion_av",
        filter: true,
      },
      { headerName: "Calle", field: "padre_calle", filter: true },
      {
        headerName: "Casa/Apartamento",
        field: "padre_casa_apartamento",
        filter: true,
      },
      {
        headerName: "Número de Habitación",
        field: "padre_numero_habitacion",
        filter: true,
      },
      { headerName: "Referencia", field: "padre_referencia", filter: true },
      { headerName: "Ciudad", field: "padre_ciudad", filter: true },
      { headerName: "Parroquia", field: "padre_parroquia", filter: true },
      { headerName: "Estado", field: "padre_estado", filter: true },
      {
        headerName: "Teléfono de Casa",
        field: "padre_movil_casa",
        filter: true,
      },
      {
        headerName: "Teléfono Personal",
        field: "padre_telefono_personal",
        filter: true,
      },
      {
        headerName: "Teléfono de Trabajo",
        field: "padre_telefono_trabajo",
        filter: true,
      },
      { headerName: "Correo Electrónico", field: "padre_email", filter: true },
      {
        headerName: "Nivel Académico",
        field: "padre_nivelAcademico",
        filter: true,
      },
      { headerName: "Profesión", field: "padre_profesion", filter: true },
      {
        headerName: "Lugar de Trabajo",
        field: "padre_lugarTrabajo",
        filter: true,
      },
      { headerName: "Cargo", field: "padre_cargo", filter: true },
    ],
  },
  {
    headerName: "Acciones",
    cellRenderer: (params: any) => {
      return ActionsCellRenderer(params);
    },
  },
];

export default EstudianteFamiliaTypesColumnDefs;
