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
