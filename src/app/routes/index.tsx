import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Models, Login } from '../pages';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/entrar' element={<Login/>}/> */}
        <Route path='/modelos' element={<Models/>}/>
        <Route path='/pagina-inicial' element={<Models/>}/>
        <Route path='*' element={<Navigate to='/pagina-inicial'/> } />
      </Routes>
    </BrowserRouter>
  );
};