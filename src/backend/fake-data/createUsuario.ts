import { userService } from "@model";
import bcrypt from "bcryptjs";

const crearUsuario = async () => {
  // Datos del usuario
  const usuarioNombre = "Demo";
  const usuarioApellido = "Demo";
  const usuarioEmail = "demo@demo.com";
  const usuarioPassword = "demo123";
  const usuarioRole = "admin";

  // Generar un hash de la contraseña
  const hashedPassword = bcrypt.hashSync(usuarioPassword, 10);

  // Crear el usuario con la contraseña hasheada y otros datos
  userService.createUser(
    usuarioNombre,
    usuarioApellido,
    usuarioEmail,
    hashedPassword,
    usuarioRole
  );
};

export default crearUsuario;
