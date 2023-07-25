// import logo from './logo.svg';
// import { Fade, Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

import '../styles/home.scss';
// import BasicCard from '../components/BasicCard';
import TransparentLogo from '../images/ariaLogoTransparent.png'



function home() {
  return (
    <div className="home">
      <header className="home-header">
        <a href="/home" className="logo-link">
                <img src={TransparentLogo} alt="aria germann counseling logo transparent png" />
        </a>

      <Fade>
        <h1 className='heading-name'>Home</h1>
        </Fade>

        </header>
          {/* <BasicCard/> */}
    </div>
  );
}

export default home;
