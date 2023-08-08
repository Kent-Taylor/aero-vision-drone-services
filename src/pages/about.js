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
      <section>
        <p>
          As a young teenager, I was going through an emotional struggle and my mother suggested therapy.  “Me? Therapy? No way” I replied. “Therapy is only for people who have major issues!” She “insisted” that I give it a try, and I am grateful she did.  Speaking to a non-judgmental, compassionate person, whose main goal was to help me succeed, enabled me to quickly work through issues that may have lingered for years, and ultimately changed my life. I greatly admire and appreciate the therapist who helped me. She inspires me to give that same gift to my clients, with the same level of kindness and compassion, that I received.  I know that the idea of therapy can be intimidating. But, I promise, the steps you are taking can be life altering.
        </p>
        <p>
              Nothing makes me happier than empowering someone with the tools they need to be proactive in overcoming their current challenges, and I ensure this is done in a kind, compassionate and non-judgmental environment. I deeply care about my clients and understand the pain that brings them to counseling. My passion is helping adolescents and female adults/young adult females become the best them. I use a mix of CBT, ACT, DBT and a strengths-based approach during therapy.
        </p>
        <p>
        A little about me: I am a Licensed Master Social Worker, and a recovering perfectionist. I was born and raised in the Bay Area.  I received an undergraduate degree in Human Development from Brigham Young University.  I also received my Masters Degree from Brigham University. When I’m not helping my clients to become the best they can be, you’ll find me reading, hiking, walking, playing pickleball, shopping or traveling.  I look forward to getting to know YOU better and walking with you on your journey.
        </p>
        <p>
        I have helped people work through feelings of depression, anxiety, perfectionism, trauma, burnout, grief or suicide.  I also love to help people explore issues of: self-worth/self-compassion/self-esteem, life transitions, family conflict, coping skills, codependency, anger management, relationship issues, boundaries, communication skills and emotional regulation.
        </p>
      </section>
    </div>
  );
}

export default about;
