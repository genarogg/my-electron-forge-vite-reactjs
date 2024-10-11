import { SQL } from "sql-template-strings";

export const createPoliticaTableQuery = SQL`
  CREATE TABLE IF NOT EXISTS politica (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_empleado INTEGER,
    inscrito_psuv BOOLEAN,
    pertenece_movimiento_social TEXT,
    carnet_patria_codigo TEXT,
    carnet_patria_serial TEXT,
    centro_votacion TEXT,
    tipo_voto TEXT
  );
`;
