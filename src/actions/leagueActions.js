export const SELECT_LEAGUE = 'SELECT_LEAGUE';
export const ADD_LEAGUE = 'ADD_LEAGUE';
export const LEAVE_LEAGUE = 'LEAVE_LEAGUE';
export const DELETE_LEAGUE = 'DELETE_LEAGUE';

export const FETCH_LEAGUE_DATA_START = 'FETCH_LEAGUE_DATA_START'
export const FETCH_LEAGUE_DATA_COMPLETE = 'FETCH_LEAGUE_DATA_COMPLETE'
export const FETCH_LEAGUE_DATA_ERROR = 'FETCH_LEAGUE_DATA_ERROR'

export function fetchLeagueDataStart() {
    return {
        type: FETCH_LEAGUE_DATA_START
    }
}

export function fetchLeagueDataComplete(data) {
    return {
        type: FETCH_LEAGUE_DATA_COMPLETE,
        payload: data
    }
}

export function fetchLeagueDataError(error) {
    return {
        type: FETCH_LEAGUE_DATA_ERROR,
        payload: error
    }
}

export function selectLeague(index) {
    return {
        type: SELECT_LEAGUE,
        index,
    }
}

export function addLeague(league) {
    return {
        type: ADD_LEAGUE,
        league,
    }
}

export function leaveLeague(index) {
    return {
        type: LEAVE_LEAGUE,
        index,
    }
}

export function deleteLeague(index) {
    return {
        type: DELETE_LEAGUE,
        index,
    }
}

export const ADD_GAME = 'ADD_GAME';
export const DELETE_GAME = 'DELETE_GAME';
export const EDIT_GAME = 'EDIT_GAME';

export function addGame(game) {
    return {
        type: ADD_GAME,
        game,
    }
}

export function deleteGame(index) {
    return {
        type: DELETE_GAME,
        index,
    }
}

export function editGame(index, game) {
    return {
        type: EDIT_GAME,
        index,
        game,
    }
}