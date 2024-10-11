import { SQL } from "sql-template-strings";

export const createEmpleadoTableQuery = SQL`
  CREATE TABLE IF NOT EXISTS empleado (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tipo_empleado TEXT NOT NULL,
    nombres TEXT,
    apellidos TEXT,
    ci NUMERIC UNIQUE,
    fecha_nacimiento DATE,
    telefono TEXT,
    correo_electronico TEXT,
    fecha_ingreso_mppe DATE,
    direccion_de_habitacion TEXT,
    codigo_cargo TEXT,
    dependencia_nominal TEXT,
    estatus TEXT,
    reposo_permiso TEXT,
    anos_servicio FLOAT,
    observaciones TEXT,
    titulo_pregrado TEXT DEFAULT '',
    area_docente_especialista TEXT DEFAULT '',
    grado_seccion TEXT DEFAULT '',
    funcion_trabajo TEXT DEFAULT '',
    acarigua TEXT DEFAULT '',
    titulo_obtenido TEXT DEFAULT '',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`;