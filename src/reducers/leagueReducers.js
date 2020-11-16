import {
    SELECT_LEAGUE,
    ADD_LEAGUE,
    LEAVE_LEAGUE,
    DELETE_LEAGUE,
    ADD_GAME,
    DELETE_GAME,
    EDIT_GAME,
    FETCH_LEAGUE_DATA_COMPLETE,
    FETCH_LEAGUE_DATA_ERROR
} from '../actions/leagueActions';

const initState = {
    error: null,
    selectedLeague: 0,
    myLeagues: [],
    leagueInfo: {},
    leagueGames: {},
    userData: {}
}

export default function leagues(state = initState, action) {
    const leagueId = state.myLeagues[state.selectedLeague];
    switch(action.type) {
        case FETCH_LEAGUE_DATA_COMPLETE:
            return {
                ...initState,
                ...action.payload.data
            }
        case FETCH_LEAGUE_DATA_ERROR:
            return {
                ...initState,
                error: action.payload,
            }
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