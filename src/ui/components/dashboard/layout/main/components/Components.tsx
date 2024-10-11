import React from "react";

// @iconos
import { HiHome } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { PiChefHatBold } from "react-icons/pi";
import { PiStudentBold } from "react-icons/pi";

import { FaUsersLine } from "react-icons/fa6";

import AsistenciaTabla from "./asistencia/AsistenciaTabla";

import { TbCheckupList } from "react-icons/tb";
import { MdOutlineUpdate } from "react-icons/md";
import AddEmpleado from "./empleado/crud/AddEmpleado";

import Docente from "./empleado/tablas/Docente";
import Obrero from "./empleado/tablas/Obrero";
import Administrativo from "./empleado/tablas/Administrativo";
import Cocinero from "./empleado/tablas/Cocineros";

import AsistenciaTable from "./asistencia/AsistenciaTabla";

import Inicio from "./inicio/Inicio";
const components: any = [
  {
    titleSecction: "inicio",
    elements: [
      {
        component: Inicio,
        context: "Inicio",
        icon: <HiHome />,
      },
    ],
  },
  {
    titleSecction: "Empleados",
    elements: [
      {
        component: Docente,
        context: "docentes",
        icon: <PiStudentBold />,
      },

      {
        component: Obrero,
        context: "obreros",
        icon: <GrUserWorker />,
      },
      {
        component: Administrativo,
        context: "administrativos",
        icon: <FaUsersLine />,
      },
      {
        component: Cocinero,
        context: "cocineros",
        icon: <PiChefHatBold />,
      },
    ],
  },
  {
    titleSecction: "bitacora",
    elements: [
      {
        component: AsistenciaTabla,
        context: "Asistencia",
        icon: <TbCheckupList />,
      },

      {
        component: AsistenciaTable,
        context: "acciones",
        icon: <MdOutlineUpdate />,
      },
    ],
  },
  {
    titleSecction: "otros",
    elements: [
      {
        component: AddEmpleado,
        context: "agregar empleado",
        icon: <FaCalendarAlt />,
      },

      // {
      //   component: AddAdministrativo,
      //   context: "agregar administrativo",
      //   icon: <FaCalendarAlt />,
      // },
      // {
      //   component: AddCocinero,
      //   context: "agregar cocinero",
      //   icon: <FaCalendarAlt />,
      // },
      /* {
        component: AddAsistencia,
        context: "Asistencia",
        icon: <FaCalendarAlt />,
      }, */
    ],
  },
];

export { components };
