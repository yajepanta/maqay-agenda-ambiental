import React, { useEffect, useMemo, useState } from "react";
import logoheader from "../../assets/img/logoheader.png";
import { getTagsByGroupName } from "../../controller/postController";
import allTagsNameAndNumberData from "../../utils/data/allTagsNameAndNumber.js";
import tagsByGroupName from "../../utils/data/tagsByGroupName.js";
import Footer from "../commons/Footer/Footer";
import Card from "./Card/Card";
import "./Home.css";

const Home = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [mainCategory, setMainCategory] = useState("Tema ambiental");
  const [tagsFromCategorySelected, setTagsFromCategorySelected] = useState([]);

  /* Obtenemos todos los tags correspondientes a la categoría seleccionada,
   y la almacenamos en un estado*/

  useEffect(() => {
    const alltags = getTagsByGroupName(tagsByGroupName, mainCategory);
    return setTagsFromCategorySelected(alltags);
  }, [mainCategory]);

  /* Buscamos en el array con los nombres y números de etiquetas, todas las que incluyan
  los ids de las etiquetas de la categoría seleccionada
  y almacenamos en el estado los posts filtrados */

  useEffect(() => {
    const newArray = allTagsNameAndNumberData.filter((tag) =>
      tagsFromCategorySelected.includes(tag.id)
    );
    console.log("newArray", newArray);

    setFilteredPosts(newArray);
  }, [tagsFromCategorySelected]);

  console.log("filteredPosts", filteredPosts);

  /* Función al hacer clic. Recibe la categoría y 
  volvemos a solicitar los tags correspondientes a la categoría seleccionada para almacenarlas en el estado */
  const filterByCategorySelected = (mainCategory) => {
    setMainCategory(mainCategory);
    const alltags = getTagsByGroupName(tagsByGroupName, mainCategory);
    return setTagsFromCategorySelected(alltags);
  };

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
          {filteredPosts.length > 0 &&
            filteredPosts.map((post) => {
              return (
                <Card
                  post={post}
                  key={post.id}
                  mainCategory={mainCategory}
                  path={`/propuestas/${mainCategory}/${post.name}`}
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
