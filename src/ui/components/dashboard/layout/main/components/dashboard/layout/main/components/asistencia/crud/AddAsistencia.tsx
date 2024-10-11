import React, { useState } from "react";
import { Input } from "@form";
import { BtnSubmitBasic } from "@btn";
import { notify } from "@nano";
import { BsEnvelopeFill } from "react-icons/bs";

// import { useSimpleNav } from "@components/state/useSimpleNav";

import LayoutForm from "../../layoutForm/LayoutForm";

interface AddAsistenciaProps {
  fn: () => void;
}

const AddAsistencia: React.FC<AddAsistenciaProps> = ({ fn }) => {
  const [formData, setFormData] = useState({
    ci: "",
  });

  // const { state, handleChangeContext } = useSimpleNav();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(formData);
    // console.log("URL_BACKEND", `-/asistencia/add`);

    // fetch(`-/asistencia/add`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("data2", data);

    //     if (data.type === "error") {
    //       notify({ message: data.message, type: data.type });
    //       return;
    //     }
    //     // handleChangeContext("Asistencia", "");
    //     setFormData({ ci: "" });
    //     fn();
    //     notify({ message: data.message, type: data.type });
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });
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

          <BtnSubmitBasic text="Registrar asistencia" loading={false} />
        </form>
      </div>
    </LayoutForm>
  );
};

export default AddAsistencia;
