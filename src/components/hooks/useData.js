import { useContext } from "react";
import AppContext from "../../../data/AppContext";

/**
 * (Lab 5, Task 1)
 * Custom hook to safely access the 'items' (data) from AppContext.
 * Throws an error if used outside of an AppProvider.
 */
function useData() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useData must be used within an AppProvider");
  }
  return context.items;
}

export default useData;
