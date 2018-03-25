import 'rxjs';
import { combineEpics } from 'redux-observable';
import { createEpicMiddleware as createMiddleware } from 'redux-observable';
// import { fetch } from './example/epic';

const rootEpic = combineEpics(
  // fetch,
);

const createEpicMiddleware = (dependencies) => createMiddleware(rootEpic, { dependencies });

export default createEpicMiddleware;