import {
    SIGN_IN_PENDING,
    SIGN_IN_COMPLETE,
    SIGN_IN_ERROR,
    LOG_OUT_PENDING,
    LOG_OUT_COMPLETE,
    LOG_OUT_ERROR,
    CREATE_ACCOUNT_PENDING,
    CREATE_ACCOUNT_COMPLETE,
    CREATE_ACCOUNT_ERROR,
} from '../actions/userActions';

const initState = {
    userId: 'user-id-1'
}

// implement these later
export default function user(state = initState, action) {
    switch(action.type) {
        case SIGN_IN_PENDING:
            return state;
        case SIGN_IN_COMPLETE:
            return state;
        case SIGN_IN_ERROR:
            return state;
        case LOG_OUT_PENDING:
            return state;
        case LOG_OUT_COMPLETE:
            return state;
        case LOG_OUT_ERROR:
            return state;
        case CREATE_ACCOUNT_PENDING:
            return state;
        case CREATE_ACCOUNT_COMPLETE:
            return state;
        case CREATE_ACCOUNT_ERROR:
            return state;
        default:
            return state;
    }
}