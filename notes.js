/**
 * what/why/how
 *
 * jsx
 * syntax sugar of React.createElement -> React element
 *
 * render
 * component -> jsx -> virtual DOM -> reconciliation (diffing) -> update real DOM
 *
 * reconciliation - find what has changed
 *
 * jsx -> react element (not a DOM element), describes what we want react to render
 *
 * react node - react element, array, string, number, (null, undefined, false)
 *
 * react component - functional component (16.8), class component
 * reusable, building block of react application
 *
 * props and state changes can trigger component update
 * props          vs         state
 * external                  interanl
 * read only                 setState
 *
 * react advantages
 * ecosystem, component based (reusability, mraintainability, testing)
 * csr, ssr
 * typescript
 * react devtool
 *
 * react limitations
 * just library -> flexibility
 * csr
 * ssr -> nextjs
 *
 * pure component
 * same props/state -> same jsx
 *
 * react hooks
 * functional programming
 * reusable, readability
 *
 * mounted
 * component lifecycle
 * component inserted into the real DOM
 * mounting stage
 *
 * useState
 * manage a local variable in the component between renders
 * initial, return [state, setState]
 *
 * synthetic event
 * react wrapper around the native events
 * cross browser compatibility
 * react does event delegation by default
 *
 * reducer
 * reducer(pure function), useReducer (hook)
 *
 * validation on props
 * PorpTypes -  validate the props passed to the component
 * TypeScript
 *
 * controlled
 * managed by react state
 * easily do update, validation, reset
 *
 * uncontrolled
 * managed by DOM
 * keep it simple
 *
 * props drilling
 * when passing data from parent to deeply nested child
 * how to avoid: context
 *
 */

// img src
// App -> Profile -> Avatar
// unidirection data flow, parent -> child

// export default App;

/**
 * Layout component
 *
 * <div classname="app">
 *  <nav></nav>
 *  {children}
 * </div>
 *
 *
 * App component
 *
 * <Layout>
 *  <main>
 * </Layout>
 */

/**
 * Virtual DOM
 * trigger update (state update)
 *
 * components return new jsx -> generate the virtual dom
 *
 * reconciliation:
 * previous virtual dom, new virtual dom (diffing algorithm) to find the minimal changes
 *
 * react only updates real DOM the parts that changed
 */

/**
 *
 * state lifting
 * to share state between components, we want to lift the state to their common parent component
 *
 *            A
 *      B           C
 * D
 * E
 *
 * props drilling
 * passing props from parent component to deeply nested child components, the middle components don't necessarily need the data
 *
 *
 *
 *
 * side effect
 *
 * network requests
 * DOM interactions (accessing DOM element, add/remove event listeners)
 * Locastorage
 * timeout/interval
 */

/**
 * context
 * why: avoid props drilling, centralize state maangement logic
 * easier to maintain, easier to debug
 *
 * when not to use it
 * frequent update
 */

/**
 *
 * useRef
 *
 * useMemo, caching a calculated value
 * useCallback, caching a function
 *
 * custom hook
 * a functional component
 * naming convention (useXXXX)
 * reusable
 * return data/function, instead of JSX
 *
 * useFetch
 * UI library -> theming, useTheme
 * web socket -> useWebSocket
 * authentication -> useAuth
 */

/**
 * state management
 *
 * client state (local state)
 * live in the browser
 * Redux, Zustand, context API (dependency injection)
 *
 * server state
 * come from outside of the react app
 * React Query (TanStack Query), Redux with async thunk
 *
 * FLUX
 * architecture, pattern
 * action, dispatcher, store, view
 *
 * Redux
 * redux-core, react-redux, redux toolkit
 * 
 * 
reducer function (pure function)

[state, dispatch] <- useRedcuer <- React
dispatch <- useDispatch <- react-redux

 * hof - higher order function
takes or returns a function
array.forEach(()=>{})

  currying
  the tranformation of making a function to be called in sequence, instead of taking multiple arguments at once

  foo(a,b,c);
  foo(a)(b)(c) // calling a curried function

  all curried functions are hof, but not all hof are curried


  hoc - higher order component
  a funciton that takes a component as argument and returns a new component
  for reusing react logic

  pros: reuse react logic, decoupling
  cons: wrapper hell, props naming conflict, harder to debug

  custom hook
 */
