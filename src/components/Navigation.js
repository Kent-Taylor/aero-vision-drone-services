import React, { Component } from 'react';
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
              <a className={!isOpen ? "fa fa-fw fa-home" : "show-text"} href="/home">{isOpen ? "Home" : " "}</a>
            </Button>
            </Tooltip>

          <Tooltip title="Meet Aria" placement="right">
            <Button>
            <a className={!isOpen ? "fa fa-fw fa-info-circle" : "show-text"} href="/about">{ isOpen ? "Meet Aria" : " " }</a>
            </Button>
          </Tooltip>
              <Tooltip title="My Office" placement="right">
                <Button>
            <a className={ !isOpen ? "fa fa-fw fa-map-marker" : "show-text"} href="/location">{ isOpen ? "My Office" : " " }</a>
                </Button>
          </Tooltip>

          <Tooltip title="FAQ" placement="right">
            <Button>
            <a className={ !isOpen ? "fa fa-fw fa-question-circle" : "show-text"} href="/faq">{ isOpen ? "FAQ" : " " }</a>
            </Button>
          </Tooltip>

          <Tooltip title="Connect" placement="right">
            <Button>
            <a className={ !isOpen ? "fa fa-fw fa-envelope" : "show-text"} href="/connect">{ isOpen ? "Connect" : " " }</a>
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
