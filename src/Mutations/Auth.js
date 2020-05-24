import {commitMutation} from 'react-relay'
import {fetchQuery} from 'relay-runtime';
import graphql from 'babel-plugin-relay/macro';
import environment from '../RelayEnvironment';

export const logInUser = (email, password) => {

    const query= graphql`
    query Auth_Query($email: String, $password: String){
        User(email: $email, password: $password){
            token
            user{
                id
                name
            }
        }
    }
    `
    const variables = {email, password};

    return fetchQuery(environment, query, variables)
    .then(result => {
        return result.User;
    })
};