import React, { useEffect, useState} from 'react';
import './Categories.css';
import Card from './Card/Card';
import Nav from './Nav/Nav.js';
import getAllPosts from '../../controller/getAllPosts.js';
import getTagsByGroupName from '../../controller/getTagsByGroupName.js';
import filteredPostsByTagNumber from '../../utils/filter.js';
import getTagName from '../../controller/getTagName.js';

const Categories = () => {
    const [allPosts, setAllPosts ] = useState([]);
   /*  const [tagsSelected, setTagsSelected ] = useState([]); */
    const [ arrayOfTagsNumbers, setArrayOfTags ] = useState([]);
    const [ arrayOfTagsNumbersInNav, setArrayOfTagsNumbersInNav] = useState([]);

    useEffect(()=> {
        /* Number set by Wordpress */
        const categoryEnvironmental = 23;
        getAllPosts()
        .then(res => res.filter(posts=>posts.categories[0]===categoryEnvironmental))
        .then(res=>{return setAllPosts(res)});
    }, []);

    /* Returns ALL tags numbers within group tag "Partidos políticos" */
    useEffect(() => {
        getTagsByGroupName('Partidos políticos').then(tags => {return setArrayOfTags(tags) });
    }, []);
    
    useEffect(() => {
        getTagsByGroupName('Tema ambiental').then(tags => {return setArrayOfTagsNumbersInNav(tags) });
    }, []);

    console.log("arrayTag Partidos politicos: ", arrayOfTagsNumbers);
    console.log("arrayTag Tema ambiental: ", arrayOfTagsNumbersInNav);
/* debemos encontrar los nros similares en cada array y retornarlos, para sacar su nombre 
arrayOfTagsNumbers.includes(post.tags);*/

/* Create property "politicalParties" with only tag number of politicalparties*/
/* Debe ser llamada con ALGO
podría entrar dentro de la llamada a todos los Posts al pintar */
    const tagName = () => {
        /* post.tags es el array de tags de cada post */
       return allPosts.map((post) => { 
           const tags = post.tags;
           const array = arrayOfTagsNumbers.filter(tagNumber => {
               return tags.includes(tagNumber)
           })
           return  post.politicalParties = array;
        });
    };
    console.log("tagName: ", tagName());
    return (
        <div>
            <header>
                <span>Cambio climático</span>
            </header>
            {/* main debe ser flex: cardscontainer + nav */}
            <main>
                {/* cards-container incluye cada carta */}
                <section className="view-categories">
                    <p>Un cambio climático se define1​2​ como la variación en el estado del sistema climático terrestre, formado por la atmósfera, la hidrosfera, la criosfera, la litosfera y la biosfera, que perdura durante periodos de tiempo suficientemente largos (décadas o más tiempo2​) hasta alcanzar un nuevo equilibrio. Puede afectar tanto a los valores medios meteorológicos como a su variabilidad y extremos.</p>
                    <div className="cards-container">
                        {/* Se le deberian pasar los posts ya filtrados segun el tema seleccionado */}
                        {
                            allPosts.map(post => {
                                    return <Card 
                                                key={post.id}
                                                post={post}/>
                                }
                            )
                        }
                    </div>
                </section>
                {/* nav recibe nombres de todas las categorías */}
                <Nav 
                allNameTagsByTopic = {arrayOfTagsNumbersInNav}
                />
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