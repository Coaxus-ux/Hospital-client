<script>
  import { Router, Route, navigate } from "svelte-routing";
  import Login from "./view/Login.svelte";
  import RegisterMain from "./view/RegisterMain.svelte";
  import RegisterUser from "./view/RegisterUser.svelte";
  import ActivateAccount from "./view/activateAccount.svelte";
  import Admin from "./view/Admin.svelte";
  import Doctor from "./view/Doctor.svelte";
  import Patient from "./view/Patient.svelte";
  import Home from "./view/Home.svelte";
  import Error503 from "./view/Error503.svelte";
  import "./app.css";
  import { ENV_OBJ } from "./lib/env";
  const ping = async () => {
    const xhttp = new XMLHttpRequest();
    try {
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 0) {
          navigate("/Error503");
          
        }else{
          navigate("/");
        }
      };
      xhttp.open("POST", `${ENV_OBJ.API_REST_URL}/user/login`, true);
      xhttp.send();
    } catch (e) {
    }
  };
  //ping();
</script>

<div>
  
  <Router>
    <Route path="/"><Home /></Route>
    <Route path="/login"><Login /></Route>
    <Route path="/register"><RegisterMain /></Route>
    <Route path="/register/:typeUser" let:params>
      <RegisterUser typeUser={params.typeUser} />
    </Route>
    <Route path="/activate-account/:token" let:params>
      <ActivateAccount token={params.token} />
    </Route>
    <Route path="/admin"><Admin /></Route>
    <Route path="/doctor"><Doctor /></Route>
    <Route path="/patient"><Patient /></Route>
    <Route path="/Error503"><Error503 /></Route>
  </Router>
  
</div>
