import { createContext } from "react";

/**
 * (Lab 4, Task 1)
 * Defines the shape of the global application context.
 * This context will hold the application state (items) and the dispatch function.
 */
const AppContext = createContext({
  items: [],
  dispatch: () => {}, // Default empty function for safety
});

export default AppContext;
