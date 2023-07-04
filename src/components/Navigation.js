import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";


import '../styles/navigation.scss';
// import { Tooltip } from 'element-react';

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
      <div id="main">
        <div id="mySidenav" className={`sidenav ${isOpen ? 'open' : ''}`}>
          <Fade>
            {/* <Tooltip className="item" effect="dark" content="Top Left Center" placement="top-start"> */}

            {/* <el-tooltip class="item" effect="dark" content="Right Center prompts info" placement="right"> */}
              <NavLink className={!isOpen ? "fa fa-fw fa-home" : "show-text"} to="/home">{isOpen ? "Home" : " "}</NavLink>
            {/* </Tooltip> */}
            <NavLink className={!isOpen ? "fa fa-fw fa-info-circle" : "show-text"} to="/about">{ isOpen ? "About" : " " }</NavLink>
            <NavLink className={ !isOpen ? "fa fa-fw fa-map-marker" : "show-text"} to="/location">{ isOpen ? "Location" : " " }</NavLink>
            <NavLink className={ !isOpen ? "fa fa-fw fa-question-circle" : "show-text"} to="/faq">{ isOpen ? "FAQ" : " " }</NavLink>
            <NavLink className={ !isOpen ? "fa fa-fw fa-envelope" : "show-text"} to="/connect">{ isOpen ? "Connect" : " " }</NavLink>
            <i onClick={this.toggleNav}
              className={!isOpen ? "closed-nav-tab fa fa-angle-double-right" : "opened-nav-tab fa fa-angle-double-left"}
            ></i>

          </Fade>
        </div>
      </div>
    );
  }
}

export default Navigation;
