import { Database } from "node-sqlite3-wasm";
import { app } from "electron";
import path from "path";
import { createUsersTableQuery } from "./tableUsers";
import { createPlantelTableQuery } from "./tablaPlantel";
import { createEmpleadoTableQuery } from "./tablaEmpleado";
import { createPoliticaTableQuery } from "./tablaPolitica";
import { createBitacoraTableQuery } from "./tablaBitacora";
import { createAsistenciaEmpleadoTableQuery } from "./tablaAsistenciaEmpleado";

class DatabaseManager {
  private db: Database;

  constructor() {
    // Determinar la ruta de la base de datos dependiendo del entorno
    const isPackaged = app.isPackaged;
    const basePath = isPackaged
      ? path.join(process.resourcesPath, "database.db")
      : path.join(__dirname, "database.db");

    this.db = new Database(basePath);
    this.createTable(createUsersTableQuery);
    this.createTable(createPlantelTableQuery);
    this.createTable(createEmpleadoTableQuery);
    this.createTable(createPoliticaTableQuery);
    this.createTable(createBitacoraTableQuery);
    this.createTable(createAsistenciaEmpleadoTableQuery);
  }

  private createTable(query: any) {
    try {
      this.db.exec(query.sql); // Ejecuta la consulta SQL
    } catch (error) {
      console.error("Error al crear la tabla:", error);
    }
  }

  public getDatabase() {
    return this.db;
  }
}

const dbManager = new DatabaseManager();
export default dbManager;
