import React, { useReducer } from 'react';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { StateContext, DispatchContext } from './context';
import Palette from './Palette';
import Stage from './Stage';
import { store } from './redux';

function App() {
  const [state, dispatch] = useReducer((state, action) => state, {});
  console.log(state);

  return (
    <Provider store={store}>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <div className="App container vh-100">
            <header className="App-header">
              <h2>Blocks</h2>
            </header>
            <div className="row h-75">
              <Palette className="col-3" />
              <Stage className="col-9" />
            </div>
          </div>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </Provider>
  );
}

export default App;
