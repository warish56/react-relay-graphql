import React from 'react';
import {createFragmentContainer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import Image from '../../Components/Image'

import './style.css';
import { IMAGE_URL } from '../../config';

const MoviePoster = (props) => {
    console.log("===poster props===",props)
    const {poster} = props.url;

    return (
        <div className="movie-poster">
            <Image className="movie-poster-img" src={`${IMAGE_URL}${poster}`} alt="movie banner" />
        </div>
    )
};


export default createFragmentContainer(MoviePoster,{
    url:graphql`
    fragment MoviePoster_url on Movie{
        poster
    }`
});