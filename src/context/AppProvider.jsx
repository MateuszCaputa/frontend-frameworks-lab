import React, { useReducer } from "react";
import AppReducer from "../../data/AppReducer";
import AppContext from "../../data/AppContext";
import { initialData } from "../../data/initialData";

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialData);

  return (
    <AppContext.Provider value={{ items: state, dispatch: dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
