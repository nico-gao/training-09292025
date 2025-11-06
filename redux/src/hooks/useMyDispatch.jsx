import { useContext } from "react";
import { MyStoreContext } from "../main";

export function useMyDispatch() {
  const store = useContext(MyStoreContext);
  return store.dispatch;
}
