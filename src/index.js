import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/navbar.css';
import Favourites from './components/faves';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


