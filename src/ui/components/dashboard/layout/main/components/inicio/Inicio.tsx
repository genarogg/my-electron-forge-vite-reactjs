interface InicioProps {}

import { BtnNormalBasic } from "@btn";
import { useSimpleNav } from "../../../../../state/useSimpleNav";

const Inicio: React.FC<InicioProps> = () => {
  const { handleChangeContext } = useSimpleNav();
  return (
    <div className="container-inicio">
      <div className="container-card-home">
        <BtnNormalBasic
          onClick={() => {
            handleChangeContext("docentes", "");
          }}
        >
          <h2>docentes</h2>
        </BtnNormalBasic>
      </div>
      <div className="container-card-home">
        <BtnNormalBasic
          onClick={() => {
            handleChangeContext("obreros", "");
          }}
        >
          <h2>obreros</h2>
        </BtnNormalBasic>
      </div>
      <div className="container-card-home">
        <BtnNormalBasic
          onClick={() => {
            handleChangeContext("administrativos", "");
          }}
        >
          <h2>administrativo</h2>
        </BtnNormalBasic>
      </div>
      <div className="container-card-home">
        <BtnNormalBasic
          onClick={() => {
            handleChangeContext("cocineros", "");
          }}
        >
          <h2>cocineros</h2>
        </BtnNormalBasic>
      </div>
      <div className="container-card-home">
        <BtnNormalBasic
          onClick={() => {
            handleChangeContext("Asistencia", "");
          }}
        >
          <h2>asistencia</h2>
        </BtnNormalBasic>
      </div>
      <div className="container-card-home">
        <BtnNormalBasic
          onClick={() => {
            handleChangeContext("bitacora", "");
          }}
        >
          <h2>bitacora</h2>
        </BtnNormalBasic>
      </div>
    </div>
  );
};

export default Inicio;
