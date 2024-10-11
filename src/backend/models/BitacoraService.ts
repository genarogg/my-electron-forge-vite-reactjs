import dbManager from "@dbManager";
import moment from "moment";

class BitacoraService {
  private db: any;

  constructor() {
    this.db = dbManager.getDatabase();
  }

  // Método para crear una nueva entrada en la bitácora
  public createBitacora(data: any) {
    const insertQuery = `
      INSERT INTO bitacora (usuario, accion, fecha, hora)
      VALUES (?, ?, ?, ?);
    `;

    const hora = moment().format("HH:mm:ss A");
    const fecha = moment().format("YYYY-MM-DD");

    try {
      this.db.run(insertQuery, [data.usuario, data.accion, fecha, hora]);
    } catch (error) {
      console.error("Error al crear la entrada en la bitácora:", error);
      throw error;
    }
  }

  // Método para obtener una entrada por su ID
  public getBitacoraById(id: number) {
    const selectQuery = `
      SELECT * FROM bitacora WHERE id = ?;
    `;

    try {
      return this.db.get(selectQuery, [id]);
    } catch (error) {
      console.error("Error al obtener la entrada en la bitácora:", error);
    }
  }

  // Método para obtener todas las entradas
  public getAllBitacora() {
    const selectQuery = `
      SELECT * FROM bitacora;
    `;

    try {
      return this.db.all(selectQuery);
    } catch (error) {
      console.error("Error al obtener las entradas en la bitácora:", error);
    }
  }

  // Método para actualizar una entrada
  public updateBitacora(
    id: number,
    usuario: string,
    accion: string,
    fecha: string,
    hora: string
  ) {
    const updateQuery = `
      UPDATE bitacora
      SET usuario = ?, accion = ?, fecha = ?, hora = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?;
    `;

    try {
      this.db.run(updateQuery, [usuario, accion, fecha, hora, id]);
    } catch (error) {
      console.error("Error al actualizar la entrada en la bitácora:", error);
    }
  }

  // Método para eliminar una entrada
  public deleteBitacora(id: number) {
    const deleteQuery = `
      DELETE FROM bitacora WHERE id = ?;
    `;

    try {
      this.db.run(deleteQuery, [id]);
    } catch (error) {
      console.error("Error al eliminar la entrada en la bitácora:", error);
    }
  }
}

const bitacoraService = new BitacoraService();

export default bitacoraService;
