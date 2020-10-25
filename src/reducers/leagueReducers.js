import {
    SELECT_LEAGUE,
    ADD_LEAGUE,
    LEAVE_LEAGUE,
    DELETE_LEAGUE,
    ADD_GAME,
    DELETE_GAME,
    EDIT_GAME,
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
        'TSI': [
            {
                time: '2020-11-25T01:00:00.000Z',
                players: ['GyozaCrumb', 'socho', 'corgo'],
            },
            {
                time: '2020-11-10T01:00:00.000Z',
                players: ['GyozaCrumb', 'socho', 'corgo'],
            },
            {
                time: '2020-10-20T01:00:00.000Z',
                players: ['GyozaCrumb', 'socho', 'corgo'],
            },
            {
                time: '2020-10-10T01:00:00.000Z',
                players: ['GyozaCrumb', 'socho', 'corgo'],
                winner: 'socho',
            },
            {
                time: '2020-10-08T01:00:00.000Z',
                players: ['GyozaCrumb', 'socho', 'corgo'],
                winner: 'GyozaCrumb',
            },
            {
                time: '2020-10-01T01:00:00.000Z',
                players: ['GyozaCrumb', 'socho', 'corgo'],
                winner: 'corgo',
            },
            {
                time: '2020-09-30T01:00:00.000Z',
                players: ['GyozaCrumb', 'socho', 'corgo'],
                winner: 'corgo',
            },
            {
                time: '2020-09-25T01:00:00.000Z',
                players: ['GyozaCrumb', 'socho', 'corgo'],
                winner: 'socho',
            },
            {
                time: '2020-09-17T01:00:00.000Z',
                players: ['GyozaCrumb', 'socho', 'corgo'],
                winner: 'GyozaCrumb',
            },
            {
                time: '2020-09-10T01:00:00.000Z',
                players: ['GyozaCrumb', 'socho', 'corgo'],
                winner: 'corgo',
            },
        ],
        'TSIG': [

        ],
        'Pokemon Gen 7': [
        ]
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
    const leagueName = state.leagues[state.selectedLeague].name;
    switch(action.type) {
        case SELECT_LEAGUE:
            return {
                ...state,
                selectedLeague: action.index,
            }
        case ADD_LEAGUE:
            return {
                selectedLeague: state.selectedLeague,
                leagues: [
                    ...state.leagues,
                    action.league,
                ]
            }
        case LEAVE_LEAGUE:
            // implement later
            return state;
        case DELETE_LEAGUE:
            // implement later
            return state;
        case ADD_GAME:
            // implement later
            return state;
        case DELETE_GAME:
            return {
                ...state,
                leagueGames: {
                    ...state.leagueGames,
                    [leagueName]: state.leagueGames[leagueName].filter((_, index) => index !== action.index)
                }
            }
        case EDIT_GAME:
            const games = [...state.leagueGames[leagueName]];
            games[action.index] = action.game;
            return {
                ...state,
                leagueGames: {
                    ...state.leagueGames,
                    [leagueName]: games
                }
            }
        default:
            return state;
    }
}