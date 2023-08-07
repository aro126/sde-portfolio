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
          <LinkedInIcon />
          <GithubIcon />
          <EmailIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>HTML, CSS, React Native</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>SQL, ...</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Java, Python, Javascript, C#, C, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home