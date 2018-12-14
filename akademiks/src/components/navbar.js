import React, { Component } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar (){
return (
 <ul className="navbar">
 
      <li><NavLink to="/"> Home </NavLink></li>
      <li><NavLink to="/math"> Math </NavLink></li>
      <li><NavLink to="/physics"> Physics </NavLink></li>
      <li><NavLink to="/admin"> Admin </NavLink></li>
    
  </ul> )

}