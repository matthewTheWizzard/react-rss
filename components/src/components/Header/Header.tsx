import React, { Component } from 'react';
import Navigation from '../Navigation';
import './Header.css';

export default class Header extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      pageName: 'Home',
    };
  }
  render(): JSX.Element {
    return (
      <header className="header">
        <h1>{this.state.pageName}</h1>
        <Navigation />
      </header>
    );
  }
}
