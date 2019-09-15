import { GET_VENUE_LIST, SET_VENUE_LIST } from '../constants/Constants';

export const getVenueList = () => {
    return {
        type: GET_VENUE_LIST,
    };
};

export const setVenueList = (payload) => {
    return {
        type: SET_VENUE_LIST,
        payload
    };
};
