import React from 'react';
import './styles/App.css';
import Header from '../Header';
import Navbar from '../Navbar';
import RegistryContainer from '../RegistryContainer';

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
