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
            <p>
                <b>Description:</b> {project.desc}
            </p>
            <p><b>Video Demo:</b></p>
            {project.video}
            <br></br><br></br>
            <p><b>View my code:</b></p>
            <a href={project.link} target="_blank" rel="noreferrer">
                <GithubIcon />
            </a>
        </div>
    )
}

export default ProjectDisplay