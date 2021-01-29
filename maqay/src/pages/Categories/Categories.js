import React, { useEffect, useState } from "react";
import "./Categories.css";
import Card from "./Card/Card";
import ButtonFilterNav from "./ButtonFilterNav/ButtonFilterNav.jsx";
import getAllPosts from "../../controller/getAllPosts.js";
import getTagsByGroupName from "../../controller/getTagsByGroupName.js";
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
  /* Object with Topic's Name and Number */
  const [topicSelected, setTopicSelected] = useState([]);

  /* All posts from Wordpress within category Environmental, with a number set by WP */
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

  /* Saves in state: objects with Tags' Name and Number */
  useEffect(() => {
    getAllTagsNameAndNumber().then((res) => {
      return setAllTagsNameAndNumber(res);
    });
  }, []);

  /* Returns all tags numbers within tag group name required */
  useEffect(() => {
    getTagsByGroupName("Partidos políticos").then((tags) => {
      return setPoliticalPartiesTags(tags);
    });
  }, []);

  useEffect(() => {
    getTagsByGroupName("Tema ambiental").then((tags) => {
      return setEnvironmentalTags(tags);
    });
  }, []);

 
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

  /* Filters posts by topic selected on NavBar */
  const filterByTopic = (id, tagByTopic) => {
    setTopicSelected(tagByTopic);
    const array = allPosts.filter((post) => {
      const tags = post.tags;
      return tags.includes(parseInt(id));
    });
    return setFilteredPosts(array);
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
