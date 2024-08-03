import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Themes';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Hero from './components/HeroSection';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  transition: background-color 0.3s ease; /* Smooth transition for theme change */
`;

function App() {
  const [darkMode, setDarkMode] = useState(false); // Default to light mode
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  // Toggle between dark and light themes
  const toggleTheme = () => setDarkMode(prevMode => !prevMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <div className="ripple-background">
          <div className="circle xxlarge shade1"></div>
          <div className="circle xlarge shade2"></div>
          <div className="circle large shade3"></div>
          <div className="circle medium shade4"></div>
          <div className="circle small shade5"></div>
          <Navbar toggleTheme={toggleTheme} />
          <Body>
            <Hero />
            <Education />
            <Skills />
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            {openModal.state && (
              <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
            )}
            <Experience />
            <Contact />
            <Footer />
          </Body>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
