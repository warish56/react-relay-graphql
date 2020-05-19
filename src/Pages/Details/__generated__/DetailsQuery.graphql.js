/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Info_data$ref = any;
type MoviePoster_url$ref = any;
export type DetailsQueryVariables = {|
  id?: ?string
|};
export type DetailsQueryResponse = {|
  +Movie: ?{|
    +$fragmentRefs: MoviePoster_url$ref & Info_data$ref
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
    ...MoviePoster_url
    ...Info_data
    id
  }
}

fragment Info_data on Movie {
  name
  release
  rating
  time
  gener {
    name
    id
  }
  description
}

fragment MoviePoster_url on Movie {
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
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
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
            "name": "MoviePoster_url"
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "poster",
            "storageKey": null
          },
          (v2/*: any*/),
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
            "concreteType": "Gener",
            "kind": "LinkedField",
            "name": "gener",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          (v3/*: any*/)
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
    "text": "query DetailsQuery(\n  $id: ID\n) {\n  Movie(id: $id) {\n    ...MoviePoster_url\n    ...Info_data\n    id\n  }\n}\n\nfragment Info_data on Movie {\n  name\n  release\n  rating\n  time\n  gener {\n    name\n    id\n  }\n  description\n}\n\nfragment MoviePoster_url on Movie {\n  poster\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ef10532966f749d06f7041216f80c0c6';

module.exports = node;
