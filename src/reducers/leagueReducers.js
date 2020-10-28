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
    myLeagues: ['league-id-1', 'league-id-2', 'league-id-3'],
    leagueInfo: {
        'league-id-1': {
            id: 'league-id-1',
            name: 'TSI',
            members: ['user-id-1', 'user-id-2', 'user-id-3'],
        },
        'league-id-2': {
            id: 'league-id-2',
            name: 'TSIG',
            members: ['user-id-1', 'user-id-2', 'user-id-3', 'user-id-4']
        },
        'league-id-3': {
            id: 'league-id-3',
            name: 'Pokemon Gen 7',
            members: ['user-id-1', 'user-id-3'],
        }
    },
    leagueGames: {
        'league-id-1': [
            {
                time: '2020-11-25T01:00:00.000Z',
                gameId: 'game-id-1',
                players: ['user-id-1', 'user-id-2', 'user-id-3'],
            },
            {
                time: '2020-11-10T01:00:00.000Z',
                gameId: 'game-id-2',
                players: ['user-id-1', 'user-id-2', 'user-id-3'],
            },
            {
                time: '2020-10-20T01:00:00.000Z',
                gameId: 'game-id-3',
                players: ['user-id-1', 'user-id-2', 'user-id-3'],
            },
            {
                time: '2020-10-10T01:00:00.000Z',
                gameId: 'game-id-4',
                players: ['user-id-1', 'user-id-2', 'user-id-3'],
                winner: 'user-id-2',
            },
            {
                time: '2020-10-08T01:00:00.000Z',
                gameId: 'game-id-5',
                players: ['user-id-1', 'user-id-2', 'user-id-3'],
                winner: 'user-id-1',
            },
            {
                time: '2020-10-01T01:00:00.000Z',
                gameId: 'game-id-6',
                players: ['user-id-1', 'user-id-2', 'user-id-3'],
                winner: 'user-id-3',
            },
            {
                time: '2020-09-30T01:00:00.000Z',
                gameId: 'game-id-7',
                players: ['user-id-1', 'user-id-2', 'user-id-3'],
                winner: 'user-id-3',
            },
            {
                time: '2020-09-25T01:00:00.000Z',
                gameId: 'game-id-8',
                players: ['user-id-1', 'user-id-2', 'user-id-3'],
                winner: 'user-id-2',
            },
            {
                time: '2020-09-17T01:00:00.000Z',
                gameId: 'game-id-9',
                players: ['user-id-1', 'user-id-2', 'user-id-3'],
                winner: 'user-id-1',
            },
            {
                time: '2020-09-10T01:00:00.000Z',
                gameId: 'game-id-10',
                players: ['user-id-1', 'user-id-2', 'user-id-3'],
                winner: 'user-id-3',
            },
        ],
        'league-id-2': [
        ],
        'league-id-3': [
        ]
    },
    userData: {
        'user-id-1': {
            username: 'GyozaCrumb',
            id: 'user-id-1',
            likes: [
                'Catan',
                'Dominion',
                'Citadels',
                'MTG',
            ]
        },
        'user-id-2': {
            username: 'socho',
            id: 'user-id-2',
            likes: [
                'Catan',
                'Dominion',
                'Tetris',
            ]
        },
        'user-id-3': {
            username: 'corgo',
            id: 'user-id-3',
            likes: [
                'Catan',
                'Tetris',
            ]
        },
        'user-id-4': {
            username: 'gabin',
            id: 'user-id-4',
            likes: [
                'Catan',
            ]
        }
    }
}

export default function leagues(state = initState, action) {
    const leagueId = state.myLeagues[state.selectedLeague];
    switch(action.type) {
        case SELECT_LEAGUE:
            return {
                ...state,
                selectedLeague: action.index,
            }
        case ADD_LEAGUE:
            // implement later
            return state
        case LEAVE_LEAGUE:
            // implement later
            return state;
        case DELETE_LEAGUE:
            // implement later
            return state;
        case ADD_GAME:
            const gamesWithNewGame = [...state.leagueGames[leagueId], action.game]
            gamesWithNewGame.sort((a, b) => {
                const aTime = (new Date(a.time)).getTime() / 1000;
                const bTime = (new Date(b.time)).getTime() / 1000;
                const diff = aTime - bTime;
                if (diff < 0){
                    return 1;
                } else if (diff === 0) {
                    return 0;
                } else {
                    return -1;
                }
            })

            return {
                ...state,
                leagueGames: {
                    ...state.leagueGames,
                    [leagueId]: gamesWithNewGame
                }
            }
        case DELETE_GAME:
            return {
                ...state,
                leagueGames: {
                    ...state.leagueGames,
                    [leagueId]: state.leagueGames[leagueId].filter((_, index) => index !== action.index)
                }
            }
        case EDIT_GAME:
            const games = [...state.leagueGames[leagueId]];
            games[action.index] = action.game;
            return {
                ...state,
                leagueGames: {
                    ...state.leagueGames,
                    [leagueId]: games
                }
            }
        default:
            return state;
    }
}