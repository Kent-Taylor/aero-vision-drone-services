import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { Fade, Slide } from "react-awesome-reveal";

import '../styles/navigation.scss';

import TransparentLogo from '../images/ariaLogoTransparent.png'


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {

    return (
        <div className="header-page">
        <header className="home-header">
          <NavLink to="/home">
                <img src={TransparentLogo} alt="aria germann counseling logo transparent png" />
          </NavLink>
            </header>
        </div>
    );
  }
}

export default Header;
