import Config from 'react-native-config';
import { buildApi, get } from 'redux-bees';
const camelcaseKeys = require('camelcase-keys');

const apiEndpoints = {
    getVenueList: { method: get, path: '/venue' },
    getVenueDetail: { method: get, path: '/venue-detail' },
    getReviews: { method: get, path: '/reviews' }
};

const config = {
    baseUrl: Config.API_DOMAIN,
    afterResolve({ body, ...rest }) {
        return Promise.resolve({
            ...rest,
            body: camelcaseKeys(body || {}, { deep: true })
        });
    }
};

export const api = buildApi(apiEndpoints, config);
