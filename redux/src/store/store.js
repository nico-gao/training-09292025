import { applyMiddleware, createStore } from "redux";
import carReducer from "../slices/CarSlice";

function logger({ getState }) {
  return (next) => (action) => {
    console.log("will dispatch", action);

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    console.log("state after dispatch", getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}

function monitorProcessTimeEnhancer(createStore) {
  return (reducer, preloadedState) => {
    const enhancedReducer = (state, action) => {
      const start = performance.now();
      const newState = reducer(state, action);
      const end = performance.now();
      console.log("reducer process time", start, end, end - start);

      return newState;
    };
    return createStore(enhancedReducer, preloadedState); // enhanced store
  };
}

// const store = createStore(carReducer, undefined, applyMiddleware(logger));
const store = myCreateStore(carReducer, undefined, monitorProcessTimeEnhancer);

function myCreateStore(reducer, preloadedState, enhancer) {
  if (enhancer) {
    return enhancer(myCreateStore)(reducer, preloadedState); // enhanced store
  }

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

// const add = (a, b) => {
//   return a + b;
// };

// const curriedAdd = (a) => {
//   return (b) => {
//     return a + b;
//   };
// };

// console.log(add(1, 2));
// const addToOne = curriedAdd(1);
// console.log(addToOne(2));
// console.log(addToOne(10));

// function innerFn2(action) {
//   console.log("will dispatch", action);

//   // Call the next dispatch method in the middleware chain.
//   const returnValue = next(action);

//   console.log("state after dispatch", getState());

//   // This will likely be the action itself, unless
//   // a middleware further in chain changed it.
//   return returnValue;
// }

// function innerFn(next) {
//   return innerFn2
// }

// function logger({ getState }) {
//   return innerFn
// }
