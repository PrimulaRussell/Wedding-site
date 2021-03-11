import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import RegistryContainer from './components/RegistryContainer';

//Registry Component//
const Registry = () => {
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <RegistryContainer></RegistryContainer>
    </div>
  );
};

export default Registry;
