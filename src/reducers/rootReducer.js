import { combineReducers } from 'redux';
import forum from './forumReducers';
import leagues from './leagueReducers';

const rootReducer = combineReducers({
    forum,
    leagues,
})

export default rootReducer