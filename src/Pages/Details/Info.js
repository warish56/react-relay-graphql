import React from 'react';
import {createFragmentContainer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import {likeMovie, disLikeMovie} from '../../Mutations/Movies'
import Icon from '../../Components/Icon';

import {updateMovie} from '../../Mutations/Movies'

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

class Info extends React.PureComponent {

    constructor(props){
        super(props);
        const {name, release, time, description} = this.props.data;
        this.state={
            name,
            release,
            time,
            description
        }
    }
    componentDidUpdate(prevProps){
        if(prevProps.isEditMode !== this.props.isEditMode && prevProps.isEditMode=== true && this.props.isEditMode === false){
          this.updateData();
        }
    }

    onChange = (e) => {
        const {name, value} = e.target;

      this.setState({
          [name]: value
      })
    }

    updateData = () => {
        const {id} = this.props.data;
        const {name, release, time, description} = this.state;

          updateMovie({
            id,
            name,
            release,
            time,
            description
          })
    }

    render(){
        const {data, onBack, isEditMode} = this.props
        const {id,name, release, rating, time,gener, description, votes} = data;
        return (
            <div className="info-container">
                {
                  isEditMode ?
                  <input  onChange={this.onChange} name="name" className="edit-name-input" type="text" value={this.state.name} />
                  :
                    <p className="detail-movie-name">{name}</p>
                }
                

                {
                    isEditMode ?
                    <textarea onChange={this.onChange} value={this.state.description} name="name" className="edit-description-input"  rows={6} cols={33}>
                       
                    </textarea>
                    :
                    <span className="movie-description">{description}</span>
                }
               
    
                <div className="info-row">
                    {
                        isEditMode ?
                        <input  onChange={this.onChange} name="time" className="edit-small-input" type="text" value={this.state.time} />
                        :
                        <span className="movie-small-text">{time}</span>
                    }


                   {  isEditMode ?
                        <input  onChange={this.onChange} name="release" className="edit-small-input" type="text" value={this.state.release} />
                        :
                        <span className="movie-small-text">{release}</span>
                    }

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

    }
} 


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