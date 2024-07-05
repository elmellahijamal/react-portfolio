import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div>
      <section className="projects">
    <h2>Projects : </h2>
    <div className="line"></div>
    <ul>
        <li id='prjtTitle'>Full Stack Students CRUD Application
            <ul className="langused"><li>JAVA , SPRINGBOOT , REACTJS , BOOTSTRAP</li></ul>
        </li>
        <li id='prjtTitle'>Application Web Météo
            <ul className="langused"><li>JavaScript , API</li></ul>
        </li>
        <li id='prjtTitle'>To-Do List App 
            <ul className="langused"><li>REACT JS / LocalStorage</li></ul>
        </li>
        <li id='prjtTitle'>Application Desktop pour gérer les absences
            <ul className="langused"><li>C# / ADO.NET</li></ul>
        </li>
    </ul>
</section>
</div>
  )
}

export default Projects