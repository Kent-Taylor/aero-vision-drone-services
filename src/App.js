import React from "react";
import { ParallaxProvider } from 'react-scroll-parallax';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home.js';
import About from './pages/about.js';
import Location from './pages/location.js';
import Faq from './pages/faq.js';
import Connect from './pages/connect.js';



import './styles/common.scss';
// import './styles/home.scss';
// import './styles/about.scss';
// import './styles/location.scss';
// import './styles/faq.scss';
// import './styles/connect.scss';
import './styles/header.scss';
import './styles/navigation.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navigation from "./components/Navigation.js";

// HTML code
// Here are some of the handiest semantic HTML5 elements, use them to improve your communication with search engines:

// article - isolates a post from the rest of the code, makes it portable
// section - isolates a group of posts within a blog or a group of headings within a post
// aside - isolates supplementary content that is not part of the main content
// header - isolates the top part of the document, article, section, may contain navigation
// footer - isolates the bottom of the document, article, section, contains meta information
// nav - isolates navigation menus, groups of navigational elements



function App() {
  return (
    <div className="app">
      <ParallaxProvider>
        <React.StrictMode>
          <Router>
            <nav>
              <Navigation/>
            </nav>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path="/location" element={<Location />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/connect" element={<Connect />} />
            </Routes>
          </Router>
        </React.StrictMode>
        </ParallaxProvider>
    </div>

  );
}

export default App;
