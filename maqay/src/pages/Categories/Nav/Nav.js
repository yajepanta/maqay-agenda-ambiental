import React from "react";
import "./Nav.css";
import Button from "./components/Button/Button";
import getTagName from "../../../controller/getTagName.js";
import { useEffect, useState } from "react";
/* Recibirá las categorías que incluyan "por tema ambiental" o "por partido político" */
const Nav = ({ allNameTagsByTopic }) => {
  const [nameTags, setNameTags] = useState([]);
  useEffect(() => {
    allNameTagsByTopic.map((nameTag) => {
      return getTagName(nameTag).then((name) => {
        return setNameTags((prevState) => [...prevState, {name: name, number: nameTag}]);
      });
    });
  }, [allNameTagsByTopic]);

  console.log("nameTags", nameTags);

  const filterByTopic = (e) =>{
    console.log(e);
  }
  return (
    <nav>
      <span>Cambiar de tema ambiental</span>
      {nameTags.map((name) => {
        return <Button nameTagByTopic={name} filterByTopic={filterByTopic}/>;
      })}
    </nav>
  );
};

export default Nav;
