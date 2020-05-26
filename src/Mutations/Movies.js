import {commitMutation} from 'react-relay'
import graphql from 'babel-plugin-relay/macro';
import environment from '../RelayEnvironment';


const getOptimisticLikeResponse = (movieId, prevVotes) => {
    return {
        likeMovie:{
            id: movieId,
            votes:{
                likes: prevVotes.likes +1,
                disliles: prevVotes.dislikes + 1
            }
        }
    }
}

export const likeMovie = (movieId, prevVotes) => {
    const mutation= graphql`
    mutation Movies_Like_Mutation($movieId: ID!){
        likeMovie(movieId: $movieId){
            votes{
                likes
                dislikes
            }
        }
    }
    `
    return commitMutation(environment,{
        mutation,
        variables:{movieId},
        optimisticResponse: getOptimisticLikeResponse(movieId,prevVotes)
    })

};


export const disLikeMovie = (movieId, prevVotes) => {
    const mutation= graphql`
    mutation Movies_Dislike_Mutation($movieId: ID!){
        disLikeMovie(movieId: $movieId){
            votes{
                likes
                dislikes
            }
        }
    }
    `

    return commitMutation(environment,{
        mutation,
        variables:{movieId},
        optimisticResponse: getOptimisticLikeResponse(movieId,prevVotes)
    })

};

export const updateMovie = ({id, name, release, time, description, imageObj}) => {

    const mutation = graphql`
    mutation Movies_update_Mutation($movieData:MovieInput){
        updateMovie(movieData: $movieData){
            name,
            release,
            time,
            description
        }
    }
    
    `

    return commitMutation(environment, {
        mutation,
        variables:{movieData:{id, name, release, time, description} },
        uploadables:imageObj
    })

}

export const updateMoviePoster = (id,imageObj) => {

    const mutation = graphql`
    mutation Movies_poster_update_Mutation($movieData:MovieInput){
        updateMovie(movieData: $movieData){
              poster
        }
    }
    
    `

    return commitMutation(environment, {
        mutation,
        variables:{movieData:{id} },
        uploadables:imageObj
    })

}

