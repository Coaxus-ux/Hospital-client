<script>
  import { Router, Route, navigate } from "svelte-routing";
  import Login from "./view/Login.svelte";
  import RegisterMain from "./view/RegisterMain.svelte";
  import RegisterUser from "./view/RegisterUser.svelte";
  import ActivateAccount from "./view/ActivateAccount.svelte";

  import DoctorPanel from "./view/DoctorPanel.svelte";
  import PatientPanel from "./view/PatientPanel.svelte";
  import Home from "./view/Home.svelte";
  import AdminPanel from "./view/AdminPanel.svelte";
  import AppointmentPanel from "./view/AppointmentPanel.svelte";
  import PatientAdmin from "./view/PatientAdmin.svelte";
  import SurgeryAdmin from "./view/SurgeryAdmin.svelte";
  import PasswordRecovery from "./view/PasswordRecovery.svelte";
  import NewPassword from "./view/NewPassword.svelte";
  import "./app.css";
 
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
    <Route path="/doctor"><DoctorPanel /></Route>
    <Route path="/patient"><PatientPanel /></Route>
    <Route path="/admin"><AdminPanel /></Route>
    <Route path="/appointment"><AppointmentPanel /></Route>
    <Route path="/adminpatients"><PatientAdmin /></Route>
    <Route path="/adminsurgerys"><SurgeryAdmin /></Route>
    <Route path="/password-recovery"><PasswordRecovery /></Route>
    <Route path="/new-password/:emailtoken" let:params><NewPassword emailtoken={params.emailtoken} /></Route>
  </Router>
  
</div>
