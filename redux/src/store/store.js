import { createStore } from "redux";
import carReducer from "../slices/CarSlice";

// const store = createStore(carReducer);
const store = myCreateStore(carReducer);
console.log("store", store);

function myCreateStore(reducer, preloadedState, enhancer) {
  const callbackFns = [];
  const store = {
    state: preloadedState,
  };

  store.getState = () => {
    return store.state;
  };

  store.dispatch = (action) => {
    store.state = reducer(store.state, action);
    callbackFns.forEach((cb) => cb());
  };

  store.subscribe = (cb) => {
    callbackFns.push(cb);

    // unsubscribe
    return () => {
      callbackFns.filter((fn) => cb !== fn);
    };
  };

  store.dispatch({ type: "@@INIT" });

  return store;
}

export default store;
