import React from 'react';
import { QueryRenderer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro'

import MovieList from './MovieList';

import environment from '../../RelayEnvironment'

import {createMovieCount} from '../../Mutations/localStore'

import './style.css';


const QUERY = graphql`
query MoviesQuery($first: Int!, $after: String){
    Movies{
            ...MovieList_response
        }

    localMovieData{
            currentMovieCount
    }

}
`;


// environment.getStore().__disableGC();
class Movies extends React.Component{

    constructor(props){
        super(props);
        this.state={
          initialFetchItems: 3
        }
        
    }


    componentDidMount(){
        const {initialFetchItems} = this.state;
        createMovieCount(initialFetchItems , {query: QUERY, variables:{first: initialFetchItems}}); 
    }
   



    render(){
        const {initialFetchItems} = this.state;
        return(

            <QueryRenderer 
            environment={environment}
            query={QUERY}
            variables={{first: initialFetchItems}}
            render={({error, props={}}) => {
                if(error){
                    console.log("===got error in fetching===",error)
                }

                if(!props){
                    return <h1>Loading....</h1>
                }

                console.log("====props in conatiner===",props)
                return (
                    <MovieList localMovieData={props.localMovieData} response={props.Movies }/>
                )
                
            }}
            
            />
        )
    }
}

export default Movies;

