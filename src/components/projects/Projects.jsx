import { projects } from '../../utils/projects';
import './projects.scss';
import { useState } from 'react';

const Projects = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const handleNext = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrevious = () => {
        setCurrentProjectIndex((prevIndex) =>
            (prevIndex - 1 + projects.length) % projects.length
        );
    };

    const currentProject = projects[currentProjectIndex];
    const { title, image, description, githubUrl, liveUrl, technologies } = currentProject;

    return (
        <section className="projects">
            <div className="flexContainer">
                <h1>projects.</h1>
                <div className="line"></div>
                <p>web applications with modern technologies</p>
            </div>
            <div className="container">
                <div className="projects">
                    <div className="left">
                        <img src={image} alt={title} />
                    </div>
                    <div className="right">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <div className="technologies">
                            {
                                technologies.map((technology, index) => {
                                    return <p key={index}>{technology}</p>
                                })
                            }
                        </div>
                        <div className="source">
                            <a href={githubUrl} target="_blank">
                                Source
                                <img src="./github.png" alt="github" />
                            </a>
                            <a href={liveUrl} target="_blank">See Live</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navigation">
                <div onClick={handlePrevious}></div>
                <div onClick={handleNext}></div>
            </div>
        </section>
    )
};

export default Projects;
