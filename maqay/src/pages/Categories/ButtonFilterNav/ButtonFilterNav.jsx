import React from 'react';
import './ButtonFilterNav.css';

const ButtonFilterNav = ({tagByTopic, filterByTopic}) => {
    return (
        <button id= {tagByTopic.number} className="nav-button" onClick={e => filterByTopic(e.target, tagByTopic)}>{tagByTopic.name}</button>
    );
};

export default ButtonFilterNav;
 