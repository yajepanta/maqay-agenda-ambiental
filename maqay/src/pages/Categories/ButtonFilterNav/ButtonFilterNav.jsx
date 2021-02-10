import React from "react";
import "./ButtonFilterNav.css";
import { Link } from "react-router-dom";
const ButtonFilterNav = ({ tagByTopic, path }) => {
  return (
    <Link to={path} className='nav-link' id={tagByTopic.id}>
      {tagByTopic.name}
    </Link>
  );
};

export default ButtonFilterNav;
