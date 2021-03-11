import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Story from './components/Story'

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <Story></Story>
    </div>
  );
};

export default App;
