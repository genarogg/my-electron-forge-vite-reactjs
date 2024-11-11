import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';

const EditorComponent = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editorjs',
      autofocus: true,
      tools: {
        header: {
          class: Header,
          inlineToolbar: true,
          config: {
            levels: [2, 3, 4],
            defaultLevel: 2,
          },
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
      },
      data: {
        blocks: [
          {
            type: 'header',
            data: {
              text: 'Carta de Aceptación de Pasantías',
              level: 2,
            },
          },
          {
            type: 'paragraph',
            data: {
              text: `Reciba un caluroso saludo Fraterno, Socialista, Humanista y deseándoles a usted y a su equipo de trabajo el mayor bienestar posible que les permita continuar impulsando con trabajo comprometido el país que todos los venezolanos merecemos.`,
            },
          },
          {
            type: 'paragraph',
            data: {
              text: `Sr. <b>[Nombre del destinatario]</b>, Titular de la cédula de Identidad: <b>[Número de cédula]</b>, que ocupa el cargo de: <b>[Cargo]</b>, en la prestigiosa empresa: <b>[Nombre de la empresa]</b>, ubicada en: <b>[Dirección]</b>.`,
            },
          },
          {
            type: 'paragraph',
            data: {
              text: `Por medio de la presente se notifica que el estudiante: <b>[Nombre del estudiante]</b>, titular de la cédula de Identidad: <b>[Número de cédula]</b>, perteneciente a nuestra casa de estudio <b>Ademar Vásquez Chávez</b>, realizará las pasantías correspondientes al año escolar <b>[Año]</b>.`,
            },
          },
          {
            type: 'paragraph',
            data: {
              text: `Por lo que agradezco de antemano el apoyo y colaboración que puedan prestarle y así contribuir directamente a la formación de la nueva y el nuevo republicano que demanda la República Bolivariana de Venezuela.`,
            },
          },
          {
            type: 'paragraph',
            data: {
              text: `Sin más a que hacer referencia y segura de contar con toda la colaboración requerida, me despido.`,
            },
          },
        ],
      },
      onReady: () => {
        editorRef.current = editor;
      },
    });

    return () => {
      editor.isReady
        .then(() => {
          editor.destroy();
        })
        .catch((e:any) => console.error('Error al limpiar Editor.js:', e));
    };
  }, []);

  return <div id="editorjs" style={{ border: '1px solid #ddd', padding: '10px', minHeight: '300px' }}></div>;
};

export default EditorComponent;
