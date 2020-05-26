/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Info_data$ref = any;
type MoviePoster_data$ref = any;
export type DetailsQueryVariables = {|
  id?: ?string
|};
export type DetailsQueryResponse = {|
  +Movie: ?{|
    +$fragmentRefs: MoviePoster_data$ref & Info_data$ref
  |}
|};
export type DetailsQuery = {|
  variables: DetailsQueryVariables,
  response: DetailsQueryResponse,
|};
*/


/*
query DetailsQuery(
  $id: ID
) {
  Movie(id: $id) {
    ...MoviePoster_data
    ...Info_data
    id
  }
}

fragment Info_data on Movie {
  id
  name
  release
  rating
  time
  votes {
    likes
    dislikes
  }
  gener {
    name
    id
  }
  description
}

fragment MoviePoster_data on Movie {
  id
  poster
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "Movie",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MoviePoster_data"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Info_data"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "Movie",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "poster",
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "release",
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
            "name": "time",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Votes",
            "kind": "LinkedField",
            "name": "votes",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "likes",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "dislikes",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Gener",
            "kind": "LinkedField",
            "name": "gener",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DetailsQuery",
    "operationKind": "query",
    "text": "query DetailsQuery(\n  $id: ID\n) {\n  Movie(id: $id) {\n    ...MoviePoster_data\n    ...Info_data\n    id\n  }\n}\n\nfragment Info_data on Movie {\n  id\n  name\n  release\n  rating\n  time\n  votes {\n    likes\n    dislikes\n  }\n  gener {\n    name\n    id\n  }\n  description\n}\n\nfragment MoviePoster_data on Movie {\n  id\n  poster\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fce2413875ddc7a638df9aa1b9ccaad1';

module.exports = node;
