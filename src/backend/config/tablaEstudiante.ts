import { SQL } from "sql-template-strings";

// Tabla estudiante
const createEstudianteTableQuery = SQL`
  CREATE TABLE IF NOT EXISTS estudiante (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    madre_id INTEGER,
    padre_id INTEGER,
    reprecentante_id INTEGER,
    apellidos TEXT default "",
    nombres TEXT default "",
    sex TEXT default "",
    nacionalidad TEXT default "",
    ci TEXT default "",
    fecha_nacimiento TEXT default "",
    lugar_nacimiento TEXT default "",
    entd_federativa TEXT default "",
    plantel_de_procedencia TEXT default "",
    talla TEXT default "",
    peso TEXT default "",
    medidas TEXT default "",
    edad TEXT default "",
    lateralidad TEXT default "",
    talla_camisa TEXT default "",
    talla_pantalon TEXT default "",
    talla_zapato TEXT default "",
    via_de_acceso_al_lugar_donde_vive TEXT default "",
    con_quien_vive TEXT default "",
    condicion_especial TEXT default "",
    observacion_de_condicion TEXT default "",
    el_estudiante_consume_medicamento TEXT default "",
    observacion_de_medicamento TEXT default "",
    inicio_periodo_escolar TEXT default "",
    fin_periodo_escolar TEXT default "",
    usuario TEXT default "",
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`;

// Tabla representante
const createRepresentanteTableQuery = SQL`
  CREATE TABLE IF NOT EXISTS representante (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    parentesco TEXT default "",
    apellidos TEXT default "",
    nombres TEXT default "",
    nacionalidad TEXT default "",
    cedula TEXT default "",
    urb_br TEXT default "",
    fecha_nacimiento TEXT default "",
    direccion_habitacion_av TEXT default "",
    calle TEXT default "",
    casa_apartamento TEXT default "",
    numero_habitacion TEXT default "",
    referencia TEXT default "",
    ciudad TEXT default "",
    parroquia TEXT default "",
    estado TEXT default "",
    telefono_habitacion TEXT default "",
    telefono_personal TEXT default "",
    email TEXT default "",
    profesion TEXT default "",
    lugarTrabajo TEXT default "",
    telefono_trabajo TEXT default "",
    cargo TEXT default ""
  );
`;
// Tabla madre
const createMadreTableQuery = SQL`
  CREATE TABLE IF NOT EXISTS madre (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    apellidos TEXT default "",
    nombres TEXT default "",
    nacionalidad TEXT default "",
    cedula TEXT default "",
    urb_br TEXT default "",
    direccion_habitacion_av TEXT default "",
    calle TEXT default "",
    casa_apartamento TEXT default "",
    numero_habitacion TEXT default "",
    referencia TEXT default "",
    ciudad TEXT default "",
    parroquia TEXT default "",
    estado TEXT default "",
    movil_casa TEXT default "",
    telefono_personal TEXT default "",
    telefono_trabajo TEXT default "",
    email TEXT default "",
    nivelAcademico TEXT default "",
    profesion TEXT default "",
    lugarTrabajo TEXT default "",
    cargo TEXT default ""
  );
`;

// Tabla padre
const createPadreTableQuery = SQL`
  CREATE TABLE IF NOT EXISTS padre (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    apellidos TEXT default "",
    nombres TEXT default "",
    nacionalidad TEXT default "",
    cedula TEXT default "",
    urb_br TEXT default "",
    direccion_habitacion_av TEXT default "",
    calle TEXT default "",
    casa_apartamento TEXT default "",
    numero_habitacion TEXT default "",
    referencia TEXT default "",
    ciudad TEXT default "",
    parroquia TEXT default "",
    estado TEXT default "",
    movil_casa TEXT default "",
    telefono_personal TEXT default "",
    telefono_trabajo TEXT default "",
    email TEXT default "",
    nivelAcademico TEXT default "",
    profesion TEXT default "",
    lugarTrabajo TEXT default "",
    cargo TEXT default ""
  );
`;

export {
  createEstudianteTableQuery,
  createRepresentanteTableQuery,
  createMadreTableQuery,
  createPadreTableQuery,
};
