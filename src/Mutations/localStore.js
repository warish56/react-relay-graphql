import {commitLocalUpdate} from 'react-relay'
import environment from '../RelayEnvironment';
import {getRequest, createOperationDescriptor} from 'relay-runtime'


const dataId = 'movie_current_count';

const  retainTheQuery = (query, variables) => {
    const request = getRequest(query);
    const operation = createOperationDescriptor(request, variables /* variables */); 
    const disposable = environment.retain(operation);
}


export const createMovieCount = (initialMovieCount, {query, variables}) => {
    commitLocalUpdate(environment, (store) => {
        if(store.get(dataId)){
            return;
        }

        const Root = store.getRoot()
        const newRecord = store.create(dataId, 'tempMovieStore');
        newRecord.setValue(initialMovieCount,'currentMovieCount');
        Root.setLinkedRecord(newRecord, 'localMovieData');
        retainTheQuery(query, variables);
        
    })
}



export const updateMovieCount = (newCount) => {
    commitLocalUpdate(environment, (store) => {
        const tempMovieStore = store.get(dataId);
        tempMovieStore.setValue(newCount,'currentMovieCount' );
    })
}