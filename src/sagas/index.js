import { all } from 'redux-saga/effects';
import homeRoot from './Home';
import detailRoot from './Detail';

export default function* appRoot() {
    yield all([homeRoot(), detailRoot()]);
}
