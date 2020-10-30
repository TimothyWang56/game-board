import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AUTH_ENDPOINT } from './endpoints';

import {
    loginError,
    loginComplete,
    registerError,
    registerComplete,
    LOG_IN_START,
    REGISTER_START,
    REGISTER_COMPLETE
} from '../actions/userActions';

const login = async (username, password) => {
    const res = await axios({
        method: 'post',
        url: AUTH_ENDPOINT + '/login',
        data: {
            username,
            password
        },
    })
    return res.data;
}

const register = async (username, password) => {
    const res = await axios({
        method: 'post',
        url: AUTH_ENDPOINT + '/register',
        data: {
            username,
            password
        },
    })
    return res;
};

export function* logInWithCredentials({ payload: { username, password } }) {
    try {
        const user = yield login(username, password);
        yield put(loginComplete(user));
    } catch (error) {
        yield put(loginError(error));
    }
}

export function* registerWithCredentials({ payload: { username, password } }) {
    try {
        yield register(username, password);
        yield put(registerComplete({ username, password }));
    } catch (error) {
        yield put(registerError(error));
    }
}

export function* logInAfterRegister({ payload: { username, password } }) {
    yield logInWithCredentials({ payload: { username, password } });
}

export function* onLogInStart() {
    yield takeLatest(LOG_IN_START, logInWithCredentials);
}

export function* onRegisterStart() {
    yield takeLatest(REGISTER_START, registerWithCredentials);
}

export function* onRegisterSuccess() {
    yield takeLatest(REGISTER_COMPLETE, logInAfterRegister);
}

export function* userSagas() {
    yield all([
        call(onLogInStart),
        call(onRegisterStart),
        call(onRegisterSuccess),
    ]);
}