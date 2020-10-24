import {
    SELECT_LEAGUE,
    ADD_LEAGUE,
    LEAVE_LEAGUE,
    DELETE_LEAGUE,
} from '../actions/leagueActions';

const initState = {
    selectedLeague: 0,
    leagues: [
        {
            name: 'TSI',
            members: ['GyozaCrumb', 'socho', 'corgo'],
        },
        {
            name: 'TSIG',
            members: ['GyozaCrumb', 'socho', 'corgo', 'gabin']
        },
        {
            name: 'Random',
            members: ['GyozaCrumb', 'person', 'another person'],
        }
    ]
}
export default function leagues(state = initState, action) {
    switch(action.type) {
        case SELECT_LEAGUE:
            return {
                ...state,
                selectedLeague: action.index,
            }
        case ADD_LEAGUE:
            return {
                selectedLeague: this.state.selectedLeague,
                leagues: [
                    ...this.state.leagues,
                    action.league,
                ]
            }
        case LEAVE_LEAGUE:
            // implement later
            return state;
        case DELETE_LEAGUE:
            // implement later
            return state;
        default:
            return state;
    }
}