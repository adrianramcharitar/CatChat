import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import messagesReducer from './reducers/messagesReducer';

const reducers = combineReducers({
    users: userReducer,
    messages: messagesReducer,
});

export default reducers;
