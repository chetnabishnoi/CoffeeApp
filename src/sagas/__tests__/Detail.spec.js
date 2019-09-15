import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { api } from '../../util/ApiService';
import { getVenueDetail } from '../Detail';
import { mockVenueDetail } from '../__mocks__/VenueDetailMock';

describe('Venue Sagas', () => {

    it('gets venue detail!', () => {
        const expectedPayload = {
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/rEFJSvLhqaiZxWinLBeAyQ/o.jpg",
            "name": "Man Versus Machine",
            "rating": 4.5,
            "photos": [
                "https://s3-media2.fl.yelpcdn.com/bphoto/rEFJSvLhqaiZxWinLBeAyQ/o.jpg",
                "https://s3-media4.fl.yelpcdn.com/bphoto/SCCmGbeb7gQgCtGHR-x-ug/o.jpg",
                "https://s3-media4.fl.yelpcdn.com/bphoto/ebZ8vSp4HkGCrkJlwgnJ0g/o.jpg"
            ],
            "phone": "+498980046681",
            "id": "man-versus-machine-münchen",
            "location": {
                "city": "Munich",
                "address3": "",
                "displayAddress": [
                    "Müllerstr. 23",
                    "80469 Munich",
                    "Germany"
                ]
            },
            "url": "https://www.yelp.com/biz/man-versus-machine-m%C3%BCnchen?adjust_creative=g_cO5JMMQ-aAST6Q7p2ovQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=g_cO5JMMQ-aAST6Q7p2ovQ",
            "is_closed": false,
            "displayAddress": "Müllerstr. 23, 80469 Munich, Germany"
        };
        const mockResponse = { "body": mockVenueDetail };
        return expectSaga(getVenueDetail)
            .provide([
                [matchers.call.fn(api.getVenueDetail), mockResponse],
            ])
            .call(api.getVenueDetail)
            .put({
                type: 'SET_VENUE_DETAIL',
                payload: { ...expectedPayload },
            })
            .run();
    });

});