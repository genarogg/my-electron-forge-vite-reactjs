import crearUsuario from "./createUsuario";
import crearEmpleados from "./createEmpleado";

const fakeData = async () => {
  // Crear un usuario de demostración
  await crearUsuario();
  await crearEmpleados();

  console.log("Datos falsos creados correctamente");
};

export default fakeData;
