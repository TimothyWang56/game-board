import {
    LOG_IN_START,
    LOG_IN_COMPLETE,
    LOG_IN_ERROR,
    LOG_OUT_START,
    LOG_OUT_COMPLETE,
    LOG_OUT_ERROR,
    REGISTER_START,
    REGISTER_COMPLETE,
    REGISTER_ERROR,
} from '../actions/userActions';

const initState = {
    userId: 'user-id-1'
}

// implement these later
export default function user(state = initState, action) {
    switch(action.type) {
        case LOG_IN_START:
            return state;
        case LOG_IN_COMPLETE:
            return state;
        case LOG_IN_ERROR:
            return state;
        case LOG_OUT_START:
            return state;
        case LOG_OUT_COMPLETE:
            return state;
        case LOG_OUT_ERROR:
            return state;
        case REGISTER_START:
            return state;
        case REGISTER_COMPLETE:
            return state;
        case REGISTER_ERROR:
            return state;
        default:
            return state;
    }
}