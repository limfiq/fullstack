import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={props.incrementCount}>Increment Count</button>
      <p>Received Count from Parent: {props.count}</p>
    </div>
  );
}

export default ChildComponent;
