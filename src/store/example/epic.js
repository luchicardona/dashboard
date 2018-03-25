import { combineEpics } from 'redux-observable';
import { fromPromise } from 'rxjs/observable/fromPromise';

import { 
  TYPES,
  fetchSuccess,
} from './actions';

export function fetch(action$, store, { getFirebase }) {
  return action$.ofType(TYPES.FETCH)
    .switchMap(() => fromPromise(getFirebase().firestore().collection('todos').get())
      .map((response) => {
        response.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
        return fetchSuccess(response);
      })
    );
}

export default combineEpics(
  fetch,
);

