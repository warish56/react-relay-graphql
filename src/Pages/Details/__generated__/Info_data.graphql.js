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
  +name: ?string,
  +release: ?string,
  +rating: ?number,
  +time: ?string,
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
(node/*: any*/).hash = '76ca8bd0dc9f53bd65a6e14e13889d1a';

module.exports = node;
