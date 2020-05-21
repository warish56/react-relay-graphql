/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Info_data$ref: FragmentReference;
declare export opaque type Info_data$fragmentType: Info_data$ref;
export type Info_data = {|
  +id: ?string,
  +name: ?string,
  +release: ?string,
  +rating: ?number,
  +time: ?string,
  +votes: ?{|
    +likes: ?number,
    +dislikes: ?number,
  |},
  +gener: ?$ReadOnlyArray<?{|
    +name: ?string
  |}>,
  +description: ?string,
  +$refType: Info_data$ref,
|};
export type Info_data$data = Info_data;
export type Info_data$key = {
  +$data?: Info_data$data,
  +$fragmentRefs: Info_data$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Info_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    (v0/*: any*/),
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
        (v0/*: any*/)
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
  "type": "Movie"
};
})();
// prettier-ignore
(node/*: any*/).hash = '0d6427130acb4c3e2c9562db9d3ae213';

module.exports = node;
