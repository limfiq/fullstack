import React, { useState } from 'react';
import ChildComponent from './childcomponent';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <ChildComponent count={count} incrementCount={incrementCount} />
    </div>
  );
}

export default ParentComponent;
