<script>
  import { getContext, onMount } from "svelte";
  import { writable } from "svelte/store";
  import { navigate } from "svelte-routing";
  import Appointment from "../lib/AppointmentModal.svelte";
  import Modal, { bind } from "svelte-simple-modal";
  export let message = "";
  export let route = "";
  const modal = writable(null);
  import { getPatientsByCitizenshipCard } from "../store/Utils.js";
  const { close } = getContext("simple-modal");
  const userCitizenshipCard = writable("");
  const Success = writable(false);
  const buttonStyle = writable("btn btn-warning ml-3 btn-disabled");
  const buttonSuccess = writable("btn btn-success w-full mt-5 btn-disabled");
  const user = writable({
    name: "",
    _id: "",
  });
  const Error = writable({
    error: false,
    message: "",
  });

  const onHandleChange = (e) => {
    userCitizenshipCard.set(e.target.value);
    if (e.target.value.length > 3) {
      buttonStyle.set("btn btn-warning ml-3");
    } else {
      buttonStyle.set("btn btn-warning ml-3 btn-disabled");
    }
    Error.set({
      error: false,
      message: "",
    });
  };
  const callPatient = async () => {
    const patientResult = await getPatientsByCitizenshipCard(
      $userCitizenshipCard
    );
    if (!patientResult.state) {
      Error.set({
        error: true,
        message: patientResult.message,
      });
    } else {
      Success.set(true);
      buttonSuccess.set("btn btn-success w-full mt-5");
    }
    user.set({
      name:
        patientResult.result[0].name + " " + patientResult.result[0].lastName,
      _id: patientResult.result[0]._id,
    });
  };
  const showModal = () => {
    modal.set(
      bind(Appointment, {
        message: $user,
      })
    );
  };
  const handleSuccess = () => {
    showModal();
  };
</script>

<Modal
  closeOnOuterClick={true}
  closeButton={true}
  show={$modal}
  styleWindow={{
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.15 )",
    backgroundColor: "rgb(241, 245, 249)",
  }}
/>
<div>
  {#if $Error.error}
    <div class="alert alert-error shadow-lg my-3">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          /></svg
        >
        <span>No exite el usuario</span>
      </div>
    </div>
  {/if}
  <div class="flex" on:input={onHandleChange}>
    <input
      type="number"
      placeholder="Digite la cedula del paciente"
      class="input w-full max-w-xs"
      bind:value={$userCitizenshipCard}
    />
    <button class={$buttonStyle} on:click={callPatient}>Buscar Paciente</button>
  </div>
  {#if $Success}
    <div class="alert shadow-lg my-4">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="stroke-info flex-shrink-0 w-6 h-6"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          /></svg
        >
        <span> Paciente: {$user.name} </span>
      </div>
    </div>
  {/if}

  <button class={$buttonSuccess} on:click={handleSuccess}>Aceptar</button>
</div>
