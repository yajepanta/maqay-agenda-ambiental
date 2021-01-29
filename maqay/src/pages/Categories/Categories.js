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
  const [posts, setPosts] = useState([]);
  /* array de objeto con nr y name elegido */
  const [tagSelected, setTagSelected] = useState([]);
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
        setPosts(res);
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
  /* NAVIGATION BAR Functions */
  useEffect(() => {
    const newArray = allTagsNameAndNumber.filter((tag) => {
      return environmentalTags.includes(tag.number);
    });
    setNavBarTags(newArray);
  }, [allTagsNameAndNumber, environmentalTags]);


  /* useEffect(() => {
    arrayOfTagsNumbersInNav.map((nameTag) => {
      return getTagName(nameTag).then((name) => {
        return setNameTags((prevState) => [
          ...prevState,
          { name: name, number: nameTag },
        ]);
      });
    });
  }, [arrayOfTagsNumbersInNav]); */
  /* console.log("arrayTag Partidos politicos: ", tagsNumbersByGroupName);
  console.log("arrayTag Tema ambiental: ", arrayOfTagsNumbersInNav);
  console.log("nameTags", nameTags); */
  /* debemos encontrar los nros similares en cada array y retornarlos, para sacar su nombre 
tagsNumbersByGroupName.includes(post.tags);*/

  /* Create property "politicalParties" with only tag number of politicalparties*/
  /* Debe ser llamada con ALGO
podría entrar dentro de la llamada a todos los Posts al pintar */

  /* const tagName = () => {
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
  console.log("tagName: ", tagName()); */

  const filterByTopic = (target, nameTagByTopic) => {
    setTagSelected(nameTagByTopic);
    const arr = allPosts.filter((post) => {
      const tag = post.tags;
      return tag.includes(parseInt(target.id));
    });
    console.log(arr);
    return setPosts(arr);
  };

  return (
    <div>
      <header>
        <span>{tagSelected.name}</span>
      </header>
      {/* main debe ser grilla: cardscontainer + nav */}
      <main>
        {/* cards-container incluye cada carta */}
        <section className="view-categories">
            <span>HEMOS IDENTIFICADO {posts.length} PROPUESTAS</span>
          <p>
            Un cambio climático se define como la variación en el estado del
            sistema climático terrestre, formado por la atmósfera, la
            hidrosfera, la criosfera, la litosfera y la biosfera, que perdura
            durante periodos de tiempo suficientemente largos (décadas o más
            tiempo hasta alcanzar un nuevo equilibrio. Puede afectar tanto a los
            valores medios meteorológicos como a su variabilidad y extremos.
          </p>
          
          <div className="cards-container">
            {/* Se le deberian pasar los posts ya filtrados segun el tema seleccionado */}
            {posts.map((post) => {
              return <Card key={post.id} post={post} />;
            })}
          </div>
        </section>
        {/* nav recibe nombres de todas las categorías */}

        <nav>
          <span> Regresar</span>
          <span>Cambiar de tema ambiental</span>
          {/* nameTagByTopic es un objeto con key ID(number, hay q cambiar a id) y Name 
            tag es bojeto con number y name*/}
          {navBarTags.map((tag) => {
            return (
              <ButtonFilterNav
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
