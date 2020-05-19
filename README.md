
#### React-Relay setup

##### 1. Add a schema.graphql file in the root directory

##### 2. Follow the installation process as stated [click here](https://relay.dev/docs/en/installation-and-setup)
 ###### Do the mannual process one

###

##### 3. Use `const graphql = require('babel-plugin-relay/macro');` every where because create-react-app does not support babel installed graphql, as stated [here](https://create-react-app.dev/docs/adding-relay/)

##### 4. Every query inside QueryRender like this
###
```javascript
                query MoviesQuery{
                    Movies{
                     ...MovieCard_movie
                    }
                }
```

##### Here `MoviesQuery` is defined like <FolderName><mutation/Query>
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

##### 5. Every fragment naming should be like <FileName><propsName> like this---
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

##### 6. And dont forget to run `yarn relay` after every new `QueryRenderer` and `createFragmentContainer`