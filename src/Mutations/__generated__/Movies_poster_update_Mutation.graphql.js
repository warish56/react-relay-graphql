/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MovieInput = {|
  id: string,
  name?: ?string,
  release?: ?string,
  time?: ?string,
  description?: ?string,
|};
export type Movies_poster_update_MutationVariables = {|
  movieData?: ?MovieInput
|};
export type Movies_poster_update_MutationResponse = {|
  +updateMovie: ?{|
    +poster: ?string
  |}
|};
export type Movies_poster_update_Mutation = {|
  variables: Movies_poster_update_MutationVariables,
  response: Movies_poster_update_MutationResponse,
|};
*/


/*
mutation Movies_poster_update_Mutation(
  $movieData: MovieInput
) {
  updateMovie(movieData: $movieData) {
    poster
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "movieData",
    "type": "MovieInput"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "movieData",
    "variableName": "movieData"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "poster",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Movies_poster_update_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "updateMovie",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "Movies_poster_update_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "updateMovie",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
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
    "name": "Movies_poster_update_Mutation",
    "operationKind": "mutation",
    "text": "mutation Movies_poster_update_Mutation(\n  $movieData: MovieInput\n) {\n  updateMovie(movieData: $movieData) {\n    poster\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '132e6dce124b05722952a9af8252f8cc';

module.exports = node;
