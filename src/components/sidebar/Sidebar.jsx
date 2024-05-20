import Links from './links/Links';
import './sidebar.scss';
import React, { useState } from 'react'
import ToggleButton from './toggleButton/ToggleButton';
import { motion } from 'framer-motion';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const variants = {
        open:
        {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20
            }
        },
        closed:
        {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.3,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    return (
        <motion.div
            className="sidebar"
            animate={isOpen ? "open" : "closed"}
        >
            <motion.div
                className="bg"
                variants={variants}
            >
                <Links />
            </motion.div>
            <ToggleButton setIsOpen={setIsOpen} isOpen={isOpen} />
        </motion.div>
    )
};

export default Sidebar;
