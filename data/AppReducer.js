/**
 * Reducer aplikacji do zarządzania stanem osób.
 * @param {array} state - Obecny stan (tablica osób).
 * @param {object} action - Obiekt akcji z typem (type) i payloadem.
 * @returns {array} - Nowy stan.
 */
export default function AppReducer(state, action) {
  switch (action.type) {
    case "check":
      return state.map((person) =>
        person.id === action.id
          ? { ...person, checked: !person.checked }
          : person
      );

    case "rate": {
      const newRating = action.rating >= 10 ? 0 : action.rating + 1;

      return state.map((person) =>
        person.id === action.id ? { ...person, rating: newRating } : person
      );
    }

    case "delete":
      return state.filter((person) => person.id !== action.id);

    default:
      return state;
  }
}
