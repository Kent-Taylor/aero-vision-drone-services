// import logo from './logo.svg';
import { Fade, Slide } from "react-awesome-reveal";

import Navigation from '../components/Navigation';
import '../styles/connect.scss';
import TransparentLogo from '../images/ariaLogoTransparent.png'


function connect() {
  return (
    <div className="connect">
        <Navigation/>
      <header className="connect-header">
                 <a href="/home" className="logo-link">
                <img src={TransparentLogo} alt="aria germann counseling logo transparent png" />
        </a>
<Fade><h1 className='heading-name'>Connect</h1></Fade>

      </header>
    </div>
  );
}

export default connect;
