import { ENV_OBJ } from '../lib/env'
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
export const registerUser = async (data) => {

    function deleteVoids(jsonx){ 
        for (var clave in jsonx) { 
         if(typeof jsonx[clave] == 'string'){
           if(jsonx[clave] == 'Vacío'||jsonx[clave] == ''){ 
             delete jsonx[clave] 
           }
         } else if (typeof jsonx[clave] == 'object') { 
           deleteVoids(jsonx[clave]) 
         }
        }
       }
    await deleteVoids(data);
    const response = fetch (`${ENV_OBJ.API_REST_URL}/${data.typeUser}/register`, {
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