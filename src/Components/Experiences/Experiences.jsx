import React from 'react'
import './Experiences.css'


const Experiences = () => {
  return (
    <div>
         <section className="experiences">
             <h2>EXPERIENCES : </h2>
             <div className="line"></div>
                <ul>
                    <li id='listOf'><h4>Front End Development , Magento - Internship</h4>
                        <ul className="company"><li>Yafa Technologies<br/>  <span id="date">11/2023 - 01/2024</span></li></ul>
                    </li>
                    <li id='listOf'><h4>Consultant SAP - Internship</h4>
                        <ul className="company"><li>ISMONTIC <br/> <span id="date">10/2023 - 11/2024</span></li></ul>
                    </li>
                    <li id='listOf'><h4>French Tutor</h4>
                        <ul className="company"><li>ELM STUDY <br/> <span id="date">2021 - Present</span></li></ul>
                    </li>
                </ul>
            </section>
    </div>
  )
}

export default Experiences