import './about.scss';

const About = () => {
    return (
        <section className="about-me">
            <h1>about me.</h1>
            <p>Hey there 👋, I'm Larisa, <span>a passionate self-taught</span> Frontend Developer. My expertise lies in developing interactive, responsive, and accessible websites. I specialize in building dynamic Single-Page Applications using React. By leveraging React’s component-based architecture and state management capabilities, I create user interfaces that enhance user interaction and experience. In addition to React, I develop both static and server-side rendered websites using Next.js.

            </p>
            <p>Throughout my learning journey and professional experience, I've developed and refined my skills in front-end development. I am committed to staying current with the latest technologies and best practices to ensure my work remains at the cutting edge. My primary objective is to create web applications that are not only aesthetically pleasing but also deliver a good  user experience.</p>
            <span className="about-projects">
                {`Feel free to explore `}
                <a href="#Projects" className="color">
                    my project section
                </a>
                {` to see some of the websites I have built.`}
            </span>
        </section >
    )
};

export default About;
