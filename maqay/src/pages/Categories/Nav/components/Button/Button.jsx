import React from 'react';
import './Button.css';

const Button = ({nameTagByTopic, filterByTopic}) => {
    return (
        <button id= {nameTagByTopic.number} className="nav-button" onClick={e => filterByTopic(e.target)}>{nameTagByTopic.name}</button>
    );
};

export default Button;
 