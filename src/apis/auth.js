import axios from 'axios';
import { AUTH_ENDPOINT } from './endpoints';

export async function register(username, password) {
    const res = await axios({
        method: 'post',
        url: AUTH_ENDPOINT + '/register',
        data: {
            username,
            password
        },
        validateStatus: false,
    })
    return res;
}
