import dbManager from "@dbManager";
dbManager;

import dataFake from "../fake-data/dataFake";
dataFake();

import { login, addUsuario, getUsuarios } from "../controllers/auth";
import { getEmpleado, addEmpleado } from "../controllers/empleados";
import {
  generarAsistencia,
  getAsistencia,
  registrarEntrada,
} from "../controllers/asistencia";

import { getBitacora } from "../controllers/bitacora";

import { addEstudiante, getEstudiante } from "../controllers/estudiante";
import { addUpdatePlantel, getPlantel } from "../controllers/plantel";

generarAsistencia();

const router = {
  login,
  addUsuario,
  getEmpleado,
  addEmpleado,
  getAsistencia,
  registrarEntrada,
  getBitacora,
  addEstudiante,
  getEstudiante,
  getUsuarios,
  addUpdatePlantel,
  getPlantel,
};

export default router;
