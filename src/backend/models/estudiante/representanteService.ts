import dbManager from "@dbManager";

class RepresentanteService {
  private db: any;

  constructor() {
    this.db = dbManager.getDatabase();
  }

  // Método para crear una nueva entrada en la tabla representante
  public createRepresentante(data: any) {
    const insertQuery = `
      INSERT INTO representante (
        parentesco, apellidos, nombres, nacionalidad, cedula, urb_br, fecha_nacimiento, direccion_habitacion_av, calle, casa_apartamento, numero_habitacion, referencia, ciudad, parroquia, estado, telefono_habitacion, telefono_personal, email, profesion, lugarTrabajo, telefono_trabajo, cargo
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    try {
      this.db.run(insertQuery, [
        data.parentesco,
        data.apellidos,
        data.nombres,
        data.nacionalidad,
        data.cedula,
        data.urb_br,
        data.fecha_nacimiento,
        data.direccion_habitacion_av,
        data.calle,
        data.casa_apartamento,
        data.numero_habitacion,
        data.referencia,
        data.ciudad,
        data.parroquia,
        data.estado,
        data.telefono_habitacion,
        data.telefono_personal,
        data.email,
        data.profesion,
        data.lugarTrabajo,
        data.telefono_trabajo,
        data.cargo,
      ]);
    } catch (error) {
      console.error(
        "Error al crear la entrada en la tabla representante:",
        error
      );
      throw error;
    }
  }

  // Método para obtener una entrada por su ID
  public getRepresentanteById(id: number) {
    const selectQuery = `
      SELECT * FROM representante WHERE id = ?;
    `;

    try {
      return this.db.get(selectQuery, [id]);
    } catch (error) {
      console.error(
        "Error al obtener la entrada en la tabla representante:",
        error
      );
    }
  }

  // Método para obtener todas las entradas
  public getAllRepresentantes() {
    const selectQuery = `
      SELECT * FROM representante;
    `;

    try {
      return this.db.all(selectQuery);
    } catch (error) {
      console.error(
        "Error al obtener las entradas en la tabla representante:",
        error
      );
    }
  }

  // Método para actualizar una entrada
  public updateRepresentante(id: number, data: any) {
    const updateQuery = `
      UPDATE representante
      SET parentesco = ?, apellidos = ?, nombres = ?, nacionalidad = ?, cedula = ?, urb_br = ?, fecha_nacimiento = ?, direccion_habitacion_av = ?, calle = ?, casa_apartamento = ?, numero_habitacion = ?, referencia = ?, ciudad = ?, parroquia = ?, estado = ?, telefono_habitacion = ?, telefono_personal = ?, email = ?, profesion = ?, lugarTrabajo = ?, telefono_trabajo = ?, cargo = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?;
    `;

    try {
      this.db.run(updateQuery, [
        data.parentesco,
        data.apellidos,
        data.nombres,
        data.nacionalidad,
        data.cedula,
        data.urb_br,
        data.fecha_nacimiento,
        data.direccion_habitacion_av,
        data.calle,
        data.casa_apartamento,
        data.numero_habitacion,
        data.referencia,
        data.ciudad,
        data.parroquia,
        data.estado,
        data.telefono_habitacion,
        data.telefono_personal,
        data.email,
        data.profesion,
        data.lugarTrabajo,
        data.telefono_trabajo,
        data.cargo,
        id,
      ]);
    } catch (error) {
      console.error(
        "Error al actualizar la entrada en la tabla representante:",
        error
      );
    }
  }

  // Método para eliminar una entrada
  public deleteRepresentante(id: number) {
    const deleteQuery = `
      DELETE FROM representante WHERE id = ?;
    `;

    try {
      this.db.run(deleteQuery, [id]);
    } catch (error) {
      console.error(
        "Error al eliminar la entrada en la tabla representante:",
        error
      );
    }
  }
}

const representanteService = new RepresentanteService();

export default representanteService;
