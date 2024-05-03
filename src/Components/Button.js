import "./Button.css";
import React, { useState } from 'react';

const Button = ({handle, buttonname}) => {
 
    return (
        <div className="button-container">
            <button className="button-content" onClick={handle}>
                {buttonname}
            </button>
        </div>
    );
};

export default Button;