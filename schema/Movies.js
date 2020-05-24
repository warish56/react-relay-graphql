
 const MovieTypes=`
type Gener {
    id: ID
    name: String
}

type Votes{
    likes: Int
    dislikes: Int
}


 type Movie{
     id: ID
     name: String
     poster: String
     release: String
     rating: Float
     time: String
     votes: Votes
     generIds: [String]
     gener: [Gener]
     popularity: Int
     description: String
 }

 type PageInfo{
     startCursor:String
     endCursor: String
     hasNextPage: Boolean!
     hasPreviousPage: Boolean!
 }



 type MovieEdge{
     cursor: String
     node: Movie
 }


 type MoviePage{
     totalCount: Int
     edges: [MovieEdge]!
     pageInfo: PageInfo
     
 }

 type MoviesResult{
     data(first: Int!, after: String): MoviePage
 }


`;

module.exports = MovieTypes;