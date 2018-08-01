import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import chatAppReducers from './reducers';

const store = createStore(chatAppReducers, {}, applyMiddleware(reduxThunk));

export default store;
