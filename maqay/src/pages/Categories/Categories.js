import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./Categories.css";
import Card from "./Card/Card";
import Footer from "../commons/Footer/Footer";
import ButtonFilterNav from "./ButtonFilterNav/ButtonFilterNav.jsx";
import { getTagsByGroupName } from "../../controller/postController";
import MetaDecorator from "./MetaDecorator/MetaDecorator";
import allPosts from "../../utils/data/allPosts2.js";
import allTagsNameAndNumber from "../../utils/data/allTagsNameAndNumber.js";
import tagsByGroupName from "../../utils/data/tagsByGroupName.js";
import CategoryDescription from "./CategoryDescription/CategoryDescription.js";
import arrowDown from '../../assets/img/arrow-down.svg'
import searchIcon from '../../assets/img/searchIcon2.svg'
//import {SimpleSlider} from './slider'
//import { getAllPosts } from '../../controller/postController'

const Categories = () => {
  /* posts to render */
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [politicalPartiesTags, setPoliticalPartiesTags] = useState([]);
  const [navBarTags, setNavBarTags] = useState([]);
  /* set category debe ir dentro de la fx que saca las cosas del windowlocation */
  const [mainCategory, setMainCategory] = useState([]);
  const [categorySelected, setCategorySelected] = useState([]);
  const [categorySelectedTags, setCategorySelectedTags] = useState([]);
  const [navShow, setNavShow] = useState(0);
  const [searchField, setSearchField] = useState('');

  //getAllPosts().then(json=> console.table(json));

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



    const filteredArray = allPosts.filter((post)=>{
        return post.excerpt.rendered.includes(searchField);
    })


    const redArray = (posts) => posts.filter((post)=>{
      return post.tags.includes(39);
    })

    const yellowArray = (posts) => posts.filter((post)=>{
      return post.tags.includes(41);
    })

    const greenArray = (posts) => posts.filter((post)=>{
      return post.tags.includes(40);
    })


  const location = useLocation();
  const currentUrl =
    "https://maqay.netlify.app" + location.pathname.replace(/ /g, "-");

  const navClick = () =>{
    if(navShow===0){
      setNavShow(1);
    } else {
      setNavShow(0)
    }
    return navShow;
  }

  const More = () =>{
    if(categorySelected==='cambio climático'||categorySelected==='conservación de ecosistemas'||categorySelected==='deforestación'
    ||categorySelected==='educación ambiental'||categorySelected==='gestión del agua'||categorySelected==='gobernanza ambiental'
    ||categorySelected==='pueblos indígenas'||categorySelected==='residuos sólidos y economía circular'){
      return <span><span className='hiddenMore'>Tema</span><span className='more'>Cambiar de tema ambiental</span></span>
    } else {
      return <span><span className='hiddenMore'>Partido</span><span className='more'>Cambiar de partido político</span></span>
    }
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
      {searchField.length>0 ? <span>Resultados para "{searchField}"</span> : <span>{categorySelected}</span>}
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
            ><i className='fas fa-chevron-left'></i><span>REGRESAR</span>
            </button>
            <div className='nav-right-container'>
                <img alt="searchIcon" src={searchIcon} className={searchField.length>0 ? 'searchIconHidden' : 'searchIcon'}/>
                <input
                  type="search"
                  placeholder="       Buscar propuesta"
                  value={searchField} onChange={(e)=>setSearchField(e.target.value)} 
                />
              <button className='btn-list' onClick={()=>navClick()}><More/><img src={arrowDown} className='arrow-down' alt='arrowDown'/></button>
            </div>
          </div>
          <div className={navShow===1 ? 'list-nav':'list-nav-hidden'}>
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
            <span className='highlighted'>{searchField.length>0 ? filteredArray.length : filteredPosts.length}</span>{" "}
            PROPUESTAS
          </span>
           {/* <div className='sliderContainer'>
           {mainCategory === "Tema ambiental" &&
              categorySelected.length > 0 && (
                <SimpleSlider
                  category={categorySelected.replace(/ /g, "")}
                />
              )}
          </div> */}
         
         {searchField.length>0 ? '' : <div className='main-text'>
            {mainCategory === "Tema ambiental" &&
              categorySelected.length > 0 && (
                <CategoryDescription
                  category={categorySelected.replace(/ /g, "")}
                />
              )}
          </div>}
          <div className='leyenda'>
            <div className='flexLeyenda'><div className='leyenda-highlited alert-green'><span>{searchField.length>0 ? greenArray(filteredArray).length: greenArray(filteredPosts).length}</span></div><span className='leyenda-text'>Propuestas alineadas con los 8 temas ambientales priorizados para el país</span></div>
            <div className='flexLeyenda'><div className='leyenda-highlited no-alert'><span>{searchField.length>0 ? yellowArray(filteredArray).length: yellowArray(filteredPosts).length}</span></div><span className='leyenda-text'>Propuestas que no abordan los temas priorizados</span></div>
            <div className='flexLeyenda'><div className='leyenda-highlited alert-red'><span>{searchField.length>0 ? redArray(filteredArray).length: redArray(filteredPosts).length}</span></div><span className='leyenda-text'>Propuestas que buscan disminuir estándares ambientales, eliminar instituciones 
              ambientales o derechos.</span></div>
          </div>
          <div className='alerts-guide'> </div>
          {searchField.length>0 ? <div className='categories-cards-container'>
            {filteredArray.map((post) => {
              return <Card key={post.id} post={post} tagNameHandler={tagName()}/>;
            })}
          </div> :
          <div className='categories-cards-container'>
            {/* Recibe los posts filtrados según el tema seleccionado */}
            {filteredPosts.map((post) => {
              return <Card key={post.id} post={post} tagNameHandler={tagName()}/>;
            })}
          </div>
          }
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
