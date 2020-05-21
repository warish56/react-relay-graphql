import {
    Environment,
    Network,
    RecordSource,
    Store,
    QueryResponseCache
  } from 'relay-runtime';


  const cache = new QueryResponseCache({size: 1024, ttl: 1000 * 60 * 60})

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


    return (
    fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: operation.text,
                variables,
            })
       })
        .then((res) => res.json())
        .then((data) => {

            if(isQuery && data){
               cache.set(queryId,variables, data);
            }

            if(isMutation){
                cache.clear();
            }

            return data;

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