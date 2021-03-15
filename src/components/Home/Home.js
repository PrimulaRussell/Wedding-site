import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Story from './components/Story'

const Home = () => {
  return (
    <div className="Home">
      <Header></Header>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <Story></Story>
    </div>
  );
};

export default Home;