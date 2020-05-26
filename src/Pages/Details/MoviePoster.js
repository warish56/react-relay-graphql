import React from 'react';
import {createFragmentContainer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import Image from '../../Components/Image'

import './style.css';
import { IMAGE_URL } from '../../config';

import {updateMoviePoster} from '../../Mutations/Movies'

class MoviePoster extends React.PureComponent{

    constructor(props){
        super(props);
        this.state={
            localImage: null
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.isEditMode !== this.props.isEditMode && prevProps.isEditMode=== true && this.props.isEditMode === false){
          this.updateData();
        }
    }


    onFileChange = (e) => {
        const {files} = e.target
      this.setState({
          localImage: files[0]
      })
    }

    updateData = () => {
        const {id} = this.props.data;

       updateMoviePoster(id,{poster:this.state.localImage});
    }

    render(){
    console.log("===poster props===",this.props)
    const {data, isEditMode} = this.props
    const {poster} = data;
    const {localImage} = this.state;

    return (
        <label htmlFor={isEditMode ? "image-poster": ''} className="movie-poster">
            <Image className="movie-poster-img" src={`${IMAGE_URL}${poster}`} alt="movie banner" />
            <input style={{display: 'none'}} id="image-poster" accept="image/*" onChange={this.onFileChange} type="file"/>
        </label>
    )
    }
};


export default createFragmentContainer(MoviePoster,{
    data:graphql`
    fragment MoviePoster_data on Movie{
        id
        poster
    }`
});