import { useContext } from "react";
import AppContext from "../../../data/AppContext";

function useDispatch() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useDispatch must be used within an AppProvider");
  }
  return context.dispatch;
}

export default useDispatch;
