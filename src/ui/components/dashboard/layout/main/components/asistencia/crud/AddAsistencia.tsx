import React, { useState } from "react";
import { Input, TextArea } from "@form";
import { BtnSubmitBasic } from "@btn";
import { notify } from "@nano";

import { useSimpleNav } from "@components/state/useSimpleNav";
import { HiIdentification } from "react-icons/hi2";
import LayoutForm from "../../layoutForm/LayoutForm";

interface AddAsistenciaProps {
  fn: () => void;
  tipoAction: string;
}

const AddAsistencia: React.FC<AddAsistenciaProps> = ({ fn, tipoAction }) => {
  const [formData, setFormData] = useState({
    ci: "",
    comentario: "", // Añadir comentario al estado
    activeComentario: false,
  });

  const { handleChangeContext } = useSimpleNav();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      electron.ipcRenderer
        .invoke(`asistencia`, { formData, tipoAction })
        .then((data) => {
          if (data.type === "success") {
            setFormData({ ci: "", comentario: "", activeComentario: false }); // Resetear comentario
            notify({ message: data.message, type: data.type });
            handleChangeContext("Asistencia", "");
            fn();

            return;
          }

          setFormData({ ...formData, activeComentario: true }); // Mostrar comentario
          notify({ message: data.message, type: data.type });
        });
    } catch (error) {
      console.error("Error al recuperar los datos de los empleados:", error);
    }
  };

  return (
    <LayoutForm>
      <div className="container-form add-docente">
        <form
          className="form-basic"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(e);
          }}
        >
          <Input
            type="text"
            icono={<HiIdentification />}
            placeholder="cedula de identidad"
            name="ci"
            value={formData.ci}
            valueChange={(e) =>
              setFormData({ ...formData, ci: e.target.value })
            }
          />

          {formData.activeComentario &&
            <TextArea
              required={false}
              placeholder="comentario"
              name="comentario"
              className="comentario"
              value={formData.comentario}
              valueChange={(e) =>
                setFormData({ ...formData, comentario: e.target.value })
              }
            />
          }

          <BtnSubmitBasic text={`registrar ${tipoAction}`} loading={false} />
        </form>
      </div>
    </LayoutForm>
  );
};

export default AddAsistencia;