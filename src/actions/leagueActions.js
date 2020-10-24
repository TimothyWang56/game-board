export const SELECT_LEAGUE = 'SELECT_LEAGUE';
export const ADD_LEAGUE = 'ADD_LEAGUE';
export const LEAVE_LEAGUE = 'LEAVE_LEAGUE';
export const DELETE_LEAGUE = 'DELETE_LEAGUE';

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

export function leaveLeague(id) {
    return {
        type: LEAVE_LEAGUE,
        id,
    }
}

export function deleteLeague(id) {
    return {
        type: DELETE_LEAGUE,
        id,
    }
}
