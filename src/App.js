import React from 'react';
import './styles/App.css'
import Header from './components/Header';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
    </div>
  );
};

export default App;
