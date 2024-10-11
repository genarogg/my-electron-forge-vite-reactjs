import EmpleadoTable from "../Empleado";

interface ObrerosProps {}

const Obreros: React.FC<ObrerosProps> = () => {
  return (
    <EmpleadoTable
      tipo="obreros"
      nameTablet="Obreros"
      ir="agregar empleado"
      irAnadirEmpleado={() => console.log("ir a añadir Obreros")}
    />
  );
};

export default Obreros;
