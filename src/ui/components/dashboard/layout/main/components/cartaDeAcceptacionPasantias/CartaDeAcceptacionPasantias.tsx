import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { jsPDF } from 'jspdf';

import LayoutForm from "../layoutForm/LayoutForm";
import { Input } from "@form";

interface CartaProps {}

const Carta: React.FC<CartaProps> = () => {
    const [formData, setFormData] = useState({
        nombresJefe: "",
        cedulaJefe: "",
        nombresEstudiante: "",
        cedulaEstudiante: "",
        cargo: "",
        empresa: "",
        direccion: "",
        
        fecha: "",
        de: "",
        para: "",
        presentacion: "",
        carta:""
    });

    const cartaTexto = `
        FECHA: ${formData.fecha}
        DE: ${formData.de}
        PARA: ${formData.para}
        Presente.

        Carta de aceptacion de pasantias

        Reciba un caluroso saludo Fraterno, Socialista, Humanista y deseándoles a usted y a su equipo de trabajo el mayor bienestar posible que les permita continuar impulsando con trabajo comprometido el país que todos los venezolanos merecemos.
        Sr. ${formData.para}, Titular de la cedula de Identidad: ${formData.cedulaJefe}, que ocupa el cargo de: ${formData.cargo}, en la prestigiosa empresa: ${formData.empresa}, ubicada: ${formData.direccion}, Por medio de la presente se notifica que el estudiante: ${formData.nombresEstudiante}, titular de la cedula de Identidad: ${formData.cedulaEstudiante}, perteneciente a nuestra casa de estudio: Ademar Vásquez Chávez, realizara las pasantías correspondiente al año escolar: .

        Por lo que agradezco de antemano el apoyo y colaboración que puedan prestarle y así contribuir directamente a la formación de la nueva y el nuevo republicano que demanda la República Bolivariana de Venezuela.

        Sin más a que hacer referencia y segura de contar con toda la colaboración requerida, me despido.
    `;

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.text(cartaTexto, 10, 10);
        doc.save('CartaDeAcceptacionPasantias.pdf');
    };

    return (
        <LayoutForm>
            <div className="container-form add-empleado">
                <form
                    className="form-basic"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div className="container-info-user">
                        <div className="title">
                            <h4>Informacion del Basica</h4>
                        </div>
                        <Input
                            type="text"
                            icono={<FaUser />}
                            placeholder="Nombres del Jefe"
                            name="nombresJefe"
                            value={formData.nombresJefe}
                            valueChange={(e) =>
                                setFormData({ ...formData, nombresJefe: e.target.value })
                            }
                        />
                        <Input
                            type="text"
                            icono={<FaUser />}
                            placeholder="Cédula del Jefe"
                            name="cedulaJefe"
                            value={formData.cedulaJefe}
                            valueChange={(e) =>
                                setFormData({ ...formData, cedulaJefe: e.target.value })
                            }
                        />
                        <Input
                            type="text"
                            icono={<FaUser />}
                            placeholder="Nombres del Estudiante"
                            name="nombresEstudiante"
                            value={formData.nombresEstudiante}
                            valueChange={(e) =>
                                setFormData({ ...formData, nombresEstudiante: e.target.value })
                            }
                        />
                        <Input
                            type="text"
                            icono={<FaUser />}
                            placeholder="Cédula del Estudiante"
                            name="cedulaEstudiante"
                            value={formData.cedulaEstudiante}
                            valueChange={(e) =>
                                setFormData({ ...formData, cedulaEstudiante: e.target.value })
                            }
                        />
                        <Input
                            type="text"
                            icono={<FaUser />}
                            placeholder="Cargo"
                            name="cargo"
                            value={formData.cargo}
                            valueChange={(e) =>
                                setFormData({ ...formData, cargo: e.target.value })
                            }
                        />
                        <Input
                            type="text"
                            icono={<FaUser />}
                            placeholder="Empresa"
                            name="empresa"
                            value={formData.empresa}
                            valueChange={(e) =>
                                setFormData({ ...formData, empresa: e.target.value })
                            }
                        />
                        <Input
                            type="text"
                            icono={<FaUser />}
                            placeholder="Dirección"
                            name="direccion"
                            value={formData.direccion}
                            valueChange={(e) =>
                                setFormData({ ...formData, direccion: e.target.value })
                            }
                        />
                        <Input
                            type="text"
                            icono={<FaUser />}
                            placeholder="Fecha"
                            name="fecha"
                            value={formData.fecha}
                            valueChange={(e) =>
                                setFormData({ ...formData, fecha: e.target.value })
                            }
                        />
                        <Input
                            type="text"
                            icono={<FaUser />}
                            placeholder="De"
                            name="de"
                            value={formData.de}
                            valueChange={(e) =>
                                setFormData({ ...formData, de: e.target.value })
                            }
                        />
                        <Input
                            type="text"
                            icono={<FaUser />}
                            placeholder="Para"
                            name="para"
                            value={formData.para}
                            valueChange={(e) =>
                                setFormData({ ...formData, para: e.target.value })
                            }
                        />
                    </div>
                </form>
            </div>

            <textarea className='carta-de-acceptacion' value={cartaTexto} readOnly />
            <button onClick={generatePDF}>Generar PDF</button>
        </LayoutForm>
    );
}

export default Carta;