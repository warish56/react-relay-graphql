import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

import MainRoute from './Routes';
import Navbar from './Components/Navigation/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainRoute/>
        <Navbar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
