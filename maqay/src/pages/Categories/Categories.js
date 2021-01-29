import React, { useEffect, useState } from "react";
import "./Categories.css";
import Card from "./Card/Card";
/* should be btnFilterMenu */
import ButtonFilterNav from "./ButtonFilterNav/ButtonFilterNav";
import getAllPosts from "../../controller/getAllPosts.js";
import getTagsByGroupName from "../../controller/getTagsByGroupName.js";
import filteredPostsByTagNumber from "../../utils/filter.js";
import getTagName from "../../controller/getTagName.js";
import getAllTagsNameAndNumber from "../../controller/getAllTagsNameAndNumber.js";

const Categories = () => {
  const [allPosts, setAllPosts] = useState([]);

  /* Acá accederemos para conseguir datos de tags */
  const [allTagsNameAndNumber, setAllTagsNameAndNumber] = useState([]);

  const [politicalPartiesTags, setPoliticalPartiesTags] = useState([]);
  const [environmentalTags, setEnvironmentalTags] = useState([]);
  const [navBarTags, setNavBarTags] = useState([]);

  /* posts to render: posts ya filtrados */
  const [filteredPosts, setFilteredPosts] = useState([]);
  /* array de objeto con nr y name elegido */
  const [topicSelected, setTopicSelected] = useState([]);
  /* array con los numeros de etiqueta filtrados */
  const [tagsNumbersByGroupName, setTagsNumbersByGroupName] = useState([]);

  /* array con los numeros de etiqueta por categoria
  arrayOfTagNumbersByCategory */
  const [arrayOfTagsNumbersInNav, setArrayOfTagsNumbersInNav] = useState([]);

  /* array con los nombres de las etiquetas nameTagFromNumber */
  /*  const [nameTags, setNameTags] = useState([]); */

  /* We bring all posts from Wordpress within category Environmental, with a number set by WP */

  useEffect(() => {
    const categoryAmbiental = 23;
    getAllPosts()
      .then((res) =>
        res.filter((posts) => posts.categories[0] === categoryAmbiental)
      )
      .then((res) => {
        setFilteredPosts(res);
        return setAllPosts(res);
      });
  }, []);

  /* Saves in array: objects with Name and Number from Tags */
  useEffect(() => {
    getAllTagsNameAndNumber().then((res) => {
      return setAllTagsNameAndNumber(res);
    });
  }, []);

  /* Returns all tags numbers within tag group name required */
  useEffect(() => {
    getTagsByGroupName("Partidos políticos").then((tags) => {
      /* araryOfTagNumbers */
      return setPoliticalPartiesTags(tags);
    });
  }, []);

  useEffect(() => {
    getTagsByGroupName("Tema ambiental").then((tags) => {
      /* return setArrayOfTagsNumbersInNav(tags); */
      return setEnvironmentalTags(tags);
    });
  }, []);

  /* Si categoria seleccionada es Tema ambiental, debe hacer la busqueda de tema para NAV */
  /* NAVIGATION BAR Functions 
  DEBE CONVERTIRSE FX PURA CON ARGUMENTO ENVIRONMENTAL O POLITICAL Y VARIAR SEGUN CATEGORY SELECTED*/
  useEffect(() => {
    const newArray = allTagsNameAndNumber.filter((tag) => {
      return environmentalTags.includes(tag.number);
    });
    setNavBarTags(newArray);
  }, [allTagsNameAndNumber, environmentalTags]);

  /*  useEffect(() => {
    const newArray = allTagsNameAndNumber.filter((tag) => {
      return politicalPartiesTags.includes(tag.number);
    });
    setNavBarTags(newArray);
  }, []); */

  /* Create property "politicalParties" with only tag number of politicalparties*/
  /* Debe ser llamada con ALGO
podría entrar dentro de la llamada a todos los Posts al pintar */

  const tagName = () => {
    // post.tags es el array de tags de cada post
    return allPosts.map((post) => {
      const tags = post.tags;
      const array = tagsNumbersByGroupName.filter((tagNumber) => {
        return tags.includes(tagNumber);
      });
      console.log(array, "politicalparties");
      return (post.politicalParties = array);
    });
  };
  console.log("tagName: ", tagName());

  const filterByTopic = (target, nameTagByTopic) => {
    setTopicSelected(nameTagByTopic);
    const arr = allPosts.filter((post) => {
      const tag = post.tags;
      return tag.includes(parseInt(target.id));
    });
    return setFilteredPosts(arr);
  };

  return (
    <div>
      <header>
        <span>{topicSelected.name}</span>
      </header>
      {/* main debe ser grilla: cardscontainer + nav */}
      <main>
        <section className="view-categories">
          <span>HEMOS IDENTIFICADO {filteredPosts.length} PROPUESTAS</span>
          <p>
            Un cambio climático se define como la variación en el estado del
            sistema climático terrestre, formado por la atmósfera, la
            hidrosfera, la criosfera, la litosfera y la biosfera, que perdura
            durante periodos de tiempo suficientemente largos (décadas o más
            tiempo hasta alcanzar un nuevo equilibrio.
          </p>

          <div className="cards-container">
            {/* Recibe los posts filtrados según el tema seleccionado */}
            {filteredPosts.map((post) => {
              return <Card key={post.id} post={post} />;
            })}
          </div>
        </section>

        <nav>
          <span> Regresar</span>
          <span>Cambiar de tema ambiental</span>

          {navBarTags.map((tag) => {
            return (
              <ButtonFilterNav
                key={tag.name}
                tagByTopic={tag}
                filterByTopic={filterByTopic}
              />
            );
          })}
        </nav>
      </main>
    </div>
  );
};

export default Categories;

/* Get Posts within Environmental Category (ID: 23) */

/* const postsTagsParties = () => {
        const tags = tagsByGroupName("Partidos políticos");
        const tagsPoliticalParties = posts.filter(post => tags.includes(post.tags));
    } */
