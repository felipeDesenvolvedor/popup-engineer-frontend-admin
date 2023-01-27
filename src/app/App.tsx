import React from 'react';
import { AppRoutes } from './routes/index';
import { UsuarioLogadoProvider } from './shared/contexts';
import './style/reset.css';

function App() {
  return (
    <UsuarioLogadoProvider>
      <AppRoutes />
    </UsuarioLogadoProvider>
  );
}

export default App;
