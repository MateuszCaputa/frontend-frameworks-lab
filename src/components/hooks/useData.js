import { useContext } from "react";
import AppContext from "../../../data/AppContext";

function useData() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useData must be used within an AppProvider");
  }
  return context.items;
}

export default useData;
