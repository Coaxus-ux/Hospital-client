import { writable } from 'svelte/store';
import { ENV_OBJ } from '../lib/env'
import axios from 'axios';
export const userLogin = async (data) => {
    const response = fetch (`${ENV_OBJ.API_REST_URL}/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
        return res;
    }
    )
    return response;
}