import { GET_REVIEWS, GET_VENUE_DETAIL, SET_REVIEWS, SET_VENUE_DETAIL } from '../constants/Constants';

export const getVenueDetail = () => {
    return {
        type: GET_VENUE_DETAIL
    };
};

export const setVenueDetail = (payload) => {
    return {
        type: SET_VENUE_DETAIL,
        payload
    };
};


export const getReviews = () => {
    return {
        type: GET_REVIEWS,
    };
};

export const setReviews = (payload) => {
    return {
        type: SET_REVIEWS,
        payload
    };
};
