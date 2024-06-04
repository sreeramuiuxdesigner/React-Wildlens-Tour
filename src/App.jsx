import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Middle from './Components/Middle/Middle';
import Destinations from './Components/Destinations/Destinations';
import Portfolio from './Components/Portfolio/Portfolio';
import Questions from './Components/Questions/Questions';
import Reviews from './Components/Reviews/Reviews';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div>

          

      <Navbar />
      <Home />
      <Middle />
      <Destinations />
      {/* 
      <Portfolio />
      <Questions />
      <Reviews />
      <Subscribe /> 
      */}
      <Footer />



    </div>
    
  )
}

export default App;
