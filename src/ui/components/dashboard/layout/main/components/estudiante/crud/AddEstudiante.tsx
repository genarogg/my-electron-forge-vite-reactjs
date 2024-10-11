import React, { useState } from "react";
import { Input, SelectInput } from "@form";
import { BtnSubmitBasic } from "@btn";
import { notify } from "@nano";
import LayoutForm from "../../layoutForm/LayoutForm";
import { useSimpleNav } from "@components/state/useSimpleNav";

interface AddEstudianteProps {

}

const AddEstudiante: React.FC<AddEstudianteProps> = () => {
  const [formData, setFormData] = useState({
    // informacion del usuario
  });

  const { state, handleChangeContext } = useSimpleNav();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newData = {
      empleado: { ...formData },

      usuario: state.email,
    };

    electron.ipcRenderer
      .invoke("estudiante/addEstudiante", newData)
      .then((result) => {
        if (result.type === "error") {
          notify({ type: result.type, message: result.message });
          return;
        }

        notify({ message: result.message, type: result.type });
        handleChangeContext(state.sub_context, "");
      })
      .finally(() => {});
  };

  return (
    <LayoutForm>
      <div className="container-form add-empleado add-estudiante">
        <form
          className="form-basic"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(e);
          }}
        >
          <div className="container-info-user">
            <div className="title">
              <h4>Informacion del Personal</h4>
            </div>
          </div>
        </form>
      </div>
    </LayoutForm>
  );
};

export default AddEstudiante;
