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
            fallbackData: [{id:1},{id:2},{id:3}],
            isLoading: false
        }
    }

    componentDidMount(){
      const {localMovieData, response} = this.props;
      if( localMovieData && localMovieData.currentMovieCount !== response.data.edges.length ){
        this.loadMore();
      }
    }

    toggleLoading = (status) => {
      this.setState({
        isLoading: status
      })
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
  const {edges = []} = this.props.response.data;

  this.toggleLoading(true);
  this.props.relay.loadMore(
   itemsTofetch,  // Fetch the next  items
    error => {
      if(error){
      console.log("==errro in loading more",error);
      return;
      }
      this.toggleLoading(false);
      updateMovieCount(itemsTofetch + edges.length);
    },
  );
    }

    render(){

        console.log("====Movie list==",this.props)
        const {isLoading, fallbackData} = this.state;
        const {response} = this.props;
            return (
                <div className="movie-container">
                    {
                        response ?
                        response.data.edges.map((item) => {
                            return <MovieCard  key={item.cursor} onClick={this.onMovieClick}  movie={item.node} />

                        })
                        :
                        null                        
                    }
                    {
                      isLoading &&
                      fallbackData.map((item,index) => {
                        return <MovieCard isLoading={true} key={item.id}  />

                    })
                    }

                    <button className="load-button" onClick={this.loadMore}>Load More</button>
                    
                    

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






