import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="home" className="nav-link" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="education" className="nav-link" smooth={true} duration={500}>
                        Education
                    </Link>
                </li>
                <li>
                    <Link to="skills" className="nav-link" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="experiences" className="nav-link" smooth={true} duration={500}>
                        Experiences
                    </Link>
                </li>
                <li>
                    <Link to="projects" className="nav-link" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="contact" className="nav-link" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
