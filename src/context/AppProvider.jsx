import React, { useReducer } from "react";
import AppReducer from "../../data/AppReducer";
import AppContext from "../../data/AppContext";
import { initialData } from "../../data/initialData";

/**
 * (Lab 5, Preparation)
 * The main application context provider.
 * Moves the 'useReducer' logic from App.jsx to this dedicated component.
 * @param {object} props - Component properties.
 * @param {React.ReactNode} props.children - The child components to render.
 */
function AppProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialData);

  return (
    <AppContext.Provider value={{ items: state, dispatch: dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
