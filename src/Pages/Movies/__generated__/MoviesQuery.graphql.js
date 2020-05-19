/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MovieCard_movie$ref = any;
export type MoviesQueryVariables = {||};
export type MoviesQueryResponse = {|
  +Movies: ?$ReadOnlyArray<?{|
    +$fragmentRefs: MovieCard_movie$ref
  |}>
|};
export type MoviesQuery = {|
  variables: MoviesQueryVariables,
  response: MoviesQueryResponse,
|};
*/


/*
query MoviesQuery {
  Movies {
    ...MovieCard_movie
    id
  }
}

fragment MovieCard_movie on Movie {
  id
  name
  poster
  rating
}
*/

const node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MoviesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "Movies",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MovieCard_movie"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MoviesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "Movies",
        "plural": true,
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "MoviesQuery",
    "operationKind": "query",
    "text": "query MoviesQuery {\n  Movies {\n    ...MovieCard_movie\n    id\n  }\n}\n\nfragment MovieCard_movie on Movie {\n  id\n  name\n  poster\n  rating\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '36b955027c416d9ad9bd3701180dac26';

module.exports = node;
