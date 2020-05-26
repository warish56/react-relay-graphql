const fs = require('fs');

const  MovieTypes  =  require('./Movies');
const UserTypes = require('./User');

const QueryMutationTypes = `
type Query{
    User(email: String, password: String): UserResponse
    Movie(id: ID): Movie
    Movies:MoviesResult
}

type Mutation{
    likeMovie(movieId: ID!): Movie
    disLikeMovie(movieId: ID!): Movie
    updateMovie(movieData: MovieInput):Movie
    User(data: UserInput): UserResponse


}

type schema{
    query: Query
    mutation: Mutation
}
`

const generateRootSchema = async (types =[]) => {
   let result = ``;
   types.forEach((type) => {
       result += type;
   })
   const parentDirectory = __dirname.substring(0,__dirname.length - 6);
   console.log("===dir===",parentDirectory);

    fs.writeFile(parentDirectory + '/schema.graphql', result, (err) => {
        if(err){
            console.log("====file generate err===",err);
        }

    });
}

 generateRootSchema([MovieTypes, UserTypes, QueryMutationTypes]);

