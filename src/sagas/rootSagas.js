import { all, call } from 'redux-saga/effects';
import { leagueSagas } from './leagueSagas';
import { userSagas } from './userSagas';

export default function* rootSaga() {
    yield all([call(userSagas), call(leagueSagas)]);
}