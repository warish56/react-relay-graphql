/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type Movies_Dislike_MutationVariables = {|
  movieId: string
|};
export type Movies_Dislike_MutationResponse = {|
  +disLikeMovie: ?{|
    +votes: ?{|
      +likes: ?number,
      +dislikes: ?number,
    |}
  |}
|};
export type Movies_Dislike_Mutation = {|
  variables: Movies_Dislike_MutationVariables,
  response: Movies_Dislike_MutationResponse,
|};
*/


/*
mutation Movies_Dislike_Mutation(
  $movieId: ID!
) {
  disLikeMovie(movieId: $movieId) {
    votes {
      likes
      dislikes
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "movieId",
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "movieId",
    "variableName": "movieId"
  }
],
v2 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Movies_Dislike_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "disLikeMovie",
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
    "name": "Movies_Dislike_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "disLikeMovie",
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
    "name": "Movies_Dislike_Mutation",
    "operationKind": "mutation",
    "text": "mutation Movies_Dislike_Mutation(\n  $movieId: ID!\n) {\n  disLikeMovie(movieId: $movieId) {\n    votes {\n      likes\n      dislikes\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9e31013d3a3ab79d2f1c928ea739b115';

module.exports = node;
