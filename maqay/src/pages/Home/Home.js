import React, { useEffect, useState } from "react";

import logoheader from "../../assets/img/logoheader.png";
import { getTagsByGroupName } from "../../controller/postController";
import allTagsNameAndNumber from "../../utils/data/allTagsNameAndNumber.js";
import tagsByGroupName from "../../utils/data/tagsByGroupName.js";
import Footer from "../commons/Footer/Footer";

import Card from "./Card/Card";
import "./Home.css";

const Home = () => {
  /* Posts ya filtrados, son los que se renderizan */
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [mainCategory, setMainCategory] = useState("Tema ambiental");
  const [mainCategoryURI, setMainCategoryURI] = useState("tema-ambiental");
  const [tagsFromCategorySelected, setTagsFromCategorySelected] = useState([]);

  /* Obtenemos todos los tags correspondientes a la categoría seleccionada,
   y la almacenamos en un estado*/
  useEffect(() => {
    const tags = [];
    getTagsByGroupName(tagsByGroupName, mainCategory).map((tag) => {
      return tags.push(tag);
    });
    return setTagsFromCategorySelected(tags);
  }, [mainCategory]);

  /* Función al hacer clic. Recibe la categoría y 
  volvemos a solicitar los tags correspondientes a la categoría seleccionada para almacenarlas en el estado */
  const filterByCategorySelected = (mainCategory, mainCategoryURI) => {
    setMainCategoryURI(mainCategoryURI);
    const tags = [];
    setMainCategory(mainCategory);
    getTagsByGroupName(tagsByGroupName, mainCategory).map((tag) => {
      return tags.push(tag);
    });

    return setTagsFromCategorySelected(tags);
  };

  /* Buscamos en el array con los nombres y números de etiquetas, todas las que incluyan
  los ids de las etiquetas de la categoría seleccionada
  y almacenamos en el estado de los posts filtrados */

  useEffect(() => {
    const newArray = allTagsNameAndNumber.filter((tag) => {
      return tagsFromCategorySelected.includes(tag.id);
    });
    setFilteredPosts(newArray);
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
              id='tema-ambiental'
              onClick={(e) => {
                return filterByCategorySelected(e.target.name, e.target.id);
              }}
            >
              Por tema ambiental
            </button>
            <button
              name='Partidos políticos'
              id='partidos-politicos'
              onClick={(e) => {
                return filterByCategorySelected(e.target.name, e.target.id);
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
                mainCategory={mainCategory}
                path={`/propuestas/${mainCategoryURI}/${post.slug}`}
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
