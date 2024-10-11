import { SQL } from "sql-template-strings";

// Tabla estudiante
const createEstudianteTableQuery = SQL`
  CREATE TABLE IF NOT EXISTS estudiante (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    apellidos TEXT NOT NULL,
    nombres TEXT NOT NULL,
    sex TEXT,
    nacionalidad TEXT,
    ci TEXT NOT NULL,
    fecha_nacimiento TEXT,
    lugar_nacimiento TEXT,
    entd_federativa TEXT,
    plantel_de_procedencia TEXT,
    talla TEXT,
    peso TEXT,
    medidas TEXT,
    edad TEXT,
    lateralidad TEXT,
    talla_camisa TEXT,
    talla_pantalon TEXT,
    talla_zapato TEXT,
    via_de_acceso_al_lugar_donde_vive TEXT,
    reprecentante_legal_id INTEGER,
    con_quien_vive TEXT,
    condicion_especial TEXT,
    observacion_de_condicion TEXT,
    el_estudiante_consume_medicamento TEXT,
    observacion_de_medicamento TEXT,
    madre_id INTEGER,
    padre_id INTEGER,
    inicio_periodo_escolar TEXT,
    fin_periodo_escolar TEXT,
    usuario TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (madre_id) REFERENCES madre(id),
    FOREIGN KEY (padre_id) REFERENCES padre(id),
    FOREIGN KEY (reprecentante_legal_id) REFERENCES representante(id)
  );
`;

// Tabla representante
const createRepresentanteTableQuery = SQL`
  CREATE TABLE IF NOT EXISTS representante (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    parentesco TEXT,
    apellidos TEXT NOT NULL,
    nombres TEXT NOT NULL,
    nacionalidad TEXT,
    cedula TEXT NOT NULL,
    urb_br TEXT,
    fecha_nacimiento TEXT,
    direccion_habitacion_av TEXT,
    calle TEXT,
    casa_apartamento TEXT,
    numero_habitacion TEXT,
    referencia TEXT,
    ciudad TEXT,
    parroquia TEXT,
    estado TEXT,
    telefono_habitacion TEXT,
    telefono_personal TEXT,
    email TEXT,
    profesion TEXT,
    lugarTrabajo TEXT,
    telefono_trabajo TEXT,
    cargo TEXT
  );
`;
// Tabla madre
const createMadreTableQuery = SQL`
  CREATE TABLE IF NOT EXISTS madre (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    apellidos TEXT NOT NULL,
    nombres TEXT NOT NULL,
    nacionalidad TEXT,
    cedula TEXT NOT NULL,
    urb_br TEXT,
    direccion_habitacion_av TEXT,
    calle TEXT,
    casa_apartamento TEXT,
    numero_habitacion TEXT,
    referencia TEXT,
    ciudad TEXT,
    parroquia TEXT,
    estado TEXT,
    movil_casa TEXT,
    telefono_personal TEXT,
    telefono_trabajo TEXT,
    email TEXT,
    nivelAcademico TEXT,
    profesion TEXT,
    lugarTrabajo TEXT,
    cargo TEXT
  );
`;

// Tabla padre
const createPadreTableQuery = SQL`
  CREATE TABLE IF NOT EXISTS padre (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    apellidos TEXT NOT NULL,
    nombres TEXT NOT NULL,
    nacionalidad TEXT,
    cedula TEXT NOT NULL,
    urb_br TEXT,
    direccion_habitacion_av TEXT,
    calle TEXT,
    casa_apartamento TEXT,
    numero_habitacion TEXT,
    referencia TEXT,
    ciudad TEXT,
    parroquia TEXT,
    estado TEXT,
    movil_casa TEXT,
    telefono_personal TEXT,
    telefono_trabajo TEXT,
    email TEXT,
    nivelAcademico TEXT,
    profesion TEXT,
    lugarTrabajo TEXT,
    cargo TEXT
  );
`;

export {
  createEstudianteTableQuery,
  createRepresentanteTableQuery,
  createMadreTableQuery,
  createPadreTableQuery,
}