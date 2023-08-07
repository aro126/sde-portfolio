import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
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
      <p> &copy; 2023 aro126.github.io</p>
    </div>
  )
}

export default Footer