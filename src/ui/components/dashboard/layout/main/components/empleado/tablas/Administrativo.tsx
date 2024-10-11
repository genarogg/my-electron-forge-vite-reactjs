import EmpleadoTable from "../Empleado";

interface AdministrativoProps {}

const Administrativo: React.FC<AdministrativoProps> = () => {
  return (
    <EmpleadoTable
      tipo="administrativos"
      nameTablet="Administrativos"
      ir="agregar empleado"
      irAnadirEmpleado={() => console.log("ir a añadir Obreros")}
    />
  );
};

export default Administrativo;
