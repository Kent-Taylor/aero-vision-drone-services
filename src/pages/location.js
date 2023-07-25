// import logo from './logo.svg';
import { Fade, Slide } from "react-awesome-reveal";

import '../styles/location.scss';
import Navigation from '../components/Navigation';
import TransparentLogo from '../images/ariaLogoTransparent.png'


function location() {
  return (
    <div className="location">
      <Navigation />

      <header className="location-header">
                        <a href="/home" className="logo-link">
                <img src={TransparentLogo} alt="aria germann counseling logo transparent png" />
        </a>
        <Fade>
          <h1 className='heading-name'>Location</h1>
</Fade>
      </header>
    </div>
  );
}

export default location;
