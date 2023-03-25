import React from 'react';
import { AppRoutes } from './routes/index';
import { UsuarioLogadoProvider } from 'shared/contexts';
import './style/reset.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  elements:1  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'addItem': {
    return {
      ...state,
      elements: action.peyload
    };
  }
  default:{
    return state;
  } 
  }
};

function App() {
  return (
    <UsuarioLogadoProvider>
      <Provider store={createStore(reducer)}>
        <AppRoutes />
      </Provider>
    </UsuarioLogadoProvider>
  );
}

export default App;
