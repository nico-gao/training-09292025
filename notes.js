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
 * props and state changes can trigger component update
 * props          vs         state
 * external                  interanl
 * read only                 setState
 *
 *
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
 * passing props from parent component to deeply nested child components, the middle components don' tnecessarily need the data
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
