// import React, { useState } from 'react';

// const Counter = () => {
//   // Mendeklarasikan state "count" dengan nilai awal 0
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Tambah</button>
//     </div>
//   );
// };

// export default Counter;

// import React, { useState, useEffect } from 'react';

// const Timer = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount(prevCount => prevCount + 1);
//     }, 1000);

//     // Cleanup function untuk menghentikan interval saat komponen unmount
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <p>Count: {count}</p>
//     </div>
//   );
// };

// export default Timer;

// import React, { createContext, useContext } from 'react';

// // Membuat Context
// const UserContext = createContext();

// const UserProvider = ({ children }) => {
//   const user = { name: 'Alice', age: 25 };

//   return (
//     <UserContext.Provider value={user}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// const UserProfile = () => {
//   const user = useContext(UserContext);

//   return (
//     <div>
//       <p>Name: {user.name}</p>
//       <p>Age: {user.age}</p>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <UserProvider>
//       <UserProfile />
//     </UserProvider>
//   );
// };

// export default App;

// import React, { useReducer } from 'react';

// const initialState = { count: 0 };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// const Counter = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
//     </div>
//   );
// };

// export default Counter;

// import React, { useRef } from 'react';

// const TextInput = () => {
//   const inputRef = useRef();

//   const focusInput = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   );
// };

// export default TextInput;

// src/App.js
import React from 'react';
import ProductList from './ProductList';

const App = () => {
  const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Smartphone', price: 500 },
    { id: 3, name: 'Tablet', price: 300 },
  ];

  return (
    <div className="App">
      <h1>Product List</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;


