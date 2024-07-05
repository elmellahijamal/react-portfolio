import React from 'react';
import './App.css'
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Experiences from './Components/Experiences/Experiences';
import Footer from './Components/Footer/Footer';

function App() {
    return (
        <div>
            <Navbar />
            <section id="home">
                <Home />
            </section>
            <section id="education">
                <Education />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="experiences">
                <Experiences />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <Footer/>
        </div>
    );
}

export default App;
