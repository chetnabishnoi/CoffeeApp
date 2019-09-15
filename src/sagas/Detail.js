import { get } from 'lodash';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { setReviews, setVenueDetail } from '../actions/DetailAction';
import { GET_REVIEWS, GET_VENUE_DETAIL } from '../constants/Constants';
import { api } from '../util/ApiService';

export function* getVenueDetail() {
    try {
        const response = yield call(api.getVenueDetail);
        const data = response.body;
        const venueDetail = yield adaptVenueDetail(data);
        yield put(setVenueDetail(venueDetail));
    } catch (error) {
        throw error;
    }
}

export function* adaptVenueDetail(venueDetail) {
    try {
        const displayAddress = get(venueDetail, 'location.displayAddress', []);
        var address = displayAddress.reduce((acc, item) => {
            return acc + ", " + item
        })
        venueDetail.displayAddress = address;
        return venueDetail;
    } catch (error) {
        throw error;
    }
}

export function* getReviews() {
    try {
        const response = yield call(api.getReviews);
        const data = get(response.body, 'reviews', []);
        yield put(setReviews(data));
    } catch (error) {
        throw error;
    }
}

export default function* detailRoot() {
    yield all([
        takeEvery(GET_VENUE_DETAIL, getVenueDetail),
        takeEvery(GET_REVIEWS, getReviews)
    ]);
}

