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
