// import logo from './logo.svg';
// import { Fade, Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

import '../styles/about.scss';
import TransparentLogo from '../images/ariaLogoTransparent.png'


function about() {
  return (
    <div className="about">
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
