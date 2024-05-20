// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CounterDisplay from './CounterDisplay';

function App() {
  return (
    <Provider store={store}>
      <div>
        <CounterDisplay />
      </div>
    </Provider>
  );
}

export default App;

