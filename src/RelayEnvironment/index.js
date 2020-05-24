import {
    Environment,
    Network,
    RecordSource,
    Store,
    QueryResponseCache
  } from 'relay-runtime';

  import {isTokenPresent} from '../helpers'


  const cache = new QueryResponseCache({size: 1024, ttl: 1000 * 60 * 60});

  const FETCH_AUTHORIZED_URL = '/graphql/authorized' ;
  const FETCH_UN_AUTHORIZED_URL = '/graphql/un_authorized';


  const fetchQuery = (operation, variables, cacheConfig) => {

    const queryId = operation.text;
    const isMutation = operation.operationKind === 'mutation';
    const isQuery = operation.operationKind === 'query';
    const isForceFetch = cacheConfig && cacheConfig.force;

    const dataFromCache = cache.get(queryId,variables);
    
    if(isQuery && dataFromCache && !isForceFetch){
        console.log("====already there===")
        return dataFromCache;
    }

    const token = isTokenPresent(); 
    const URL = token ? FETCH_AUTHORIZED_URL : FETCH_UN_AUTHORIZED_URL ;
    const headers = {
        'Content-Type': 'application/json',
    };

    if(token){
        headers['x-access-token'] = token;
    }

    return (
    fetch(URL, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                query: operation.text,
                variables,
            })
       })
        .then((res) => res.json())
        .then((response) => {

            if(response.errors){
                throw response.errors;
            }

            if(isQuery && response){
               cache.set(queryId,variables, response);
            }

            if(isMutation){
                cache.clear();
            }

            return response;

        })
    )
  };

  export const store = new Store(new RecordSource());
  const network = Network.create(fetchQuery);

  console.log("===store====", store)
  const environment = new Environment({
      store,
      network,
  });

  export default environment;