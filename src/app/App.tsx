import React from 'react';
import { AppRoutes } from './routes/index';
import { UsuarioLogadoProvider } from './shared/contexts';

function App() {
  return (
    <UsuarioLogadoProvider>
      <AppRoutes />
    </UsuarioLogadoProvider>
  );
}

export default App;
