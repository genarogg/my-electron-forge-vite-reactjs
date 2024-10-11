import { SQL } from "sql-template-strings";

export const createPlantelTableQuery = SQL`
  CREATE TABLE IF NOT EXISTS plantel (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cod_cir TEXT,
    nombre_circuito TEXT,
    comuna TEXT,
    consejo_comunal TEXT,
    codigo_plantel TEXT,
    codigo_estadistico TEXT,
    codigo_dependencia TEXT,
    nombre_plantel TEXT,
    direccion_institucion TEXT,
    nivel_modalidad TEXT,
    dependencia_administrativa TEXT
  );
`;
