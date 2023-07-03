import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/navigation.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleNav = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div id="main" onMouseOver={this.toggleNav} onMouseLeave={this.toggleNav} >
        <div id="mySidenav" className={`sidenav ${isOpen ? 'open' : ''}`}>
          {/* <i class="fa-sharp fa-regular fa-location-pin"></i> */}
          <a href="javascript:void(0)" className="closebtn" onClick={this.toggleNav}>
            &times;
          </a>
          <NavLink className={!isOpen ? "fa fa-fw fa-home" : "show-text"} to="/home">{ isOpen ? "Home" : " " }</NavLink>
          <NavLink className="fa fa-fw fa-info-circle" to="/about">About</NavLink>
          <NavLink className="fa fa-fw fa-map-marker" to="/location">Location</NavLink>
          <NavLink className="fa fa-fw fa-question-circle" to="/faq">FAQ</NavLink>
          <NavLink className="fa fa-fw fa-envelope" to="/connect">Connect</NavLink>
        </div>
        <span onClick={this.toggleNav}>open</span>
        {/* Add any other page content here */}
      </div>
    );
  }
}

export default Navigation;
