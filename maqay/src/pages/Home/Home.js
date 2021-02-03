import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './Home.css'
import Card from './Card/Card';
import getAllPosts from "../../controller/getAllPosts.js";
import getTagsByGroupName from "../../controller/getTagsByGroupName.js";
import getAllTagsNameAndNumber from "../../controller/getAllTagsNameAndNumber.js";

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
const [allPosts, setAllPosts] = useState([]);
/* posts to render: posts ya filtrados */
const [filteredPosts, setFilteredPosts] = useState([]);
/* Acá accederemos para conseguir datos de tags */
const [allTagsNameAndNumber, setAllTagsNameAndNumber] = useState([]);

const [ categorySelected, setCategorySelected ] = useState("Tema ambiental");
const [ tagsFromCategorySelected, setTagsFromCategorySelected ] = useState([]);

  /* All posts from Wordpress within category Environmental, with a number set by WP */
  useEffect(() => {
    const categoryAmbiental = 23;
    getAllPosts()
      .then((res) =>
        res.filter((posts) => posts.categories[0] === categoryAmbiental)
      )
      .then((res) => {
        /* setFilteredPosts(res); */
        return setAllPosts(res);
      });
  }, []);

   /* Saves in state: object with Tags' Name and Number */
   useEffect(() => {
    getAllTagsNameAndNumber().then((res) => {
      return setAllTagsNameAndNumber(res);
    });
  }, []);

  useEffect(() => {
    getTagsByGroupName(categorySelected).then((tags) => {
      return setTagsFromCategorySelected(tags);
    });
  }, [categorySelected]);

  const filterByCategorySelected = (categorySelected) => {
    setCategorySelected(categorySelected);
    getTagsByGroupName(categorySelected).then((tags) => {
      return setTagsFromCategorySelected(tags);
    });
    const newArray = allTagsNameAndNumber.filter((tag) => {
      return tagsFromCategorySelected.includes(tag.number);
    });
    setFilteredPosts(newArray);
  }

/*   useEffect(() => {
    const newArray = allTagsNameAndNumber.filter((tag) => {
      return tagsFromCategorySelected.includes(tag.number);
    });
    setFilteredPosts(newArray);
  }, [allTagsNameAndNumber, tagsFromCategorySelected ]); */

    return (
        <div>
            <section className="view-home">
                <h1>Conoce las propuestas de los candidatos</h1>
                <h2>ELECCIONES 2021</h2>
                <p>Ordenar propuestas</p>
                <div className="home-filter-buttons">
                    <button name="Tema ambiental" onClick={e => {return filterByCategorySelected(e.target.name)}}>Por tema ambiental</button>
                    <button name="Partidos políticos" onClick={e => {return filterByCategorySelected(e.target.name)}}>Por partido político</button>
                </div>  
            </section>

            <section className="cards-container">
                { filteredPosts.map((post)=> {
                    return <Link to={`/propuestas/${post.name}`} key={post.number}>
                              <Card post={post} key={post.number} categorySelected={categorySelected} />
                          </Link>
                  })
                }
            </section>
        </div>
    );
};

export default Home;