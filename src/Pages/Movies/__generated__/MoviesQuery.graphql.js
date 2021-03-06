/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MovieList_response$ref = any;
export type MoviesQueryVariables = {|
  first: number,
  after?: ?string,
|};
export type MoviesQueryResponse = {|
  +Movies: ?{|
    +$fragmentRefs: MovieList_response$ref
  |},
  +localMovieData: ?{|
    +currentMovieCount: ?number
  |},
|};
export type MoviesQuery = {|
  variables: MoviesQueryVariables,
  response: MoviesQueryResponse,
|};
*/


/*
query MoviesQuery(
  $first: Int!
  $after: String
) {
  Movies {
    ...MovieList_response
  }
}

fragment MovieCard_movie on Movie {
  id
  name
  poster
  rating
}

fragment MovieList_response on MoviesResult {
  data(first: $first, after: $after) {
    totalCount
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    edges {
      node {
        ...MovieCard_movie
        id
        __typename
      }
      cursor
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after",
    "type": "String"
  }
],
v1 = {
  "kind": "ClientExtension",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "tempMovieStore",
      "kind": "LinkedField",
      "name": "localMovieData",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "currentMovieCount",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ]
},
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MoviesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "MoviesResult",
        "kind": "LinkedField",
        "name": "Movies",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MovieList_response"
          }
        ],
        "storageKey": null
      },
      (v1/*: any*/)
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MoviesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "MoviesResult",
        "kind": "LinkedField",
        "name": "Movies",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "MoviePage",
            "kind": "LinkedField",
            "name": "data",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "totalCount",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "startCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasPreviousPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "MovieEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Movie",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "id",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "poster",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "rating",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v2/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "Movies_data",
            "kind": "LinkedHandle",
            "name": "data"
          }
        ],
        "storageKey": null
      },
      (v1/*: any*/)
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "MoviesQuery",
    "operationKind": "query",
    "text": "query MoviesQuery(\n  $first: Int!\n  $after: String\n) {\n  Movies {\n    ...MovieList_response\n  }\n}\n\nfragment MovieCard_movie on Movie {\n  id\n  name\n  poster\n  rating\n}\n\nfragment MovieList_response on MoviesResult {\n  data(first: $first, after: $after) {\n    totalCount\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n    edges {\n      node {\n        ...MovieCard_movie\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '48ae53d43f37785d207fbaee7383231e';

module.exports = node;
