import { Fade } from "react-awesome-reveal";

import '../styles/about.scss';
import TransparentLogo from '../images/ariaLogoTransparent.png'
import AriaOne from "../images/aria1.jpeg";
import OwnerPic from '../images/ownerProfile.JPG'



function about() {
  return (
    <div className="about">

      <header className="about-header">
               <a href="/home" className="logo-link">
                <img className='transparent-logo' src={TransparentLogo} alt="aria germann counseling logo transparent png" />
        </a>
        <Fade duration={500}>
          <h1 className='heading-name'>Meet Aria</h1>
          <h2 className="sub-heading">Get to Know Your Therapist</h2>
        </Fade>

      </header>

      <section className="section-one">
        <div className="left">
          <img src={AriaOne} alt="aria germann counseling profile" />
        </div>
        <div className="right">
          <article>
              <p>
                <span className="first-letter">As a young teenager, I was going through an emotional struggle and my mother suggested therapy.</span>
              </p>

            <p>
              “Me? Therapy? No way” I replied. “Therapy is only for people who have major issues!” She “insisted” that I give it a try, and I am grateful she did.  Speaking to a non-judgmental, compassionate person, whose main goal was to help me succeed, enabled me to quickly work through issues that may have lingered for years, and ultimately changed my life. I greatly admire and appreciate the therapist who helped me. She inspires me to give that same gift to my clients, with the same level of kindness and compassion, that I received.  I know that the idea of therapy can be intimidating. But, I promise, the steps you are taking can be life altering.
            </p>

          </article>
        </div>
        </section>
      <section className="section-two">
        <Fade duration={500}>
          <div className="line"/>
        </Fade>

            <p>
              Nothing makes me happier than empowering someone with the tools they need to be proactive in overcoming their current challenges, and I ensure this is done in a kind, compassionate and non-judgmental environment. I deeply care about my clients and understand the pain that brings them to counseling. My passion is helping adolescents and female adults/young adult females become the best them.
            </p>
        <Fade duration={500}>
          <div className="line"/>
        </Fade>

        <p className="big-text">
        I use a mix of CBT, ACT, DBT and a strengths-based approach during therapy.
          </p>
      </section>

        <div className="aria-container-two">
          <div className="left">

            <p>
            I have helped people work through feelings of depression, anxiety, perfectionism, trauma, burnout, grief or suicide.  I also love to help people explore issues of: self-worth/self-compassion/self-esteem, life transitions, family conflict, coping skills, codependency, anger management, relationship issues, boundaries, communication skills and emotional regulation.
            </p>
        </div>
          <div className="right">
              <img src={OwnerPic} className='owner-pic-2' alt="aria germann counseling profile" />
          </div>
        </div>
          <div className="about-me-container">
        <Fade duration={500}>
          <div className="line"/>
        </Fade>

            <p>
              A little about me: I am a Licensed Master Social Worker, and a recovering perfectionist. I was born and raised in the Bay Area.  I received an undergraduate degree in Human Development from Brigham Young University.  I also received my Masters Degree from Brigham University. When I’m not helping my clients to become the best they can be, you’ll find me reading, hiking, walking, playing pickleball, shopping or traveling.
          </p>
        <Fade duration={500}>
          <div className="line"/>
        </Fade>

          </div>


          <p className="cursive">  I look forward to getting to know YOU better and walking with you on your journey.</p>

      <section className="section-three">
      <Fade duration={500}>
        <p>I love going hiking.</p>
          </Fade>
      </section>
      <section className="section-four">
      <Fade duration={500}>
          <p>
            I'm learning to golf.
          </p>

          </Fade>

      </section>
      <section className="section-five">
            <Fade duration={500}>
          <p>
            Pickleball is my new favorite sport.
          </p>

            </Fade>

      </section>
      <section className="section-six">
            <Fade duration={500}>
          <p>
              Traveling is my guilty pleasure.
          </p>

            </Fade>

      </section>
      <section className="section-seven">
            <Fade duration={500}>
          <p>

        Reading is my escape.
          </p>
            </Fade>

      </section>
      <section className="section-eight">
            <Fade duration={500}>
          <p>

        I love my nature walks.
          </p>
            </Fade>

      </section>
      <section className="section-nine">
            <Fade duration={500}>
          <p>

        Board games with family is a must.
          </p>
            </Fade>

      </section>
    </div>
  );
}

export default about;
