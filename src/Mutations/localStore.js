import {commitLocalUpdate} from 'react-relay'
import environment from '../RelayEnvironment';


const dataId = 'movie_current_count';

export const createMovieCount = (initialMovieCount, retainQuery) => {
    commitLocalUpdate(environment, (store) => {
        if(store.get(dataId)){
            return;
        }

        console.log("==create called===")
        const Root = store.getRoot()
        const newRecord = store.create(dataId, 'tempMovieStore');
        newRecord.setValue(initialMovieCount,'currentMovieCount');
        Root.setLinkedRecord(newRecord, 'localMovieData');
        retainQuery();
        
    })
}

export const updateMovieCount = (newCount) => {
    commitLocalUpdate(environment, (store) => {
        console.log("==update called===")
        const tempMovieStore = store.get(dataId);
        tempMovieStore.setValue(newCount,'currentMovieCount' );
    })
}