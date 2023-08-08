import React, { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Subscribe from "../components/Subscribe";
import '../styles/home.scss';
import TransparentLogo from '../images/ariaLogoTransparent.png'
import OwnerPic from '../images/ownerProfile.JPG'
import Button from '@mui/material/Button';

import SlideShow from "../components/SlideShow";

function Home() {
  const [showFullText, setShowFullText] = useState(false);

  const toggleReadMore = () => {
    setShowFullText(!showFullText);
    console.log(showFullText)
    console.log(!showFullText)
  };
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
      <section className="section-two">
          <Fade>
              <div className="left-square">
              {/* image here */}
              <img id="myImg" src={OwnerPic} alt="aria germann lmsw family counselor therapy" />
              </div>
              <article className="right-square">
                <header>
                <h1>Hello, I'm Aria</h1>
              </header>

                <p>
                  {showFullText ? (
                    <>
                <p>
                I am a Licensed Master Social Worker, and a recovering perfectionist. I was born and raised in the Bay Area.  I received an undergraduate degree in Human Development from Brigham Young University.  I also received my Masters Degree from Brigham University. When I’m not helping my clients to become the best they can be, you’ll find me reading, hiking, walking, playing pickleball, shopping or traveling.  I look forward to getting to know YOU better and walking with you on your journey.
                    </p>
                    <p>
                    I have helped people work through feelings of depression, anxiety, perfectionism, trauma, burnout, grief or suicide.  I also love to help people explore issues of: self-worth/self-compassion/self-esteem, life transitions, family conflict, coping skills, codependency, anger management, relationship issues, boundaries, communication skills and emotional regulation.
                    </p>

                    </>
                  ) : (
                    <>
                      I am a Licensed Master Social Worker, and a recovering perfectionist. I was born and raised in the Bay Area.  I received an undergraduate degree in Human Development from Brigham Young University.  I also received my Masters Degree from...

                    </>
                  )}
              </p>
              <Button className="button" onClick={toggleReadMore} variant="outlined">{showFullText ? "Read less" : "Read more"}</Button>
            </article>

          </Fade>
        </section>
        <section>
          <SlideShow/>
        </section>
        <section className="section-one">
          <Fade>
        <Slide>
          <article className="left-square">
            <header>
              <h1>Together, we embark on a rewarding journey</h1>
                </header>
              <div className="content">

              <p>We support you as you create YOUR second story; a new and healthy narrative about your life. Second Story Counseling is committed to providing high-quality therapy to people in all stages:</p>
              <ul>
                <li>Individual Counseling for Adults</li>
                <li>Individual Counseling for Adolescents</li>
                <li>Individual Counseling for Children</li>
                <li>Marriage Counseling</li>
                <li>Premarital Counseling</li>
                <li>DBT Groups for Adolescents and Adults</li>
                  </ul>
              </div>
            </article>
        </Slide>
          </Fade>
              <div className="right-square">
                {/* right side */}
              </div>
        </section>



        <section className="section-three">
          <Subscribe/>
        </section>

          </main>
    </div>
  );
}

export default Home;
