import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import nameReducer from './reducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  name: nameReducer
});

const composeEnhancers = process.env.NODE_ENV === 'development' ?
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) : null
  || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
export default store;