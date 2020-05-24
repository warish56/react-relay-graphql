import React from 'react';
import { createFragmentContainer} from 'react-relay'
import graphql from 'babel-plugin-relay/macro';

import Image from '../../Components/Image';

import './style.css';
import { IMAGE_URL } from '../../config';

const MovieCard = ({ movie, onClick, isLoading = false}) => {
  
    const {id, name, poster, rating,} = movie || {};    
    return (
        <div
        className="movie-card"
        >
        <button
        onClick={!isLoading ?  () => onClick(id): null}
        className={isLoading ? 'movie-card-loading' : 'movie-card-content'}
        >
            {
                !isLoading &&
        
            <>
                <div className="movie-card-image-box">
                    <Image className="movie-card-image" src={`${IMAGE_URL}${poster}`} alt={name}/>
                </div>
                <div className="movie-card-info">
                    <span className="movie-name">{name}</span>  
                </div>

                <div className="rating-box">
                    <span className="movie-rating"><span className="movie-rating-top">{rating}/</span>10</span>
                </div>
            </>

            }
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