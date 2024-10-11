import React from "react";

// @iconos
import { HiHome } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { PiChefHatBold } from "react-icons/pi";
import { PiStudentBold } from "react-icons/pi";

import { FaUsersLine } from "react-icons/fa6";

import { TbCheckupList } from "react-icons/tb";
import { MdOutlineUpdate } from "react-icons/md";
import AddEmpleado from "./empleado/crud/AddEmpleado";
import AddEstudiante from "./estudiante/crud/AddEstudiante";

import Docente from "./empleado/tablas/Docente";
import Obrero from "./empleado/tablas/Obrero";
import Administrativo from "./empleado/tablas/Administrativo";
import Cocinero from "./empleado/tablas/Cocineros";

import AsistenciaTable from "./asistencia/AsistenciaTabla";
import TabletBitacora from "./bitacora/TabletBitacora";

import EstudianteTable from "./estudiante/Estudiante";
import { FaUserGraduate } from "react-icons/fa6";
import Inicio from "./inicio/Inicio";
import { FaUsers } from "react-icons/fa";
import Usuario from "./usuarios/Usuario";



const components: any = [
  {
    titleSecction: "inicio",
    elements: [
      {
        component: Inicio,
        context: "Inicio",
        icon: <HiHome />,
      },

      {
        component: Usuario,
        context: "Usuarios",
        icon: <FaUsers />,
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
    titleSecction: "Estudiante",
    elements: [
      {
        component: EstudianteTable,
        context: "Estudiantes",
        icon: <FaUserGraduate />,
      },
    ],
  },
  {
    titleSecction: "bitacora",
    elements: [
      {
        component: AsistenciaTable,
        context: "Asistencia",
        icon: <TbCheckupList />,
      },

      {
        component: TabletBitacora,
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

      {
        component: AddEstudiante,
        context: "agregar estudiante",
        icon: <FaCalendarAlt />,
      },
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
