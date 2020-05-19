import {
    Environment,
    Network,
    RecordSource,
    Store,
  } from 'relay-runtime';

  const fetchQuery = (operation, variables) => {

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
    )
  };

  const environment = new Environment({
      store: new Store(new RecordSource()),
      network: Network.create(fetchQuery)
  });

  export default environment;