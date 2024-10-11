import { SQL } from "sql-template-strings";

export const createAsistenciaEmpleadoTableQuery = SQL`
  CREATE TABLE IF NOT EXISTS asistencia_empleado (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    personal_id INTEGER NOT NULL,
    nombres TEXT NOT NULL,
    apellidos TEXT NOT NULL,
    ci TEXT NOT NULL,
    fecha TEXT NOT NULL,
    hora_entrada TEXT,
    hora_salida TEXT,
    vino TEXT default 'NO',
    -- ANADIDO
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`;
