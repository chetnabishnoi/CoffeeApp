import createSagaMiddleware, { END } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import sagas from './sagas';

export function* rootSaga() {
  yield all([fork(sagas)]);
}

export const sagaMiddleware = createSagaMiddleware();

export { END };

