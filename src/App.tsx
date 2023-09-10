import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Layouts/Header';
import CoinDetails from './Pages/CoinDetails';
import Grid from './Components/Layouts/Grid';

function App() {
  return (
    <Grid className='grid-cols-2 bg-primary min-h-screen'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/coin/:id' element={<CoinDetails/>}/>
        </Routes>
      </BrowserRouter>
    </Grid>
    
  );
}

export default App;
