import { SQL } from "sql-template-strings";

export const createBitacoraTableQuery = SQL`
  CREATE TABLE IF NOT EXISTS bitacora (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario TEXT NOT NULL,
    accion TEXT NOT NULL,
    fecha TEXT NOT NULL,
    hora TEXT NOT NULL,
    -- ANADIDO
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`;
