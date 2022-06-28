import { JWTValidator } from "../store/Auth.js";
import { navigate } from "svelte-routing";
const loggedValidator = async () => {
    const JWT = await JSON.parse(localStorage.getItem("user"));
    if (JWT) {
        const request = await JWTValidator(JWT.token);
        console.log("ostias", request);
        if (request.state) {
            navigate("/" + request.userType);
        }else{
            navigate("/login");
        }
    }else{
        navigate("/login");
    }
}
export{
    loggedValidator
}