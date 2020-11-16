import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { LEAGUE_ENDPOINT } from './endpoints';

import {
    FETCH_LEAGUE_DATA_START,
    fetchLeagueDataError,
    fetchLeagueDataComplete
} from '../actions/leagueActions';

const fetchLeagueData = async () => {
    const res = await axios({
        method: 'get',
        url: LEAGUE_ENDPOINT,
        withCredentials: true
    })
    return res.data;
}

export function* fetchLeagueDataWithCredentials() {
    try {
        const data = yield fetchLeagueData();
        yield put(fetchLeagueDataComplete(data));
    } catch (error) {
        yield put(fetchLeagueDataError(error));
    }
}

export function* onFetchLeagueDataStart() {
    yield takeLatest(FETCH_LEAGUE_DATA_START, fetchLeagueDataWithCredentials);
}

export function* leagueSagas() {
    yield all([
        call(onFetchLeagueDataStart),
    ]);
}
