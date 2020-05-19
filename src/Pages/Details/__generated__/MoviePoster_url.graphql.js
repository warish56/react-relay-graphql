/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type MoviePoster_url$ref: FragmentReference;
declare export opaque type MoviePoster_url$fragmentType: MoviePoster_url$ref;
export type MoviePoster_url = {|
  +poster: ?string,
  +$refType: MoviePoster_url$ref,
|};
export type MoviePoster_url$data = MoviePoster_url;
export type MoviePoster_url$key = {
  +$data?: MoviePoster_url$data,
  +$fragmentRefs: MoviePoster_url$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MoviePoster_url",
  "selections": [
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
(node/*: any*/).hash = 'aa01332dee67220f4aa3155c17254c9b';

module.exports = node;
