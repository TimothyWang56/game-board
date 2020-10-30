export const LOG_IN_START = 'LOG_IN_START';
export const LOG_IN_COMPLETE = 'LOG_IN_COMPLETE';
export const LOG_IN_ERROR = 'LOG_IN_ERROR';
export const LOG_OUT = 'LOG_OUT';
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_COMPLETE = 'REGISTER_COMPLETE';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export function loginStart(credentials) {
    return {
        type: LOG_IN_START,
        payload: credentials
    };
}

export function loginComplete(user) {
    return {
        type: LOG_IN_COMPLETE,
        payload: user
    };
}

export function loginError(error) {
    return {
        type: LOG_IN_ERROR,
        payload: error,
    };
}

export function registerStart(credentials) {
    return {
        type: REGISTER_START,
        payload: credentials,
    };
}

export function registerComplete(user) {
    return {
        type: REGISTER_COMPLETE,
        payload: user,
    }
};

export function registerError(error) {
    return {
        type: REGISTER_ERROR,
        payload: error,
    }
};

export function logOut() {
    return {
        type: LOG_OUT,
    }
};