import dbManager from "@dbManager";
dbManager;

import dataFake from "../fake-data/dataFake";
dataFake();

import { login } from "../controllers/auth";
import { getEmpleado, addEmpleado } from "../controllers/empleados";
import {
  generarAsistencia,
  getAsistencia,
  registrarEntrada,
} from "../controllers/asistencia";

import { getBitacora } from "../controllers/bitacora";

generarAsistencia();

const router = {
  login,
  getEmpleado,
  addEmpleado,
  getAsistencia,
  registrarEntrada,
  getBitacora,
};

export default router;
