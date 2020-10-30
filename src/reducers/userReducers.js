import {
    LOG_IN_COMPLETE,
    LOG_IN_ERROR,
    LOG_OUT,
    REGISTER_ERROR,
} from '../actions/userActions';

const initState = {
    token: null,
    error: null,
}

export default function user(state = initState, action) {
    console.log(action)
    switch(action.type) {
        case LOG_IN_COMPLETE:
            return {
                ...state,
                token: action.payload.token,
                error: null
            }
        case LOG_IN_ERROR:
        case REGISTER_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case LOG_OUT:
            return initState;
        default:
            return state;
    }
}