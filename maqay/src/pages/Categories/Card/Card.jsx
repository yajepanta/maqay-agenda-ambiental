import React from 'react';
import './Card.css';



const Card = ({post}) => {

    

    return (
        /* container proposals es ahora container-card */
        <div className="container-proposal">
            {/* content sera container header */}
            <div  className="content">
                <span className="container-proposal-title">{post.title.rendered}</span>
                
                <div className="container-proposal-content">{`${post.content.rendered}`}</div>
        
                <div className="container-proposal-footer">  
                    <span className="text-small">Propuestas de: {post.politicalParties} </span>
                    {/* <!-- <img className="partie-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Logo_juntos_por_el_Peru.svg/150px-Logo_juntos_por_el_Peru.svg.png" alt=""> --> */}

                    {/* <a className="resp-sharing-button__link" href="https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsharingbuttons.io" target="_blank" rel="noopener" aria-label="">
                    <div className="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small">
                        <div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solid">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                    </div>
                    </div>
                    </a> */}
                </div> 
            </div>
        </div>
    );
};

export default Card;