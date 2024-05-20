import { useState } from 'react';
import { skills } from '../../utils/skills';
import './skills.scss';
import ProgressBar from '@ramonak/react-progress-bar';

const Skills = () => {
    const [skillsCategory, setSkillsCategory] = useState("frontend");

    const handleClickSkills = (skill) => {
        setSkillsCategory(skill);
    };

    return (
        <section className="skills">
            <h1>skills.</h1>
            <div className="container">
                <div className="left">
                    <button onClick={() => handleClickSkills("frontend")}>
                        <img src="./frontend.png" alt="frontend" />
                        Frontend
                    </button>
                    <button onClick={() => handleClickSkills("backend")}>
                        <img src="./backend.png" alt="frontend" />
                        Backend
                    </button>
                    <button onClick={() => handleClickSkills("soft skills")}>
                        <img src="./skills.png" alt="frontend" />
                        Soft skills
                    </button>
                </div>
                <div className="right">
                    {
                        skills
                            .filter(category => category.category === skillsCategory)
                            .map((category) => (
                                <div key={category.category}>
                                    <h2>{category.category}</h2>
                                    {
                                        category.skills.map((skill) => (
                                            <div key={skill.id}>
                                                <p>{skill.name}</p>
                                                <ProgressBar
                                                    completed={parseInt(skill.proficiency)}
                                                    bgColor="var(--gradient-clr1)"
                                                    height="15px"
                                                    borderRadius="5px"
                                                />
                                            </div>
                                        ))}
                                </div>
                            ))}
                </div>
            </div>
        </section>
    )
};

export default Skills;
