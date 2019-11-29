import React from 'react';
import Dispatchers from './Dispatcher';
import logo from './logo.svg';


export const NavBar = () => (
  <nav className="navigation">
    <img src = {logo} alt="logo" height="40"/>
    <h1>Thinking in <strong>Redux</strong></h1>
    <Dispatchers />
  </nav>
);