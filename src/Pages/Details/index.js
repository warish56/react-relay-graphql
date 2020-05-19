import React from 'react';
import {QueryRenderer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../RelayEnvironment'

import MoviePoster from './MoviePoster';
import Info from './Info';

import './style.css';

class Detail extends React.Component{

    constructor(props){
        super(props);
        this.state={
           isUnmounted: false
        }
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
        const {isUnmounted} = this.state;
        return(

            <QueryRenderer 
            environment={environment}
            query={graphql`

              query DetailsQuery($id: ID){
                 Movie(id: $id){
                     ...MoviePoster_url
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
                        <MoviePoster url={props.Movie}/>
                        <Info onBack={this.goBack} data={props.Movie} />
                    </div>
                )

            }}
            
            />

        )
    }
};

export default Detail;