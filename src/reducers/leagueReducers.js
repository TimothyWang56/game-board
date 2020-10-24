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
    leagueGames: {
        'TSI': {
            upcomingGames: [
                {
                    date: '11/4',
                    time: '8PM EDT',
                    players: ['GyozaCrumb', 'socho', 'corgo'],
                },
                {
                    date: '11/1',
                    time: '8PM EDT',
                    players: ['GyozaCrumb', 'socho', 'corgo'],
                },
            ],
            pastGames: [
                {
                    date: '10/21',
                    time: '6PM EDT',
                    players: ['GyozaCrumb', 'socho', 'corgo'],
                    winner: 'corgo',
                },
                {
                    date: '10/19',
                    time: '10PM EDT',
                    players: ['GyozaCrumb', 'socho', 'corgo'],
                    winner: 'socho',
                },
                {
                    date: '10/4',
                    time: '10AM EDT',
                    players: ['GyozaCrumb', 'socho', 'corgo'],
                    winner: 'GyozaCrumb',
                },
                {
                    date: '9/31',
                    time: '4PM EDT',
                    players: ['GyozaCrumb', 'socho', 'corgo'],
                    winner: 'corgo',
                },
                {
                    date: '9/21',
                    time: '6PM EDT',
                    players: ['GyozaCrumb', 'socho', 'corgo'],
                    winner: 'corgo',
                },
                {
                    date: '9/19',
                    time: '10PM EDT',
                    players: ['GyozaCrumb', 'socho', 'corgo'],
                    winner: 'socho',
                },
                {
                    date: '9/4',
                    time: '10AM EDT',
                    players: ['GyozaCrumb', 'socho', 'corgo'],
                    winner: 'GyozaCrumb',
                },
                {
                    date: '8/31',
                    time: '4PM EDT',
                    players: ['GyozaCrumb', 'socho', 'corgo'],
                    winner: 'corgo',
                },
            ]
        },
        'TSIG': {
            upcomingGames: [

            ],
            pastGames: [

            ]
        },
        'Pokemon Gen 7': {
            upcomingGames: [

            ],
            pastGames: [

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