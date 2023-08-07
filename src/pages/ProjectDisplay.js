import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import GithubIcon from '@material-ui/icons/GitHub';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className='project'>
            <h1> {project.name} </h1>
            <img src={project.image} alt="" />
            <p>
                <b>Skills:</b> {project.skills}
            </p>
            <a href={project.link} target="_blank" rel="noreferrer">
                <GithubIcon />
            </a>
        </div>
    )
}

export default ProjectDisplay