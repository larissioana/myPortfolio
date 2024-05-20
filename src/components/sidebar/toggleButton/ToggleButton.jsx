import React from 'react'

const ToggleButton = ({ setIsOpen, isOpen }) => {
    return (
        <button onClick={() => setIsOpen((prev) => !prev)}>
            {
                !isOpen ?
                    <>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </>
                    :
                    <img src="/close.png" />
            }
        </button>
    )
};

export default ToggleButton;
