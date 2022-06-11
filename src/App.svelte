<script>
  import { Router, Route, Link } from "svelte-routing";
  import Login from "./view/Login.svelte";
  import RegisterMain from "./view/RegisterMain.svelte";
  import RegisterUser from "./view/RegisterUser.svelte";
  import ActivateAccount from "./view/activateAccount.svelte";
  import "./app.css";
</script>

<div>
  <Router>
    <Route path="/login"><Login /></Route>
    <Route path="/register"><RegisterMain /></Route>
    <Route path="/register/:typeUser" let:params><RegisterUser typeUser="{params.typeUser}" /></Route>
    <Route path="/activate-account"><ActivateAccount /></Route>
  </Router>
</div>
