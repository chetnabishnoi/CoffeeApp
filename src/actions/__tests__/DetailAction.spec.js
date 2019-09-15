
import { GET_REVIEWS, GET_VENUE_DETAIL, SET_REVIEWS, SET_VENUE_DETAIL } from '../../constants/Constants';
import { getReviews, getVenueDetail, setReviews, setVenueDetail } from '../DetailAction';

describe('Detail Actions', () => {
    describe('getVenueDetail', () => {
        it('should return correct action', () => {
            const action = getVenueDetail();
            expect(action).toEqual({
                type: GET_VENUE_DETAIL,
            });
        });
    });

    describe('setVenueDetail', () => {
        it('should return correct action', () => {
            const mockPayload = { dummy: 'data' }
            const action = setVenueDetail(mockPayload);
            expect(action).toEqual({
                type: SET_VENUE_DETAIL,
                payload: mockPayload
            });
        });
    });

    describe('getReviews', () => {
        it('should return correct action', () => {
            const action = getReviews();
            expect(action).toEqual({
                type: GET_REVIEWS,
            });
        });
    });

    describe('setReviews', () => {
        it('should return correct action', () => {
            const mockPayload = { dummy: 'data' }
            const action = setReviews(mockPayload);
            expect(action).toEqual({
                type: SET_REVIEWS,
                payload: mockPayload
            });
        });
    });
});