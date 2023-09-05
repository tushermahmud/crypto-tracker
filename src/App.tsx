import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Layouts/Header';
import CoinDetails from './Pages/CoinDetails';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:id' element={<CoinDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
