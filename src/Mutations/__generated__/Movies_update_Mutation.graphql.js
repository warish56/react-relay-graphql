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
export type Movies_update_MutationVariables = {|
  movieData?: ?MovieInput
|};
export type Movies_update_MutationResponse = {|
  +updateMovie: ?{|
    +name: ?string,
    +release: ?string,
    +time: ?string,
    +description: ?string,
  |}
|};
export type Movies_update_Mutation = {|
  variables: Movies_update_MutationVariables,
  response: Movies_update_MutationResponse,
|};
*/


/*
mutation Movies_update_Mutation(
  $movieData: MovieInput
) {
  updateMovie(movieData: $movieData) {
    name
    release
    time
    description
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
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "release",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "time",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Movies_update_Mutation",
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
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/)
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
    "name": "Movies_update_Mutation",
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
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
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
    "name": "Movies_update_Mutation",
    "operationKind": "mutation",
    "text": "mutation Movies_update_Mutation(\n  $movieData: MovieInput\n) {\n  updateMovie(movieData: $movieData) {\n    name\n    release\n    time\n    description\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '18802595a3a0ab03bbd02746b82f14a5';

module.exports = node;
