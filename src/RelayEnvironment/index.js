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


  const fetchQuery = (operation, variables, cacheConfig, uploadables) => {

    const queryId = operation.text;
    const isMutation = operation.operationKind === 'mutation';
    const isQuery = operation.operationKind === 'query';
    const isForceFetch = cacheConfig && cacheConfig.force;
    const isFormData = !!uploadables; 
    const formData = new FormData();

    const dataFromCache = cache.get(queryId,variables);
    
    if(isQuery && dataFromCache && !isForceFetch){
        console.log("====already there===")
        return dataFromCache;
    }

    const token = isTokenPresent(); 
    const URL = token ? FETCH_AUTHORIZED_URL : FETCH_UN_AUTHORIZED_URL ;
    const headers = {};
    let body = null;

    if(token){
        headers['x-access-token'] = token;
    }

    if(isFormData){
        //headers['Content-Type'] = 'multipart/form-data';

        formData.append('query',operation.text);
        formData.append('variables', JSON.stringify(variables));
        Object.keys(uploadables).forEach((key) => {
          formData.append(key, uploadables[key])
        });

        body = formData;
    }else{
        headers['Content-Type'] = 'application/json';
        body = JSON.stringify({
            query: operation.text,
            variables,
        });
    }

    return (
    fetch(URL, {
            method: 'POST',
            headers,
            body,
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