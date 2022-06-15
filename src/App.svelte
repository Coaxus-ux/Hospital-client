<script>
  import { Router, Route } from "svelte-routing";
  import Login from "./view/Login.svelte";
  import RegisterMain from "./view/RegisterMain.svelte";
  import RegisterUser from "./view/RegisterUser.svelte";
  import ActivateAccount from "./view/activateAccount.svelte";
  import Admin from "./view/Admin.svelte";
  import Doctor from "./view/Doctor.svelte";
  import Patient from "./view/Patient.svelte";
  import Home from "./view/Home.svelte";
  import "./app.css";

</script>

<div>
  <Router>
    <Route path="/"><Home /></Route>
    <Route path="/login"><Login /></Route>
    <Route path="/register"><RegisterMain /></Route>
    <Route path="/register/:typeUser" let:params> <RegisterUser typeUser="{params.typeUser}" /> </Route>
    <Route path="/activate-account/:token" let:params> <ActivateAccount token="{params.token}" /> </Route>
    <Route path="/admin"><Admin /></Route>
    <Route path="/doctor"><Doctor /></Route>
    <Route path="/patient"><Patient /></Route>
  </Router>
</div>
