// import logo from './logo.svg';
import Navigation from '../components/Navigation';
// import { Fade, Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

import '../styles/faq.scss';
import TransparentLogo from '../images/ariaLogoTransparent.png'


function faq() {
  return (
    <div className="faq">
        <Navigation/>
      <header className="faq-header">
                 <a href="/home" className="logo-link">
                <img src={TransparentLogo} alt="aria germann counseling logo transparent png" />
        </a>
<Fade>
        <h1 className='heading-name'>
          <span className="blue-text"> F</span>requently
          <span className="blue-text"> A</span>sked
          <span className="blue-text"> Q</span>uestions
        </h1>
</Fade>
      </header>
    </div>
  );
}

export default faq;
