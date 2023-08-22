// import logo from './logo.svg';
// import { Fade, Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

import '../styles/location.scss';
import TransparentLogo from '../images/ariaLogoTransparent.png'


function location() {
  return (
    <div className="location">

      <header className="location-header">
                        <a href="/home" className="logo-link">
                <img className='transparent-logo' src={TransparentLogo} alt="aria germann counseling logo transparent png" />
        </a>
        <Fade>
          <h1 className='heading-name'>Location</h1>
</Fade>
      </header>
    </div>
  );
}

export default location;
