import React, {
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
  useEffect,
} from "react";

// Define el estado inicial
const initialState = {
  token: true,
  context: "inicio",
  sub_context: "", // Nuevo parámetro añadido
  active_aside: false,
  user_image: "", // Asegúrate de que esté definido correctamente
  email: "", // Nuevo campo añadido
};

// Define el objeto para las acciones
const ActionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SET_CONTEXT: "SET_CONTEXT",
  SET_SUB_CONTEXT: "SET_SUB_CONTEXT", // Nueva acción para sub_context
  RESET_STATE: "RESET_STATE",
  SET_ACTIVE_ASIDE: "SET_ACTIVE_ASIDE",
  SET_USER_IMAGE: "SET_USER_IMAGE", // Nueva acción para la imagen del usuario
  SET_EMAIL: "SET_EMAIL", // Nueva acción para el email del usuario
} as const;

// Define las acciones
type Action =
  | { type: typeof ActionTypes.LOGIN }
  | { type: typeof ActionTypes.LOGOUT }
  | { type: typeof ActionTypes.SET_CONTEXT; payload: string }
  | { type: typeof ActionTypes.SET_SUB_CONTEXT; payload: string } // Nueva acción para sub_context
  | { type: typeof ActionTypes.RESET_STATE }
  | { type: typeof ActionTypes.SET_ACTIVE_ASIDE; payload: boolean }
  | { type: typeof ActionTypes.SET_USER_IMAGE; payload: string } // Nueva acción para la imagen del usuario
  | { type: typeof ActionTypes.SET_EMAIL; payload: string }; // Nueva acción para el email del usuario

// Define el tipo de estado
export type State = typeof initialState;

// Función para guardar el estado en localStorage
const saveStateToLocalStorage = (state: State) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    // Excluye active_aside del estado antes de guardarlo
    const { active_aside, ...stateToSave } = state;
    const serializedState = JSON.stringify(stateToSave);
    localStorage.setItem("appState", serializedState);
  } catch (e) {
    console.error("Error saving state to localStorage", e);
  }
};

// Función para cargar el estado desde localStorage
const loadStateFromLocalStorage = (): State | undefined => {
  if (typeof window === "undefined") {
    return undefined;
  }

  try {
    const serializedState = localStorage.getItem("appState");
    if (serializedState === null) {
      return undefined;
    }
    const loadedState = JSON.parse(serializedState);
    return { ...loadedState, active_aside: false }; // Asegúrate de que active_aside esté presente
  } catch (e) {
    console.error("Error loading state from localStorage", e);
    return undefined;
  }
};

// Crea el reducer
const reducer = (state: State, action: Action): State => {
  const newState = (() => {
    switch (action.type) {
      case ActionTypes.LOGIN:
        return { ...state, token: true };
      case ActionTypes.LOGOUT:
        return { ...state, token: false };
      case ActionTypes.SET_CONTEXT:
        return { ...state, context: action.payload };
      case ActionTypes.SET_SUB_CONTEXT:
        return { ...state, sub_context: action.payload }; // Maneja la nueva acción
      case ActionTypes.RESET_STATE:
        return initialState;
      case ActionTypes.SET_ACTIVE_ASIDE:
        return { ...state, active_aside: action.payload };
      case ActionTypes.SET_USER_IMAGE:
        return { ...state, user_image: action.payload }; // Maneja la nueva acción
      case ActionTypes.SET_EMAIL:
        return { ...state, email: action.payload }; // Maneja la nueva acción
      default:
        return state;
    }
  })();

  saveStateToLocalStorage(newState);
  return newState;
};

// Crea el contexto
const GlobalStateContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

// Crea el proveedor de contexto
const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const persistedState = loadStateFromLocalStorage();
  const [state, dispatch] = useReducer(reducer, persistedState || initialState);

  useEffect(() => {
    saveStateToLocalStorage(state);
  }, [state]);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Exporta todo al final
export { GlobalStateProvider, GlobalStateContext, ActionTypes, initialState };
