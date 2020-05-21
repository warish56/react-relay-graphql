/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type MovieCard_movie$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MovieList_response$ref: FragmentReference;
declare export opaque type MovieList_response$fragmentType: MovieList_response$ref;
export type MovieList_response = {|
  +data: ?{|
    +totalCount: ?number,
    +pageInfo: ?{|
      +startCursor: ?string,
      +endCursor: ?string,
      +hasNextPage: boolean,
      +hasPreviousPage: boolean,
    |},
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: MovieCard_movie$ref
      |}
    |}>,
  |},
  +$refType: MovieList_response$ref,
|};
export type MovieList_response$data = MovieList_response;
export type MovieList_response$key = {
  +$data?: MovieList_response$data,
  +$fragmentRefs: MovieList_response$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "first",
      "type": "Int!"
    },
    {
      "kind": "RootArgument",
      "name": "after",
      "type": "String"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": [
          "data"
        ]
      }
    ]
  },
  "name": "MovieList_response",
  "selections": [
    {
      "alias": "data",
      "args": null,
      "concreteType": "MoviePage",
      "kind": "LinkedField",
      "name": "__Movies_data_connection",
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
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "MovieCard_movie"
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
    }
  ],
  "type": "MoviesResult"
};
// prettier-ignore
(node/*: any*/).hash = 'd090b3aa1317d22bae0a3b3d8919d21c';

module.exports = node;
