import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Card from "./Card/Card";
import Footer from "../commons/Footer/Footer";
import {
  getAllPosts,
  getTagsByGroupName,
  getAllTagsNameAndNumber,
} from "../../controller/postController";
import allPosts from "../../utils/data/allPosts.js";
import allTagsNameAndNumber from "../../utils/data/allTagsNameAndNumber.js";
import tagsByGroupName from "../../utils/data/tagsByGroupName.js";

const Home = () => {
  /* necesito todos los posts
clic en tema o partido debe filtrar x tema y partido
entonces:
onclick cada button de filtrado, debe acceder a la fx pura que filtra segun el tag seleccionado
y set un nuevo array de posts filtrados, y se los pasa a CARD
Card debe mostrar:
imagen del tag selected
si no hay imagen, debe ser solo el background
nombre del tag selected: categoria / partido
Descripción del problema del tag
Partidos x Categoria

Cuando se hace click en card, debe pasar el nombre del tag seleccionado a la ruta
Y de la ruta, Categories toma lo que se selecciono para pasar al filtrado

*/
  /* posts to render: posts ya filtrados */
  const [filteredPosts, setFilteredPosts] = useState([]);
  /* Acá accederemos para conseguir datos de tags */
  /*   const [allTagsNameAndNumber, setAllTagsNameAndNumber] = useState([]); */

  const [categorySelected, setCategorySelected] = useState("Tema ambiental");
  const [tagsFromCategorySelected, setTagsFromCategorySelected] = useState([]);

  /* Saves in state: object with Tags' Name and Number */
  /*   useEffect(() => {
    getAllTagsNameAndNumber().then((res) => {
      return setAllTagsNameAndNumber(res);
    });
  }, []); */

  useEffect(() => {
    getTagsByGroupName(tagsByGroupName, categorySelected).map((tags) => {
      return setTagsFromCategorySelected((prevState) => [...prevState, tags]);
    });
  }, [categorySelected]);

  const filterByCategorySelected = (categorySelected) => {
    setCategorySelected(categorySelected);
    getTagsByGroupName(tagsByGroupName, categorySelected).map((tags) => {
      return setTagsFromCategorySelected((prevState) => [...prevState, tags]);
    });
  };

  useEffect(() => {
    const newArray = allTagsNameAndNumber.filter((tag) => {
      return tagsFromCategorySelected.includes(tag.id);
    });
    setFilteredPosts(newArray);
  }, [tagsFromCategorySelected]);

  return (
    <div>
      <section className='view-home'>
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
