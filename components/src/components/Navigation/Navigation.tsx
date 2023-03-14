import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
      </nav>
    );
  }
}
