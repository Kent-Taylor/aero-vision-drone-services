// import logo from './logo.svg';
// import { Fade, Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

import '../styles/location.scss';
import TransparentLogo from '../images/ariaLogoTransparent.png'


function location() {
  return (
    <div className="location-page">

      <header className="location-header">
        <a href="/home" className="logo-link">
        <img className='transparent-logo' src={TransparentLogo} alt="aria germann counseling logo transparent png" />
        </a>
        <Fade>
          <h1 style={{display: "none"}}>location</h1>
          <h1 className='heading-name'>My Office</h1>
          <h2 className="sub-heading">Experience healing with Us</h2>
</Fade>
      </header>
      <section className="location-section-one">
        <div className="come-see-me-box">
          <h1 style={{display:"none"}}>location page</h1>
          <h1>Charlotte, NC Therapy with Aria: Healing and Growth in the Queen City</h1>
          <Fab variant="extended" color="primary">
            <NavigationIcon sx={{ mr: 1 }} />
              Map
          </Fab>
        </div>
      </section>

      <section className="location-section-two">
        {/* <Fab variant="extended" color="primary">
          <NavigationIcon sx={{ mr: 1 }} />
            Map
        </Fab> */}
      </section>
    </div>
  );
}

export default location;
