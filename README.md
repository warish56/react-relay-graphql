
### 1. React-Relay setup

##### 1.1  Add a schema.graphql file in the root directory

##### 1.2 Follow the installation process as stated [click here](https://relay.dev/docs/en/installation-and-setup)
 ###### Do the mannual process one

###

##### 1.3. Use `const graphql = require('babel-plugin-relay/macro');` every where because create-react-app does not support babel installed graphql, as stated [here](https://create-react-app.dev/docs/adding-relay/)

##### 1.4. Every query inside QueryRender like this
###
```javascript
                query MoviesQuery{
                    Movies{
                     ...MovieCard_movie
                    }
                }
```

##### Here `MoviesQuery` is defined like `FolderName_mutation/Query`
##### and your schema shuold contain a `type Query` (even on your server) like this ---
#
```javascript

    type Query{
        User(id: ID): User
        Company(id:ID): Company
        Movie(id: ID): Movie
        Movies:[Movie]
    }

    type schema{
        query: Query
    }
```

##### 1.5. Every fragment naming should be like `FileName_propsName` like this---
#
```javascript
  fragment MovieCard_movie on Movie{
        name
        release
        time
        poster
    }
```

###### Here `MovieCard` is the Component As well as File name and `movie` is the props key in which the component wants the data. 

##### 1.6. And dont forget to run `yarn relay` after every new `QueryRenderer` and `createFragmentContainer`


### 2. Pagination

##### 2.1. when using `createPaginationContainer`  the fragmentSpec (ie 2nd parameter for createPaginationContainer) describing the graphql query should contain a field (not a direct set of results) which should accept two parameters `first` and `after` with a `@connection` directive on it. It is because `createPaginationContainer` work like fragmentsContainer, it will only work upon fields not on starting point of query.

###### due to which here on type `Movies` we are sending back a `MoviesResult` type not 
### 

```javascript

   type MoviePage{
        totalCount: Int
        edges: [MovieEdge]!
        pageInfo: PageInfo
   }

    type MoviesResult{
        data(first: Int!, after: String): MoviePage
        
    }

    type Query{
        Movies:MoviesResult
    }
```

##### 2.2. Remeber every field on which `@connection` is attached should conatin 3 values and that are  `totalCount` , `pageInfo`,  `edges`. even on the server side.

#### as stated [here](https://relay.dev/graphql/connections.htm)


##### here the connection is attached upon field `data` of MoviesResult type.
### 

```javascript
export default createPaginationContainer(MovieList, {
    response:graphql`

        fragment MovieList_response on MoviesResult  {

            data(
                first: $first,
                after: $after
            ) @connection(key: "Movies_data"){
        
                totalCount
                pageInfo{
                    startCursor
                    endCursor
                    hasNextPage
                    hasPreviousPage
                }

                edges {
                    node{
                    ...MovieCard_movie
                    }
                }


            }   
                
        }
    `}, {
    direction: 'forward',
    getFragmentVariables(prevVars, totalCount) {
        return {
          ...prevVars,
          count: totalCount,
        };
      },
      getVariables(props, {count, cursor}, fragmentVariables) {
        return {
          count,
          cursor,
          orderBy: fragmentVariables.orderBy,
          // userID isn't specified as an @argument for the fragment, but it should be a variable available for the fragment under the query root.
          userID: fragmentVariables.userID,
        };
      },
})
```

```javascript

   type MoviePage{
        totalCount: Int
        edges: [MovieEdge]!
        pageInfo: PageInfo
   }

     type MoviesResult{
        data(first: Int!, after: String): MoviePage
        
    }
```


##### 2.3.  `pageInfo` key should contain 4 valuse and that are `startCursor`, `endCursor`, `hasNextPage`, `hasPreviousPage`. even on the server side

### 

```javascript

   
    type PageInfo{
        startCursor:String
        endCursor: String
        hasNextPage: Boolean!
        hasPreviousPage: Boolean!
    }

    type MoviePage{
        totalCount: Int
        edges: [MovieEdge]!
        pageInfo: PageInfo
    }
       
```.

##### 2.4. `edges` is the value which will conatin the list of data you want to send , but the format in which the edges will come will be like this ----

### 

```javascript

    type MovieEdge{
        cursor: String
        node: Movie
    }


    type MoviePage{
        totalCount: Int
        edges: [MovieEdge]!
        pageInfo: PageInfo
        
    }
```

##### each edge should conatin a cursor (ie the id of the respected edge node) and node . Here `node` conatins  the actual single data Object .

##### 2.5. while using load more you have to pass the updated variables in frgaments to fetch new data. For this we have to use `getVariables` function insdie the `connectionConfig` ie( 2n paramete of createPaginationContainer). getVariables 

