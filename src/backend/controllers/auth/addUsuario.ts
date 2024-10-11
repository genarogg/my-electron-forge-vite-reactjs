import { ipcMain } from "electron";
import bcrypt from "bcryptjs";
import { userService, bitacoraService } from "@model";

const addUsuario = ipcMain.handle("auth/addUsuario", async (event, data) => {
  event.defaultPrevented;

  const {
    nombres: usuarioNombre,
    apellidos: usuarioApellido,
    email: usuarioEmail,
    password,
    rool: usuarioRole,
    ci,
    cargo_institucional,
    usuario
  } = data;

  // todos los campos son requeridos
  if (
    !usuarioNombre ||
    !usuarioApellido ||
    !usuarioEmail ||
    !password ||
    !usuarioRole ||
    !ci ||
    !cargo_institucional ||
    !usuario
  ) {
    return {
      message: "Todos los campos son requeridos",
      type: "error",
    };
  }

  // Generar un hash de la contraseña
  const hashedPassword = bcrypt.hashSync(password, 10);

  userService.createUser(
    usuarioNombre,
    usuarioApellido,
    usuarioEmail,
    hashedPassword,
    usuarioRole,
    ci,
    cargo_institucional
  );

  //@Bitacora
  await bitacoraService.createBitacora({
    usuario,
    accion: `Se Creo el usuario exitosamente: ${usuario.email}`,
  });

  return { message: "Se Creo el usuario exitosamente", type: "success" };
});

export default addUsuario;
