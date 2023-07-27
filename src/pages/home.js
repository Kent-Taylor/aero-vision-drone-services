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
      <main className="home-main">
        <section className="section-one">

          <article className="left-square">
            <header>
              <h1>Together, we embark on a rewarding journey</h1>
            </header>
          <p>We support you as you create YOUR second story; a new and healthy narrative about your life. Second Story Counseling is committed to providing high-quality therapy to people in all stages:</p>
          <ul>
            <li>Individual Counseling for Adults</li>
            <li>Individual Counseling for Adolescents</li>
            <li>Individual Counseling for Children</li>
            <li>Marriage Counseling</li>
            <li>Premarital Counseling</li>
            <li>DBT Groups for Adolescents and Adults</li>
          </ul>
          </article>
              <div className="right-square">
                right side
              </div>
        </section>
          </main>
    </div>
  );
}

export default home;
