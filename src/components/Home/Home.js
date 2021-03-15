import React from 'react';
import Carousel from './components/Home/Carousel';
import Story from './components/Home/Story'

const Home = () => {
  return (
    <div className="Home">
      <Carousel></Carousel>
      <Story></Story>
    </div>
  );
};

export default Home;