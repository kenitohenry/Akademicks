import React, { Component } from 'react';
import './footer.css';
import { NavLink } from 'react-router-dom';

export default function Footer (){
return (
 <ul className="footer">
 <ul>
      <li><NavLink to="/"> Home </NavLink></li>
      <li><NavLink to="/math"> Math </NavLink></li>
      <li><NavLink to="/physics"> Physics </NavLink></li>
    </ul>
    <ul>
      <li><NavLink to="/"> Contact </NavLink></li>
      <li><NavLink to="/math"> About </NavLink></li>
      <li><NavLink to="/physics"> Developer </NavLink></li>
    </ul>
  </ul> )

}