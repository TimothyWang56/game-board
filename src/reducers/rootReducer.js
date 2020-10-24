import { combineReducers } from 'redux';
import forum from './forumReducers';
import leagues from './leagueReducers';
import user from './userReducers';

const rootReducer = combineReducers({
    forum,
    leagues,
    user,
})

export default rootReducer