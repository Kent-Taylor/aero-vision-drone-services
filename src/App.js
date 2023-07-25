import React from "react";
import { ParallaxProvider } from 'react-scroll-parallax';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header.js";

import Home from './pages/home.js';
import About from './pages/about.js';
import Location from './pages/location.js';
import Faq from './pages/faq.js';
import Connect from './pages/connect.js';


import './styles/common.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



function App() {
  return (
    <div className="app">
      <ParallaxProvider>
        <React.StrictMode>
          <Router>
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
