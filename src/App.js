import React, { Component } from 'react';
import './App.css';
import './Assets/css/style.css';
import FirstPage from './Components/FirstPage';
import SecondPage from './Components/SecondPage';
import Header from './Components/Header'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/SecondPage' element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
