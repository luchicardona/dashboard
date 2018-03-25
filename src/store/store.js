import firebase from '../services/firebase';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import createEpicMiddleware from './epic';
import configureStore from './reducer';

// react-redux-firebase options
const config = {
  userProfile: 'users', // firebase root where user profiles are stored
  enableLogging: false, // enable/disable Firebase's database logging
  useFirestoreForProfile: true,
}

const epicMiddleware = createEpicMiddleware({ getFirebase, getFirestore });

const store = configureStore([
  reactReduxFirebase(firebase, config),
  reduxFirestore(firebase),
], [
  epicMiddleware,
]);

export default store;

