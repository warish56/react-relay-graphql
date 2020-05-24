/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserInput = {|
  name?: ?string,
  email?: ?string,
  phone?: ?string,
  password?: ?string,
|};
export type User_Add_MutationVariables = {|
  data?: ?UserInput
|};
export type User_Add_MutationResponse = {|
  +User: ?{|
    +token: ?string,
    +user: ?{|
      +id: ?string,
      +name: ?string,
    |},
  |}
|};
export type User_Add_Mutation = {|
  variables: User_Add_MutationVariables,
  response: User_Add_MutationResponse,
|};
*/


/*
mutation User_Add_Mutation(
  $data: UserInput
) {
  User(data: $data) {
    token
    user {
      id
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "data",
    "type": "UserInput"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "data",
        "variableName": "data"
      }
    ],
    "concreteType": "UserResponse",
    "kind": "LinkedField",
    "name": "User",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
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
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "User_Add_Mutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "User_Add_Mutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "User_Add_Mutation",
    "operationKind": "mutation",
    "text": "mutation User_Add_Mutation(\n  $data: UserInput\n) {\n  User(data: $data) {\n    token\n    user {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '24d21c822bb5844c1f82b2a1a4dacf64';

module.exports = node;
