module.exports = {
  // ...otras configuraciones
  settings: {
    react: {
      version: "detect", // Detecta automáticamente la versión de React
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off", // Desactiva la regla que requiere React en el alcance
  },
};
