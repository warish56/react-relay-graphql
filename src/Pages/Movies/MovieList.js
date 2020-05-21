import React from 'react';
import {  createPaginationContainer} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import {withRouter} from 'react-router-dom'

import MovieCard from './MovieCard'

import {updateMovieCount} from '../../Mutations/localStore'


import './style.css';


class MovieList extends React.PureComponent{

    constructor(props){
        super(props);
        this.state={
            itemsTofetch: 3,
        }
    }

    componentDidMount(){
      const {localMovieData, response} = this.props;
      if( localMovieData && localMovieData.currentMovieCount !== response.data.edges.length ){
        console.log("***************initiate load more**************")
        this.loadMore();
      }
    }

   


    onMovieClick = (movieId) => {
      this.props.history.push(`/details/${movieId}`)
    }

   
    loadMore = () => {
   if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
    console.log("==no more data==",)
    return;
  }

  const {itemsTofetch} = this.state;
  const {edges = []} = this.props.response.data

  this.props.relay.loadMore(
   itemsTofetch,  // Fetch the next  items
    error => {
      if(error){
      console.log("==errro in loading more",error);
      return;
      }
      updateMovieCount(itemsTofetch + edges.length);
    },
  );
    }

    render(){

        console.log("====Movie list==",this.props)
        const {isLoading} = this.props.relay;
        const loadingData = isLoading();
            return (
                <div className="movie-container">
                    {
                        this.props.response.data.edges.map((item,index) => {
                            return <MovieCard key={item.cursor} onClick={this.onMovieClick}  movie={item.node} />

                        })
                    }
                    {
                        loadingData ?
                        <p>Loading Please wait ....</p>
                        :
                        <button className="load-button" onClick={this.loadMore}>Load More</button>
                    }
                    

                </div>
            )
    }
}



export default createPaginationContainer(withRouter(MovieList), {
    response:graphql`

        fragment MovieList_response on MoviesResult  {

            data(
                first: $first,
                after: $after
            ) @connection(key: "Movies_data"){
        
                totalCount
                pageInfo{
                    startCursor
                    endCursor
                    hasNextPage
                    hasPreviousPage
                }

                edges {
                    node{
                    ...MovieCard_movie
                    }
                }


            } 
            
            
                
        }
    `}, {
    direction: 'forward',
    getFragmentVariables(prevVars, totalCount) {
        return {
          ...prevVars,
          count: totalCount,
        };
      },
      getVariables(props, {count, cursor}, fragmentVariables) {
        return {
          first: count,
          after: cursor
        };
      },
      query:graphql`
      query MovieListQuery($first: Int!, $after: String){
          Movies{
            ...MovieList_response 
          }
      }`
})






