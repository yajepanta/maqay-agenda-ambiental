import React from 'react';
import './ButtonFilterNav.css';

const ButtonFilterNav = ({tagByTopic}) => {
    /* onClick={e => filterByCategory(e.target.id, tagByTopic.name) */
    return (
        <div id={tagByTopic.id} className="nav-button">{tagByTopic.name}</div>
    );
};

export default ButtonFilterNav;
 