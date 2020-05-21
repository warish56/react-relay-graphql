import React from 'react';
import {createFragmentContainer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import {likeMovie, disLikeMovie} from '../../Mutations/Movies'
import Icon from '../../Components/Icon';

import './style.css';


const Gener = ({text}) => {
    return (
        <div className="gener">
            <span className="gener-text">{text}</span>
        </div>
    )

}

const RatingBox = ({isLike=true, onLike, onDislike}) => {
    return (
        <button onClick={isLike? onLike : onDislike} className="rating-button">
           <Icon name={`${isLike? 'thumbs-up': 'thumbs-down'}`}/> 
        </button>
    )

}

const Info = ({data, onBack}) => {
    const {id,name, release, rating, time,gener, description, votes} = data;
    return (
        <div className="info-container">
            <p className="detail-movie-name">{name}</p>
            <span className="movie-description">{description}</span>

            <div className="info-row">
              <span className="movie-small-text">{time}</span>
              <span className="movie-small-text">{release}</span>
            </div>


            <div className="info-row">
                <RatingBox  isLike={true} onLike={() => likeMovie(id, votes) }/> 
                <RatingBox  isLike={false} onDislike={() => disLikeMovie(id,votes)}/> 
            </div>

            

            <div className="info-row">
                {
                    gener.map((item) => <Gener text={item.name}/> )
                }   
            </div>


            <div className="info-row">
              <span className="movie-small-text">{votes.likes}</span>
              <span className="movie-small-text">{votes.dislikes}</span>
            </div>
            

            <button onClick={onBack} className="backBox">
                <Icon name="arrow-left"/>
            </button>
        </div>
    )
};


export default createFragmentContainer(Info,{
    data:graphql`
    fragment Info_data on Movie{
        id
        name
        release
        rating
        time
        votes{
            likes
            dislikes
        }
        gener{
            name
        }
        description
    }`
});