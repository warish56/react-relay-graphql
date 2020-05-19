import React from 'react';
import {createFragmentContainer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import Icon from '../../Components/Icon';

import './style.css';


const Gener = ({text}) => {
    return (
        <div className="gener">
            <span className="gener-text">{text}</span>
        </div>
    )

}

const Info = ({data, onBack}) => {
    const {name, release, rating, time,gener, description} = data;
    return (
        <div className="info-container">
            <p className="detail-movie-name">{name}</p>
            <span className="movie-description">{description}</span>

            <div className="info-row">
              <span className="movie-small-text">{time}</span>
              <span className="movie-small-text">{release}</span>
            </div>

            <div className="info-row">
                {
                    gener.map((item) => <Gener text={item.name}/> )
                }
                
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
        name
        release
        rating
        time
        gener{
            name
        }
        description
    }`
});