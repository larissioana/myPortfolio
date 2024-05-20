import './navbar.scss';
import Sidebar from '../sidebar/Sidebar';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 0.5
                    }}
                >
                    Larisa I. Oltean
                </motion.span>
                <div className="social">
                    <a href="https://github.com/larissioana" target="_blank">
                        <img src="./github.png" alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/larisaoltean/" target="_blank">
                        <img src="./linkedin.png" alt="linkedin" />
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
