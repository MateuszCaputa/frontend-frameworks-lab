import React from "react";
import MyContainer from "../components/common/MyContainer";
import ProfileCardV2 from "../components/profile/ProfileCardV2";
import { Card } from "react-bootstrap";

function Lab03() {
  return (
    <>
      <Card className="bg-light p-4 rounded shadow-sm text-center mb-5">
        <h1 className="display-5">Laboratorium 3: Stan i Reducer</h1>
        <p className="lead">
          Interaktywna lista zarządzana przez `useReducer` i generyczny
          komponent kontenera.
        </p>
      </Card>

      <MyContainer element={ProfileCardV2} />
    </>
  );
}

export default Lab03;
