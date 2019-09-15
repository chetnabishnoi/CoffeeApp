import { all, call, put, takeEvery } from 'redux-saga/effects';
import { setVenueList } from '../actions/HomeAction';
import { GET_VENUE_LIST } from '../constants/Constants';
import { api } from '../util/ApiService';

export function* getVenueList() {
    try {
        const response = yield call(api.getVenueList);
        const venueList = response.body;
        yield put(setVenueList(venueList));
    } catch (error) {
        throw error;
    }
}

export default function* homeRoot() {
    yield all([
        takeEvery(GET_VENUE_LIST, getVenueList)
    ]);
}

