import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import AmberImg from "../assets/Amber.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="about">
      <img className="profile_pic" src={AmberImg} alt="Headshot of Amber looking very nice and professional" />
        <h2>Hi, my name is Amber</h2>
        <div className="prompt">
          <p>
            A software engineer with 2 years of experience navigating the monetization of user interactions and evolving
consumer privacy laws, such as CCPA. Passionate about gaining more knowledge and skills as a software
engineer.
          </p>
          <a href="https://www.linkedin.com/in/amber-ott/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/aro126" target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>
          <a href="mailto:ambrenott@outlook.com" target="_blank" rel="noreferrer">
            <EmailIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <span>Java, Python, C#, JavaScript, NoSQL, SQL, HTML/CSS, Hack (dialect of PHP)</span>
          </li>
          <li className="item">
            <h2>Frameworks and Libraries</h2>
            <span>React, Node.js, JUnit, Material-UI</span>
          </li>
          <li className="item">
            <h2>Tools</h2>
            <span>Git, MongoDB, Visual Studio, Android Studio, IntelliJ</span>
            </li>   
        </ol>
      </div>
    </div>
  )
}

export default Home