import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootSaga, sagaMiddleware } from './configureSagas';
import { homeStateReducer } from './reducer/HomeReducer';
import { detailStateReducer } from './reducer/DetailReducer';

/**
 * Root Reducer for combine all reducer
 */
const rootReducer = combineReducers({
    home: homeStateReducer,
    detail: detailStateReducer
});

export default function configureStore(preloadedState) {
    const middlewareEnhancer = applyMiddleware(sagaMiddleware);

    const enhancers = [middlewareEnhancer];
    var composedEnhancers;
    if (__DEV__) {
        composedEnhancers = composeWithDevTools(...enhancers);
    } else {
        composedEnhancers = compose(...enhancers);
    }

    const store = createStore(rootReducer, preloadedState, composedEnhancers);
    sagaMiddleware.run(rootSaga);
    return store;
}
