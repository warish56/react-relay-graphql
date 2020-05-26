import React from 'react';
import {QueryRenderer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../RelayEnvironment'

import MoviePoster from './MoviePoster';
import Info from './Info';

import Icon from '../../Components/Icon';


import './style.css';

class Detail extends React.Component{

    constructor(props){
        super(props);
        this.state={
           isUnmounted: false,
           isEditMode: false
        }
    }


    toggleEditMode = ()=>{
    this.setState((prevState) => ({
       isEditMode: !prevState.isEditMode
    }))
    }

    goBack = () => {
        setTimeout(() => {
            this.setState({
                isUnmounted: true
            })
        },250)
       
        setTimeout(() => {
            this.props.history.goBack();
        }, 400)
    }


    render(){
        const {isUnmounted, isEditMode} = this.state;
        return(

            <QueryRenderer 
            environment={environment}
            query={graphql`

              query DetailsQuery($id: ID){
                 Movie(id: $id){
                     ...MoviePoster_data
                     ...Info_data
                 }
              }
            
            
            `}
            variables={{id: this.props.match.params.id}}
            render={({props,error}) => {
                if(error){
                    console.log("===got error in fetching===",error)
                }

                if(!props){
                    return <h1>Loading....</h1>
                }

                console.log("==props===", props)

                return (
                    <div className={`detail-container ${isUnmounted? 'move-down': ''}`}>
                        <MoviePoster isEditMode={isEditMode} data={props.Movie}/>
                        <Info isEditMode={isEditMode} onBack={this.goBack} data={props.Movie} />

                        
                           <button onClick={this.toggleEditMode} className="eidt-button">
                             <Icon name={ isEditMode ? 'save': "edit"}/>
                           </button>
                        
                    </div>
                )

            }}
            
            />

        )
    }
};

export default Detail;