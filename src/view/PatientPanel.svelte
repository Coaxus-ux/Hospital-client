<script>
// @ts-nocheck

  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { loggedValidator } from "../lib/loggedValidator";
  import {
    getAppointmentByuser,
    getAppointmentData,
    cancelAppointment,
  } from "../store/Appointments";
  import Header from "../lib/Header.svelte";
  onMount(async () => {
    await loggedValidator();
  });
  const user = JSON.parse(window.localStorage.getItem("user"));

  const appointments = writable({
    state: false,
    results: [],
  });
  const appointmentData = writable({
    state: false,
    results: [],
  });

  const getAppointments = async () => {
    const appointmentsResults = await getAppointmentByuser({
      patientId: user._id,
    });
    const appointmentDataResults = await getAppointmentData(user._id);
    appointments.set({
      state: appointmentsResults.state,
      results: appointmentsResults.result,
    });
    appointmentData.set({
      state: appointmentDataResults.state,
      results: appointmentDataResults.result,
    });
  };
  getAppointments();
  const cancelAppointmentHandler = async (id) => {
    const cancelAppointmentResult = await cancelAppointment(id);
    getAppointments();
  };
</script>

<div>
  <Header />
  <div class="p-20 flex flex-col gap-10 bg-base-200/50">
    <div class="card bg-base-100 shadow p-10 gap-10">
      <h2 class="text-2xl font-bold">Mis datos</h2>
      <div class="flex flex-col md:flex-row items-center gap-10">
        <div class="flex flex-row flex-wrap gap-10 items-center">
          <p class="font-bold text-lg flex-1 text-center">{user.name}</p>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
    <div class="card bg-base-100 shadow w-full">
      <div class="card bg-base-100 shadow py-10 px-20 gap-10">
        <div class="flex flex-row items-center gap-10 justify-center">
          <div class="flex flex-col flex-wrap gap-10 items-center">
            <p class="font-bold text-lg">Mis recomendaciones</p>
            <div />
            {#if $appointmentData.state === false}
              <h2 class="text-2xl font-bold">No hay historicas</h2>
            {:else}
              <table class="table w-full">
                <thead>
                  <tr>
                    <th class="text-center">Doctor</th>
                    <th class="text-center">Recomendacion</th>
                    <th class="text-center">Medicina</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- row 1 -->
                  {#each $appointmentData.results as appointment}
                    <tr>
                      <td class="text-center">{appointment.doctor}</td>
                      <td class="text-center">{appointment.recomendations}</td>
                      <td class="text-center">
                        {appointment.medicine
                          ? appointment.medicine
                          : "Sin receta"}
                      </td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            {/if}
          </div>
        </div>
      </div>
    </div>
    <div class="card bg-base-100 shadow w-full">
      <div class="card-body">
        <h2 class="card-title">Mis Citas</h2>

        <div>
          <div class="overflow-x-auto ">
            {#if $appointments.state === false}
              <h2 class="text-2xl font-bold my-10">No hay citas</h2>
            {:else}
              <table class="table w-full">
                <thead>
                  <tr>
                    <th class="text-center">Doctor</th>
                    <th class="text-center">Departamento</th>
                    <th class="text-center">Ciudad</th>
                    <th class="text-center">Consultorio</th>
                    <th class="text-center">Fecha</th>
                    <th class="text-center">Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- row 1 -->
                  {#each $appointments.results as appointment}
                    <tr>
                      <td class="text-center">{appointment.doctor}</td>
                      <td class="text-center">{appointment.department}</td>
                      <td class="text-center">{appointment.city}</td>
                      <td class="text-center">{appointment.surgery}</td>
                      <td class="text-center"
                        >{new Date(
                          Date.parse(appointment.date)
                        ).toLocaleString()}</td
                      >
                      <td class="text-center">
                        <button
                          on:click={cancelAppointmentHandler(
                            appointment._id
                          )}
                          class="btn btn-warning"
                        >
                          Cancelar
                        </button>
                      </td></tr
                    >
                  {/each}
                </tbody>
              </table>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
