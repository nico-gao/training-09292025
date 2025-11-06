import { useEffect, useContext, useState } from "react";
import { MyStoreContext } from "../main";

export function useMySelector(selector) {
  const store = useContext(MyStoreContext);
  const [selectedState, setSelectedState] = useState(
    selector(store.getState())
  );

  useEffect(() => {
    console.log("useEffect in useMySelector");
    const unsubscribe = store.subscribe(() => {
      const newSelectedState = selector(store.getState());
      setSelectedState(newSelectedState);
    });
    return unsubscribe;
  }, [store, selector]);

  return selectedState;
}
