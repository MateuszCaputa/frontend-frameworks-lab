import React from "react"; // AKTUALIZACJA: usunięto 'useReducer'
import { Routes, Route } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Lab01 from "../pages/Lab01";
import Lab02 from "../pages/Lab02";
import Lab03 from "../pages/Lab03";
import Lab04 from "../pages/Lab04";
import NotFound from "../pages/NotFound";

// Importy dla formularzy (Lab 4)
import PersonAddForm from "../pages/forms/PersonAddForm";
import PersonEditForm from "../pages/forms/PersonEditForm";

// AKTUALIZACJA: (Lab 5) Import nowego Providera z 'src/context'
import AppProvider from "../context/AppProvider";

// AKTUALIZACJA: (Lab 5) Import nowych stron
import Lab05 from "../pages/Lab05";
import UserDetailsPage from "../pages/UserDetailsPage";
import PostCommentsPage from "../pages/PostCommentsPage";

function App() {
  // Logika 'useReducer' została przeniesiona do AppProvider

  return (
    // Używamy AppProvider (Lab 5) zamiast AppContext.Provider
    <AppProvider>
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

          {/* AKTUALIZACJA: (Lab 5) Te linie muszą tu być.
            To jest przyczyna Twojego błędu 404.
          */}
          <Route path="/lab05" element={<Lab05 />} />
          <Route path="/lab05/users/:id" element={<UserDetailsPage />} />
          <Route
            path="/lab05/posts/:id/comments"
            element={<PostCommentsPage />}
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
