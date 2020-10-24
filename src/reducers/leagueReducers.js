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
            name: 'Pokemon Gen 7',
            members: ['GyozaCrumb', 'corgo'],
        }
    ],
    leagueData: {
        'TSI': {
            games: [

            ]
        },
        'TSIG': {
            games: [

            ]
        },
        'Random': {
            games: [

            ]
        }
    },
    playerData: {
        'GyozaCrumb': {
            likes: [
                'Catan',
                'Dominion',
                'Citadels',
                'MTG',
            ]
        },
        'socho': {
            likes: [
                'Catan',
                'Dominion',
                'Tetris',
            ]
        },
        'corgo': {
            likes: [
                'Catan',
                'Tetris',
            ]
        },
        'gabin': {
            likes: [
                'Catan',
            ]
        }
    }
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