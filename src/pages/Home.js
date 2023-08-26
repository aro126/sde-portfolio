import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import "../styles/Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="about">
        <h2>Hi, My Name is Amber</h2>
        <div className="prompt">
          <p>
            A recent graduate passionate about furthering my skills.
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
            <span>Java, Python, Javascript, HTML, CSS, NoSQL, C#, C, TypeScript</span>
          </li>
          <li className="item">
            <h2>Technologies</h2>
            <span>Github, MongoDB, React.js, Node.js, Figma</span>
          </li>
          <li className="item">
            <br></br>
            <br></br>
            <span>*Disclaimer: As a recent graduate, I would consider myself a novice in all listed skills.</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home