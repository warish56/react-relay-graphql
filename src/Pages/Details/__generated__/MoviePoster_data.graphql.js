/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type MoviePoster_data$ref: FragmentReference;
declare export opaque type MoviePoster_data$fragmentType: MoviePoster_data$ref;
export type MoviePoster_data = {|
  +id: ?string,
  +poster: ?string,
  +$refType: MoviePoster_data$ref,
|};
export type MoviePoster_data$data = MoviePoster_data;
export type MoviePoster_data$key = {
  +$data?: MoviePoster_data$data,
  +$fragmentRefs: MoviePoster_data$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MoviePoster_data",
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
      "name": "poster",
      "storageKey": null
    }
  ],
  "type": "Movie"
};
// prettier-ignore
(node/*: any*/).hash = 'edf532ad898512d241d034f5aee46755';

module.exports = node;
