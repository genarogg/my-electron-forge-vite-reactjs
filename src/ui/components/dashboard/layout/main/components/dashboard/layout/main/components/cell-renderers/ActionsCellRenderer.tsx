import React from "react";
import EmpleadoTypes from "../empleado/configTablet/EmpleadoTypes";

// import { notify } from "@nano";
import { BtnNormalBasic } from "@btn";

interface ActionsCellRendererProps {
  data: EmpleadoTypes;
}

const ActionsCellRenderer: React.FC<ActionsCellRendererProps> = ({ data }) => {
  console.log("Data:", data);
  // const handleEdit = (ci: string) => {
  //   // Lógica para editar el docente
  //   console.log("Editar docente:", ci);
  // };

  // const handleDelete = async (ci: string) => {
  //   try {
  //     const response = await fetch(`-/usuario/delete/${ci}`, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       notify({ message: errorData.error, type: "error" });
  //     }

  //     const result = await response.json();
  //     console.log(result.message);
  //     notify({ message: result.message, type: "success" });
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  return (
    <div className="container-btn-tablet">
      {/* <BtnNormalBasic onClick={() => handleEdit(data.ci)}>
        Editar
      </BtnNormalBasic> */}
      <BtnNormalBasic /* onClick={() => handleDelete(data.ci)} */>
        Eliminar
      </BtnNormalBasic>
    </div>
  );
};

export default ActionsCellRenderer;
