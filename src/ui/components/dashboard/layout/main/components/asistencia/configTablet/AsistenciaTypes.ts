interface AsistenciaTypes {
  id: number;
  // personal_id: number;
  nombres: string;
  apellidos: string;
  ci: string;
  fecha: string;
  hora_entrada?: string;
  hora_almuerzo?: string;
  hora_salida?: string;
  vino?: string;
  comentario?: string;
}

export default AsistenciaTypes;
