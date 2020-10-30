export const LOG_IN_START = 'LOG_IN_START';
export const LOG_IN_COMPLETE = 'LOG_IN_COMPLETE';
export const LOG_IN_ERROR = 'LOG_IN_ERROR';
export const LOG_OUT_START = 'LOG_OUT_START';
export const LOG_OUT_COMPLETE = 'LOG_OUT_COMPLETE';
export const LOG_OUT_ERROR = 'LOG_OUT_ERROR';
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_COMPLETE = 'REGISTER_COMPLETE';
export const REGISTER_ERROR = 'REGISTER_ERROR';

// TODO: write action creators here

export function loginSubmit(username, password) {
    return {
        type: LOG_IN_START,
        username,
        password
    };
}

export function loginComplete(id, token) {
    return {
        type: LOG_IN_COMPLETE,
        id,
        token
    };
}

export function loginError(error) {
    return {
        type: LOG_IN_ERROR,
        error,
    };
}
