
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';

function CounterDisplay() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => dispatch(increment())}>Click me</button>
    </div>
  );
}

export default CounterDisplay;
