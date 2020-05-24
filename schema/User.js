const UserTypes = `



type UsersPageInfo{
    startCursor:String
    endCursor: String
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
}


type UserEdge{
    cursor: String
    node: User
}

type UserListType{
totalCount: Int
pageInfo: UsersPageInfo
edges: [UserEdge]!
}

type UsersResponse{
data(first: Int!, after: ID): UserListType
}

input UserInput {
    name: String
    email: String
    phone: String
    password: String
}
type UserResponse{
    user: User
    token : String
}


type User{
    id: ID
    name: String
    email: String
    phone: String
    password: String
}

`;

module.exports =  UserTypes;