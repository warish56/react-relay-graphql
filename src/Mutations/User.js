import {commitMutation} from 'react-relay'
import graphql from 'babel-plugin-relay/macro';
import environment from '../RelayEnvironment';

export const addUser = (userData) => {

   return new Promise((resolve, reject) => {

        const mutation= graphql`
        mutation User_Add_Mutation($data: UserInput){
            User(data: $data){
                token
                user{
                    id
                    name
                }
            }
        }
        `
         commitMutation(environment,{
            mutation,
            variables:{data:userData},
            onCompleted: (result) => { resolve(result.User)},
            onError: (err) => { reject(err)}
            // optimisticResponse: getOptimisticLikeResponse(movieId,prevVotes)
        })
    })
   
};