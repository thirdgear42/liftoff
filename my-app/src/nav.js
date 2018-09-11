import React, { Component } from 'react';
import './App.css';

class Nav extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container">
          <a className="navbar-brand">Appointment app</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              React Js Based Test App
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>

    );
  }
}

export default Nav;
