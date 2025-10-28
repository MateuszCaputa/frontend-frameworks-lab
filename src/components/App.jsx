import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Lab01 from "../pages/Lab01";
import Lab02 from "../pages/Lab02";
import Lab03 from "../pages/Lab03";
import Lab04 from "../pages/Lab04";
import NotFound from "../pages/NotFound";

import AppContext from "../../data/AppContext";
import AppReducer from "../../data/AppReducer";
import { initialData } from "../../data/initialData";

import PersonAddForm from "../pages/forms/PersonAddForm";
import PersonEditForm from "../pages/forms/PersonEditForm";

function App() {
  const [state, dispatch] = useReducer(AppReducer, initialData);

  return (
    <AppContext.Provider value={{ items: state, dispatch: dispatch }}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/lab01" element={<Lab01 />} />
          <Route path="/lab02/:id" element={<Lab02 />} />
          <Route path="/lab02" element={<Lab02 />} />
          <Route path="/lab03" element={<Lab03 />} />
          <Route path="/lab04" element={<Lab04 />} />
          <Route path="/lab04/add" element={<PersonAddForm />} />
          <Route path="/lab04/edit/:id" element={<PersonEditForm />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
