import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "./Card/Card";
import Footer from "../commons/Footer/Footer";
import { getTagsByGroupName } from "../../controller/postController";
import allTagsNameAndNumber from "../../utils/data/allTagsNameAndNumber.js";
import tagsByGroupName from "../../utils/data/tagsByGroupName.js";
import logoheader from "../../assets/img/logoheader.png";
const Home = () => {
  /* posts to render: posts ya filtrados */
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [categorySelected, setCategorySelected] = useState("Tema ambiental");
  const [tagsFromCategorySelected, setTagsFromCategorySelected] = useState([]);
  console.log("allTagsNameAndNumber", typeof allTagsNameAndNumber.id);
  /* 
  retorna todas las etiquetas del grupo seleccionado
  todas la de tema ambietnal/tema politico pero en automatico seria tema ambiental

  export const getTagsByGroupName = (allTags, groupName) => {
  const group = allTags.find(
    (group) => group.label === groupName.replace(/-/g, " ")
  );
  return group.terms; */
  useEffect(() => {
    const tags = [];
    getTagsByGroupName(tagsByGroupName, categorySelected).map((tag) => {
      return tags.push(tag);
    });
    return setTagsFromCategorySelected(tags);
  }, [categorySelected]);

  const filterByCategorySelected = (categorySelected) => {
    const tags = [];
    setCategorySelected(categorySelected);
    getTagsByGroupName(tagsByGroupName, categorySelected).map((tag) => {
      return tags.push(tag);
    });

    return setTagsFromCategorySelected(tags);
  };

  console.log("allTagsNameAndNumber", allTagsNameAndNumber);
  useEffect(() => {
    const newArray = allTagsNameAndNumber.filter((tag) => {
      console.log("tag", tag);
      return tagsFromCategorySelected.includes(tag.id);
    });
    console.log("newArray", typeof newArray);
    return setFilteredPosts(newArray);
  }, [tagsFromCategorySelected]);
  return (
    <div>
      <section className='view-home'>
        <div className='main-header'>
          <img className='logo-header' src={logoheader} alt=''></img>
          <h1>Conoce las propuestas de los candidatos</h1>
          <h2>ELECCIONES 2021</h2>
          <p>Ordenar propuestas</p>
          <div className='home-filter-buttons'>
            <button
              name='Tema ambiental'
              onClick={(e) => {
                return filterByCategorySelected(e.target.name);
              }}
            >
              Por tema ambiental
            </button>
            <button
              name='Partidos políticos'
              onClick={(e) => {
                return filterByCategorySelected(e.target.name);
              }}
            >
              Por partido político
            </button>
          </div>
        </div>

        <section className='home-cards-container'>
          {filteredPosts.map((post) => {
            return (
              <Card
                post={post}
                key={post.id}
                categorySelected={categorySelected}
                path={`/propuestas/${categorySelected}/${post.name}`}
              />
            );
          })}
        </section>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
