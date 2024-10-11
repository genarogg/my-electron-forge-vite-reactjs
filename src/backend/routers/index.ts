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

generarAsistencia();

const router = {
  login,
  getEmpleado,
  addEmpleado,
  getAsistencia,
  registrarEntrada,
};

export default router;
