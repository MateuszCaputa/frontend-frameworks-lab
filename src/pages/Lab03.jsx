import React from "react";
import MyContainer from "../components/common/MyContainer";
import ProfileCardV2 from "../components/profile/ProfileCardV2";
import { Card } from "react-bootstrap";

const initialPeople = [
  { id: 1, name: "Ala", rating: 0, checked: false },
  { id: 2, name: "Ela", rating: 3, checked: true },
  { id: 3, name: "Karol", rating: 9, checked: false },
  { id: 4, name: "Ola", rating: 10, checked: false },
  { id: 5, name: "Monika", rating: 5, checked: false },
  { id: 6, name: "Robert", rating: 1, checked: true },
];

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

      <MyContainer element={ProfileCardV2} data={initialPeople} />
    </>
  );
}

export default Lab03;
