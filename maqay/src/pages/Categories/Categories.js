import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./Categories.css";
import Card from "./Card/Card";
import Footer from "../commons/Footer/Footer";
import ButtonFilterNav from "./ButtonFilterNav/ButtonFilterNav.jsx";
import { getTagsByGroupName } from "../../controller/postController";
import MetaDecorator from "./MetaDecorator/MetaDecorator";
import allPosts from "../../utils/data/allPosts.js";
import allTagsNameAndNumber from "../../utils/data/allTagsNameAndNumber.js";
import tagsByGroupName from "../../utils/data/tagsByGroupName.js";
import CategoryDescription from "./CategoryDescription/CategoryDescription.js";
import arrowDown from '../../assets/img/arrow-down.svg'
import {SimpleSlider} from './slider'
import { getAllPosts } from '../../controller/postController'


const Categories = () => {
  /* posts to render */
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [politicalPartiesTags, setPoliticalPartiesTags] = useState([]);
  const [navBarTags, setNavBarTags] = useState([]);
  /* set category debe ir dentro de la fx que saca las cosas del windowlocation */
  const [mainCategory, setMainCategory] = useState([]);
  const [categorySelected, setCategorySelected] = useState([]);
  const [categorySelectedTags, setCategorySelectedTags] = useState([]);

  getAllPosts().then(json=> console.table(json));

  /* Political Parties Tags */
  useEffect(() => {
    getTagsByGroupName(tagsByGroupName, "Partidos políticos").map((tags) => {
      return setPoliticalPartiesTags((prevState) => [...prevState, tags]);
    });
  }, []);

  const { category, subcategory } = useParams();
  useEffect(() => {
    setCategorySelected(subcategory);
    setMainCategory(category);
  }, [category, subcategory]);

  useEffect(() => {
    if (mainCategory.length > 0) {
      getTagsByGroupName(tagsByGroupName, mainCategory).map((tags) => {
        return setCategorySelectedTags((prevState) => [...prevState, tags]);
      });
    }
  }, [mainCategory]);

  /* NAVIGATION BAR Functions 
  DEBE CONVERTIRSE FX PURA CON ARGUMENTO ENVIRONMENTAL O POLITICAL Y VARIAR SEGUN CATEGORY SELECTED*/
  useEffect(() => {
    if (categorySelectedTags) {
      const newArray = allTagsNameAndNumber.filter((tag) => {
        return categorySelectedTags.includes(tag.id);
      });
      setNavBarTags(newArray);
    }
  }, [categorySelectedTags]);

  /* Create property "politicalParties" with only tag number of politicalparties from every post*/

  const tagName = () => {
    // post.tags es el array de tags de cada post
    return allPosts.map((post) => {
      const tags = post.tags;
      const array = politicalPartiesTags.filter((politicalTagNumber) => {
        return tags.includes(politicalTagNumber);
      });
      return (post.politicalParties = array);
    });
  };
  console.log("tagName: ", tagName());

  /* filtered posts */
  useEffect(() => {
    const newArray = allTagsNameAndNumber.find((tag) => {
      return categorySelected.includes(tag.name);
    });

    if (newArray) {
      const array = allPosts.filter((post) => {
        const tags = post.tags;
        return tags.includes(newArray.id);
      });
      return setFilteredPosts(array);
    }
  }, [categorySelected]);

  const location = useLocation();
  const currentUrl =
    "https://maqay.netlify.app" + location.pathname.replace(/ /g, "-");

  let navShow = false;
  const navClick = () =>{
    navShow=!navShow
    console.log(navShow)
  }

  return (
    <div>
      {categorySelected.length > 0 && (
        <MetaDecorator
          title={`Agenda Ambiental - ${categorySelected}`}
          description={currentUrl}
          imgURL={`/img/${categorySelected.replace(/<\/?p[^>]*>/g, "")}.png`}
        />
      )}
      <header>
        <span>{categorySelected}</span>
      </header>
      <main>
      <div className='navContainer'>
        <nav>
            <div className='nav-btn-container'>
              <button
                className='btn-back'
                onClick={() => {
                  window.location = "/";
                }}
              >
                <i className='fas fa-chevron-left'></i>REGRESAR
              </button>
              <button className='btn-list' onClick={()=>navClick()}><span>Cambiar de tema ambiental</span><img src={arrowDown} className='arrow-down' alt='arrowDown'/></button>
            </div>
          <div className={navShow===true ? 'list-nav':'list-nav-hidden'}>
          {navBarTags.map((tag) => {
            return (
              <ButtonFilterNav
                key={tag.id}
                tagByTopic={tag}
                path={`/propuestas/${mainCategory}/${tag.name}`}
              />
            );
          })}
          </div>
        </nav>
        </div>
        <section className='view-categories'>
          <span className='text-bold'>
            HEMOS IDENTIFICADO{" "}
            <span className='highlighted'>{filteredPosts.length}</span>{" "}
            PROPUESTAS
          </span>
          <div className='sliderContainer'>
          <SimpleSlider/>
          </div>
          <div className='main-text'>
            {mainCategory === "Tema ambiental" &&
              categorySelected.length > 0 && (
                <CategoryDescription
                  category={categorySelected.replace(/ /g, "")}
                />
              )}
          </div>
          <p className='leyenda'>
            Para facilitar el análisis de las propuestas hemos identificado 8
            temas ambientales prioritarios para el país. <div>Las propuestas de color</div>
            <div><span className='leyenda-highlited alert-green'>VERDE </span><span>Corresponden a estos temas.</span></div>
            <div><span className='leyenda-highlited no-alert'>ÁMBAR</span><span>no abordan los temas priorizados</span></div>
            <div><span className='leyenda-highlited alert-red'>ROJO </span><span>proponen disminuir estándares o permisos
            ambientales, cambios institucionales como la absorción o eliminación
            de instituciones ambientales.</span></div>
          </p>
          <div className='alerts-guide'> </div>
          <div className='categories-cards-container'>
            {/* Recibe los posts filtrados según el tema seleccionado */}
            {filteredPosts.map((post) => {
              return <Card key={post.id} post={post} />;
            })}
          </div>
        </section>
        
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Categories;

/*  useEffect(() => {
    const newArray = allTagsNameAndNumber.filter((tag) => {
      return politicalPartiesTags.includes(tag.number);
    });
    setNavBarTags(newArray);
  }, []); */
