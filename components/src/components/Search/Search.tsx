import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  render() {
    return (
      <div className="search">
        <label htmlFor="search">Search</label>
        <input id="search" type="text" />
      </div>
    );
  }
}
