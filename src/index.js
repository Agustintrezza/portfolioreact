import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import aboutPage from './routes/aboutPage'
// import proyectosPage from './routes/proyectosPage'
// import certificadosPage from './routes/certificadosPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route path='/' element={<App /> } />
          <Route path='/about' element={ <aboutPage /> } />
          <Route path='/proyectos' element={ <proyectosPage /> } />
          <Route path='/certificados' element={ <certificadosPage /> } />
      </Routes>
  </BrowserRouter>
);


