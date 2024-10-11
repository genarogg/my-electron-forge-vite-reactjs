import dbManager from "@dbManager";

class UserService {
  private db: any;

  constructor() {
    this.db = dbManager.getDatabase();
  }

  // Método para crear un nuevo usuario
  public createUser(
    nombre: string,
    apellido: string,
    email: string,
    password: string,
    role: string
  ) {
    const insertQuery = `
      INSERT INTO users (nombre, apellido, email, password, role)
      VALUES (?, ?, ?, ?, ?);
    `;

    try {
      this.db.run(insertQuery, [nombre, apellido, email, password, role]);
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      throw error;
    }
  }

  // Método para obtener un usuario por su ID
  public getUserById(id: number) {
    const selectQuery = `
      SELECT * FROM users WHERE id = ?;
    `;

    try {
      return this.db.get(selectQuery, [id]);
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
    }
  }

  // Método para obtener un usuario por su email
  public getUserByEmail(email: string) {
    const selectQuery = `
      SELECT * FROM users WHERE email = ?;
    `;

    try {
      return this.db.get(selectQuery, [email]);
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
    }
  }

  // Método para obtener todos los usuarios
  public getAllUsers() {
    const selectQuery = `
      SELECT * FROM users;
    `;

    try {
      return this.db.all(selectQuery);
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
    }
  }

  // Método para actualizar un usuario
  public updateUser(
    id: number,
    nombre: string,
    apellido: string,
    email: string,
    password: string,
    role: string
  ) {
    const updateQuery = `
      UPDATE users
      SET nombre = ?, apellido = ?, email = ?, password = ?, role = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?;
    `;

    try {
      this.db.run(updateQuery, [nombre, apellido, email, password, role, id]);
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
    }
  }

  // Método para eliminar un usuario
  public deleteUser(id: number) {
    const deleteQuery = `
      DELETE FROM users WHERE id = ?;
    `;

    try {
      this.db.run(deleteQuery, [id]);
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
    }
  }
}

const userService = new UserService();

export default userService;
