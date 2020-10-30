import {
    LOG_IN_PENDING,
    LOG_IN_COMPLETE,
    LOG_IN_ERROR,
    LOG_OUT_PENDING,
    LOG_OUT_COMPLETE,
    LOG_OUT_ERROR,
} from '../actions/userActions';

const initState = {
    userId: 'user-id-1'
}

// implement these later
export default function user(state = initState, action) {
    switch(action.type) {
        case LOG_IN_PENDING:
            return state;
        case LOG_IN_COMPLETE:
            return state;
        case LOG_IN_ERROR:
            return state;
        case LOG_OUT_PENDING:
            return state;
        case LOG_OUT_COMPLETE:
            return state;
        case LOG_OUT_ERROR:
            return state;
        default:
            return state;
    }
}