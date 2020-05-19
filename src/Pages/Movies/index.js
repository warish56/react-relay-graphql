import React from 'react';
import { QueryRenderer} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

import MovieCard from './MovieCard'

import environment from '../../RelayEnvironment'

import './style.css';

class Movies extends React.Component{

    constructor(props){
        super(props);
        this.state={}
    }

    onMovieClick = (movieId) => {
      this.props.history.push(`/details/${movieId}`)
    }

    render(){
        return(

            <QueryRenderer 
            environment={environment}
            query={graphql`
                query MoviesQuery{

                    Movies{
                     ...MovieCard_movie
                    }
                }
                 
            `}
            variables={{}}
            render={({error, props}) => {
                if(error){
                    console.log("===got error in fetching===",error)
                }

                if(!props){
                    return <h1>Loading....</h1>
                }

                console.log("====props in conatiner===",props)
                return (
                    <div className="movie-container">
                        {
                            props.Movies.map((movie,index) => {
                                return <MovieCard key={index} onClick={this.onMovieClick}  movie={movie} />

                            })
                        }
                    </div>
                )
            }}
            
            />
        )
    }
}

export default Movies;