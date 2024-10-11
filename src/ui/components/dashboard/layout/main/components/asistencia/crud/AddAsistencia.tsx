import React, { useState } from "react";
import { Input } from "@form";
import { BtnSubmitBasic } from "@btn";
import { notify } from "@nano";
import { BsEnvelopeFill } from "react-icons/bs";

import { useSimpleNav } from "@components/state/useSimpleNav";

import LayoutForm from "../../layoutForm/LayoutForm";

interface AddAsistenciaProps {
  fn: () => void;
  tipoAction: string;
}

const AddAsistencia: React.FC<AddAsistenciaProps> = ({ fn, tipoAction }) => {
  const [formData, setFormData] = useState({
    ci: "",
  });

  const { handleChangeContext } = useSimpleNav();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      electron.ipcRenderer
        .invoke(`asistencia`, { formData, tipoAction })
        .then((data) => {
          if (data.type === "success") {
            setFormData({ ci: "" });
            notify({ message: data.message, type: data.type });
            handleChangeContext("Asistencia", "");
            fn();

            return;
          }

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
            icono={<BsEnvelopeFill />}
            placeholder="cedula de identidad"
            name="ci"
            value={formData.ci}
            valueChange={(e) =>
              setFormData({ ...formData, ci: e.target.value })
            }
          />

          <BtnSubmitBasic text={`registrar ${tipoAction}`} loading={false} />
        </form>
      </div>
    </LayoutForm>
  );
};

export default AddAsistencia;
