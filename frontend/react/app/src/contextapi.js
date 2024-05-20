import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <CounterDisplay />
    </CountContext.Provider>
  );
}

function CounterDisplay() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;