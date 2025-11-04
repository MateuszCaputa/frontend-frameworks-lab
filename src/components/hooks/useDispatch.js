import { useContext } from "react";
import AppContext from "../../../data/AppContext";

/**
 * (Lab 5, Task 1)
 * Custom hook to safely access the 'dispatch' function from AppContext.
 * Throws an error if used outside of an AppProvider.
 */
function useDispatch() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useDispatch must be used within an AppProvider");
  }
  return context.dispatch;
}

export default useDispatch;