#### 
```javascript
{
    direction: 'forward',
    getFragmentVariables(prevVars, totalCount) {
        return {
          ...prevVars,
          count: totalCount,
        };
      },
      getVariables(props, {count, cursor}, fragmentVariables) {
        console.log("===refetch====", props, count, cursor, fragmentVariables)
        return {
          first: count,
          after: cursor //  return the new cursor to fetch the data
        };
      },
      query:graphql`
      query MovieListQuery($first: Int!, $after: String){
          Movies{
            ...MovieList_response 
          }
      }`
}
```

######  paramaters of getVariables ---
######  1. props -> conatins the previously fetched data
######  2. {count, cursor} -> count conatins the amount of data to fetch, and cursor contains the  last id of the data fetchd
######  3. fragmentVariables ->  variables passed in fragments initially at starting




### 3. Local store setup

##### you can read all the details [here](https://relay.dev/docs/en/local-state-management)

##### 3.1 To create a local store , first you have to create `clientSchema.graphql` inside `src` folder. (not in root folder). like this-----

### 
```javascript

type tempMovieStore {
 currentMovieCount: Int
}

extend type Query{
    localMovieData: tempMovieStore
}

```

###### i have extended the root query to get a new field named `localMovieData`

##### 3.2 Remember in order to fetch the local data you have to fetch it with along any server query . like this-----

### 
```javascript

const QUERY = graphql`
query MoviesQuery($first: Int!, $after: String){
    Movies{
            ...MovieList_response
        }

    localMovieData{
            currentMovieCount
    }

}
`;
```
##### or you can just fetch its `__typename` like this ----->
### 
```javascript

const QUERY = graphql`
query MoviesQuery{
    Movie(id:1){
        __typename
    }
    localMovieData{
            currentMovieCount
    }
}
`;
```


##### 3.3 Remember after creating the schema you have to create a record manually from programming. like this ----

### 
```javascript
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

//  inside the QueryRenderer
  render={({error, props}) => {
                if(error){
                    console.log("===got error in fetching===",error)
                }

                if(!props){
                    return <h1>Loading....</h1>
                }

                //  =============  called  =============
                createMovieCount(initialFetchItems , this.retainTheQuery);
                return (
                    <MovieList localMovieData={props.localMovieData} response={props.Movies}/>
                )
                
            }}
```

##### 3.4 Remember  the local store which you have defined will be deleted with the QueryRenderer in which its implanted. To retain the local data you have to retain the query like this ---------


### 
```javascript
 retainTheQuery = () => {
        const {initialFetchItems} = this.state;
        const request = getRequest(QUERY);
        const operation = createOperationDescriptor(request, {first: initialFetchItems} /* variables */); 
        const disposable = environment.retain(operation);
    }

    //  inside the QueryRenderer
  render={({error, props}) => {
                if(error){
                    console.log("===got error in fetching===",error)
                }

                if(!props){
                    return <h1>Loading....</h1>
                }

                //  =============  called  =============
                createMovieCount(initialFetchItems , this.retainTheQuery);
                return (
                    <MovieList localMovieData={props.localMovieData} response={props.Movies}/>
                )
                
            }}

```


### 4. Handeling Errors

##### 4.1 whenever an error is occured during a request it will send a filed name `errors` in the resoponse. if no errors are sent then the `errors` field will be not present in the response.

##### 

```javascript
{
  "data": { ... },
  "errors": [ ... ]
}
```

##### 4.2 To handle errors in client side you should do like this  in your `environment` file -----

##### 
```javascript

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

             // errors are handled here
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

```

### 5. Handeling File upload

##### 5.1 In order to uplaod a file while using `commitMutation` , you have to pass an object name `uploadables` to the config parameter of `commitMutation` like this-----

##### 

```javascript
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
        uploadables:imageObj  //    accepting imageFile
    })

}

```


##### the imageObj should be of type { fieldName : file }
##### here fieldName is the key with which you will identify the image comeing over serve using `multer` in node.js

##### 5.2 since we are sending an image over network so we have send a `formData` instead of json. so we have to change our `fetchQuery` in `environment` file like this -------- 

###### and also now `fetchQuery` will recieve an `uploadables` object as last parameter from from `commitMutation`

```javascript
const fetchQuery = (operation, variables, cacheConfig, uploadables) => {

    const queryId = operation.text;
    const isMutation = operation.operationKind === 'mutation';
    const isQuery = operation.operationKind === 'query';
    const isForceFetch = cacheConfig && cacheConfig.force;
    const isFormData = !!uploadables;  //   checking if it conatains any file or not
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
        /*===== do not add this header while sending form Data (i know its obvious, but still cant find the reason)*/
        //headers['Content-Type'] = 'multipart/form-data'; 

        formData.append('query',operation.text);
        formData.append('variables', JSON.stringify(variables));

        //  assigning each file to formData with its respective key
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
```