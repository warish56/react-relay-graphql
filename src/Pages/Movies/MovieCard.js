import React from 'react';
import { createFragmentContainer} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

import './style.css';

const MovieCard = ({ movie, onClick}) => {
    const {id, name, poster, rating,} = movie;
    
    return (
        <div
        className="movie-card"
        >
        <button
        onClick={() => onClick(id)}
        style={{
            backgroundImage: `url(${poster})`,
            backgroundRepeat: 'no-repeat',
            // background: `linear-gradient(133deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%), url(${poster})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center'
        }} 
        className="movie-card-content"
        >
            <div className="movie-card-info">
              <span className="movie-name">{name}</span>  
            </div>

             <div className="rating-box">
                <span className="movie-rating"><span className="movie-rating-top">{rating}/</span>10</span>
             </div>
        </button>
        </div>
    )
};

export default createFragmentContainer(MovieCard, {
    movie:graphql`
    fragment MovieCard_movie on Movie{
        id
        name
        poster
        rating
    }
    `
})