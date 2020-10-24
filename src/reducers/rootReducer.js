import forum from './forumReducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    forum,
})

export default rootReducer