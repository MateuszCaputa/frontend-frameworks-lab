/**
 * (Lab 3, Task 7 & 9) & (Lab 4, Task 8)
 * The main reducer function for managing the application state (list of people).
 * Handles check, rate, delete, add, and edit actions.
 *
 * @param {array} state - The current state (array of person objects).
 * @param {object} action - The action dispatched (e.g., { type: 'delete', id: 1 }).
 * @returns {array} The new state.
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

    case "add": {
      const newPerson = {
        ...action.payload,
        id: crypto.randomUUID(),
        rating: 0,
        checked: false,
      };
      return [...state, newPerson];
    }

    case "edit":
      return state.map((person) =>
        person.id === action.payload.id
          ? { ...person, ...action.payload }
          : person
      );

    default:
      return state;
  }
}
