import { ENV_OBJ } from '../lib/env'
export const registerUser = async (data) => {
    const response = fetch (`${ENV_OBJ.API_REST_URL}/user/register`, {
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