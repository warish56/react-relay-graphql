import React from 'react';
import {createFragmentContainer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import './style.css';

const MoviePoster = (props) => {
    console.log("===poster props===",props)
    const {poster} = props.url;

    return (
        <div className="movie-poster">
            <img className="movie-poster-img" src={poster} alt="movie banner" />
        </div>
    )
};


export default createFragmentContainer(MoviePoster,{
    url:graphql`
    fragment MoviePoster_url on Movie{
        poster
    }`
});