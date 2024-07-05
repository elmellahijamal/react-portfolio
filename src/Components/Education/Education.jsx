import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <div>
        <section className="education">
        <h2>Education : </h2>
        <div className="line"></div>
        <ul>
            <li id='study'>Professional Bachelor's Degree, Software Engineering and Web Development
                <ul className="ecole"><li>ENSA Tetouan <span id="date">2023/2024</span></li></ul>
            </li>
            <li id='study'>Technician Specialized IT Development 
                <ul className="ecole"><li>ISMONTIC <span id="date">2021/2023</span></li></ul>
            </li>
        </ul>
    </section>
    </div>
  )
}

export default Education