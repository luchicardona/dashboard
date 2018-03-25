import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
// import example from './example/reducer';

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  // example,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};

export default function configureStore(composes, middlewares) {
  const createReduxStore = compose(...composes)(createStore)
  const store = createReduxStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  );

  return store;
}