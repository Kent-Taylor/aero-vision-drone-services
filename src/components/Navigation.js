import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

import '../styles/navigation.scss';


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    console.log(this.isOpen)
  }

  toggleNav = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div id="main">
        <div id="mySidenav" className={`sidenav ${isOpen ? 'open' : ''}`}>
          <Tooltip title="Home" placement="right">
            <Button>
              <NavLink className={!isOpen ? "fa fa-fw fa-home" : "show-text"} to="/home">{isOpen ? "Home" : " "}</NavLink>
            </Button>
            </Tooltip>

          <Tooltip title="About" placement="right">
            <Button>
            <NavLink className={!isOpen ? "fa fa-fw fa-info-circle" : "show-text"} to="/about">{ isOpen ? "About" : " " }</NavLink>
            </Button>
          </Tooltip>
              <Tooltip title="Location" placement="right">
                <Button>
            <NavLink className={ !isOpen ? "fa fa-fw fa-map-marker" : "show-text"} to="/location">{ isOpen ? "Location" : " " }</NavLink>
                </Button>
          </Tooltip>

          <Tooltip title="FAQ" placement="right">
            <Button>
            <NavLink className={ !isOpen ? "fa fa-fw fa-question-circle" : "show-text"} to="/faq">{ isOpen ? "FAQ" : " " }</NavLink>
            </Button>
          </Tooltip>

          <Tooltip title="Connect" placement="right">
            <Button>
            <NavLink className={ !isOpen ? "fa fa-fw fa-envelope" : "show-text"} to="/connect">{ isOpen ? "Connect" : " " }</NavLink>
            </Button>
          </Tooltip>




            <i onClick={this.toggleNav}
              className={!isOpen ? "closed-nav-tab fa fa-angle-double-right" : "opened-nav-tab fa fa-angle-double-left"}
            ></i>

        </div>
      </div>
    );
  }
}

export default Navigation;
