import './hero.scss';
import { motion } from 'framer-motion';

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 40,
        },
    },
};

const Hero = () => {
    return (
        <section className="hero">
            <div className="wrapper">
                <div className="imgContainer">
                    <img src="./larisa.png" alt="larisa oltean" />
                </div>
                <div className="textContainer" >
                    <h2 >Larisa Ioana Oltean</h2>
                    <h1 >Frontend Developer</h1>
                    <div className="buttons">
                        <button>
                            <a href="#Projects">
                                See the latest works
                            </a>
                        </button>
                        <button>
                            <a href="#Contact">
                                Contact me
                            </a>
                        </button>
                    </div>
                </div>
                <motion.div variants={sliderVariants} animate="animate" initial="initial" className="sliderContainer">
                    REACT, NODE, NEXT.JS
                </motion.div>
            </div>
        </section>
    )
};

export default Hero;
