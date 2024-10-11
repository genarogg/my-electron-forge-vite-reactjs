import dbManager from "@dbManager";
import { SQL } from "sql-template-strings";

const getEstudianteWithFamilyQuery = `
  SELECT 
    estudiante.*,
    madre.apellidos AS madre_apellidos,
    madre.nombres AS madre_nombres,
    madre.nacionalidad AS madre_nacionalidad,
    madre.cedula AS madre_cedula,
    madre.urb_br AS madre_urb_br,
    madre.direccion_habitacion_av AS madre_direccion_habitacion_av,
    madre.calle AS madre_calle,
    madre.casa_apartamento AS madre_casa_apartamento,
    madre.numero_habitacion AS madre_numero_habitacion,
    madre.referencia AS madre_referencia,
    madre.ciudad AS madre_ciudad,
    madre.parroquia AS madre_parroquia,
    madre.estado AS madre_estado,
    madre.movil_casa AS madre_movil_casa,
    madre.telefono_personal AS madre_telefono_personal,
    madre.telefono_trabajo AS madre_telefono_trabajo,
    madre.email AS madre_email,
    madre.nivelAcademico AS madre_nivelAcademico,
    madre.profesion AS madre_profesion,
    madre.lugarTrabajo AS madre_lugarTrabajo,
    madre.cargo AS madre_cargo,
    padre.apellidos AS padre_apellidos,
    padre.nombres AS padre_nombres,
    padre.nacionalidad AS padre_nacionalidad,
    padre.cedula AS padre_cedula,
    padre.urb_br AS padre_urb_br,
    padre.direccion_habitacion_av AS padre_direccion_habitacion_av,
    padre.calle AS padre_calle,
    padre.casa_apartamento AS padre_casa_apartamento,
    padre.numero_habitacion AS padre_numero_habitacion,
    padre.referencia AS padre_referencia,
    padre.ciudad AS padre_ciudad,
    padre.parroquia AS padre_parroquia,
    padre.estado AS padre_estado,
    padre.movil_casa AS padre_movil_casa,
    padre.telefono_personal AS padre_telefono_personal,
    padre.telefono_trabajo AS padre_telefono_trabajo,
    padre.email AS padre_email,
    padre.nivelAcademico AS padre_nivelAcademico,
    padre.profesion AS padre_profesion,
    padre.lugarTrabajo AS padre_lugarTrabajo,
    padre.cargo AS padre_cargo,
    representante.apellidos AS representante_apellidos,
    representante.nombres AS representante_nombres,
    representante.nacionalidad AS representante_nacionalidad,
    representante.cedula AS representante_cedula,
    representante.urb_br AS representante_urb_br,
    representante.fecha_nacimiento AS representante_fecha_nacimiento,
    representante.direccion_habitacion_av AS representante_direccion_habitacion_av,
    representante.calle AS representante_calle,
    representante.casa_apartamento AS representante_casa_apartamento,
    representante.numero_habitacion AS representante_numero_habitacion,
    representante.referencia AS representante_referencia,
    representante.ciudad AS representante_ciudad,
    representante.parroquia AS representante_parroquia,
    representante.estado AS representante_estado,
    representante.telefono_habitacion AS representante_telefono_habitacion,
    representante.telefono_personal AS representante_telefono_personal,
    representante.email AS representante_email,
    representante.profesion AS representante_profesion,
    representante.lugarTrabajo AS representante_lugarTrabajo,
    representante.telefono_trabajo AS representante_telefono_trabajo,
    representante.cargo AS representante_cargo
  FROM 
    estudiante
  LEFT JOIN 
    madre ON estudiante.madre_id = madre.id
  LEFT JOIN 
    padre ON estudiante.padre_id = padre.id
  LEFT JOIN 
    representante ON estudiante.reprecentante_id = representante.id;
`;

class EstudianteGetService {
  private db: any;

  constructor() {
    this.db = dbManager.getDatabase();
  }

  // Método para obtener la información combinada de estudiante, madre, padre y representante
  public getEstudianteWithFamily() {
    try {
      return this.db.all(getEstudianteWithFamilyQuery);
    } catch (error) {
      console.error(
        "Error al obtener la información combinada de estudiante, madre, padre y representante:",
        error
      );
      throw error;
    }
  }
}

const estudianteGetService = new EstudianteGetService();

export default estudianteGetService;