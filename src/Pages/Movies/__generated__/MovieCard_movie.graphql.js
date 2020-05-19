/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type MovieCard_movie$ref: FragmentReference;
declare export opaque type MovieCard_movie$fragmentType: MovieCard_movie$ref;
export type MovieCard_movie = {|
  +id: ?string,
  +name: ?string,
  +poster: ?string,
  +rating: ?number,
  +$refType: MovieCard_movie$ref,
|};
export type MovieCard_movie$data = MovieCard_movie;
export type MovieCard_movie$key = {
  +$data?: MovieCard_movie$data,
  +$fragmentRefs: MovieCard_movie$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MovieCard_movie",
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
  "type": "Movie"
};
// prettier-ignore
(node/*: any*/).hash = '485a97be529b044a02a3e17854d825fa';

module.exports = node;
