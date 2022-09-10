import React from 'react';
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import './App.css';

import Navbar from './components/navbar';
import Home from './components/Pages/Home';

function App() {
  console.log('responsiveness under construction!')
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<about/>} />
        <Route path='/contact' element={<contact/>} />
        <Route path='*' element={<pagenotFound/>} />
        </Routes>
    </Router>
    </>
      
  );
}

export default App;
