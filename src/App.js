import React from 'react';
import './styles/App.css'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <Carousel></Carousel>
    </div>
  );
};

export default App;
