// import logo from './logo.svg';
import Navigation from '../components/Navigation';
import { Fade, Slide } from "react-awesome-reveal";

import '../styles/about.scss';
import TransparentLogo from '../images/ariaLogoTransparent.png'


function about() {
  return (
    <div className="about">
      <Navigation/>
      <header className="about-header">
               <a href="/home" className="logo-link">
                <img src={TransparentLogo} alt="aria germann counseling logo transparent png" />
        </a>
<Fade><h1 className='heading-name'>About</h1></Fade>

      </header>
    </div>
  );
}

export default about;
