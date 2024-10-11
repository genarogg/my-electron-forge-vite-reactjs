import { ipcMain } from "electron";
import bcrypt from "bcryptjs";
import { userService, bitacoraService } from "@model";

const login = ipcMain.handle("auth/login", async (event, data) => {
  event.defaultPrevented;

  const { userName, password } = data;

  const usuario = await userService.getUserByEmail(userName);

  if (!usuario) {
    console.log("Usuario no encontrado");
    return { message: "Usuario no encontrado", type: "error" };
  }

  if (!bcrypt.compareSync(password, usuario.password)) {
    // La contraseña no coincide, envía una respuesta indicando que es incorrecta
    return { message: "Usuario o contraseña incorrectos", type: "error" };
  }

  // @Bitacora
  await bitacoraService.createBitacora({
    usuario: usuario.email,
    accion: `Inicio de sesión del usuario ${usuario.email}`,
  });

  return { message: "Inicio de sesión correcto", type: "success" };
});

export default login;
