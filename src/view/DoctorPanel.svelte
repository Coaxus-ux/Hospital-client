<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import Modal, { bind } from "svelte-simple-modal";
  import Header from "../lib/Header.svelte";
  import {
    getAppointmentByDoctor,
    cancelAppointment,
  } from "../store/Appointments";
  import Patient from "../lib/PatientModal.svelte";
  import ReportPatient from "../lib/ReportPatient.svelte";
  // import { onMount } from "svelte";
  // import { loggedValidator} from "../lib/loggedValidator";
  // onMount(async () => {
  //   await loggedValidator();
  // });
  const doctor = JSON.parse(window.localStorage.getItem("user"));
  const modal = writable(null);
  const reportModal = writable(null);
  const appointments = writable({
    state: false,
    results: [],
  });
  const buttonCancelStyles = writable("btn btn-warning");
  const showModal = () =>
    modal.set(
      bind(Patient, {
        message: "",
      })
    );
  const OnHandleClick = (e) => {
    showModal();
  };
  const showModalReport = (id, name, patientId) =>
    reportModal.set(
      bind(ReportPatient, {
        appointmentId: id,
        patientId: patientId,
        patientName: name,
      })
    );
  const OnHandleClickReport = (id, name, patientId) => {
    console.log(id);
    showModalReport(id, name, patientId);
  };

  const getAppointments = async () => {
    const appointmentsResults = await getAppointmentByDoctor({
      doctorId: doctor._id,
    });
    console.log(appointmentsResults);
    appointments.set({
      state: appointmentsResults.state,
      results: appointmentsResults.result,
    });
  };
  getAppointments();
  const cancelAppointmentHandler = async (id) => {
    const cancelAppointmentResult = await cancelAppointment(id);
    getAppointments();
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
<Modal
  closeOnOuterClick={true}
  closeButton={true}
  show={$reportModal}
  styleWindow={{
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.15 )",
    backgroundColor: "rgb(241, 245, 249)",
  }}
/>
<div>
  <Header />
  <div class="p-20 bg-slate-100 flex flex-col gap-20">
    <div
      class="flex flex-col md:flex-row w-full justify-between gap-10 md:gap-20"
    >
      <div class="card bg-white p-10 shadow flex-1">
        <p class="font-bold text-xl mb-5">Atajos</p>
        <div class="flex flex-col lg:flex-row gap-10">
          <button
            on:click={OnHandleClick}
            class="card bg-white p-10 shadow flex-1 font-semibold"
          >
            Agregar cita
          </button>
        </div>
      </div>
      
    </div>
    <div class="card w-full bg-white shadow-xl ">
      <div class="card-body">
        <h2 class="card-title">citas</h2>

        {#if !$appointments.state}
          <h2 class="text-xl m-10">Sin citas</h2>
        {:else}
          <div class="overflow-x-auto shadow rounded-lg">
            <table class="table w-full">
              <!-- head -->
              <thead>
                <tr>
                  <th class="text-center">Nombre del paciente</th>
                  <th class="text-center">Email del paciente</th>
                  <th class="text-center">Teléfono del paciente</th>
                  <th class="text-center">Fecha</th>
                  <th class="text-center">Status</th>
                  <th class="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {#each $appointments.results as appointment}
                  <tr>
                    <td class="text-center">{appointment.patient}</td>
                    <td class="text-center">{appointment.patientEmail}</td>
                    <td class="text-center">{appointment.patientPhone}</td>
                    <td class="text-center"
                      >{new Date(
                        Date.parse(appointment.date)
                      ).toLocaleString()}</td
                    >
                    <td class="text-center">{appointment.state}</td>
                    <td class="text-center">
                      <button
                        on:click={cancelAppointmentHandler(appointment._id)}
                        class={appointment.state === "Lista" ||
                        appointment.state === "Cancelada"
                          ? "btn btn-warning btn-disabled"
                          : "btn btn-warning "}
                      >
                        Cancelar
                      </button>
                      <button
                        class={appointment.state === "Lista" ||
                        appointment.state === "Cancelada"
                          ? "btn btn-primary btn-disabled"
                          : "btn btn-primary "}
                        on:click={OnHandleClickReport(
                          appointment._id,
                          appointment.patient,
                          appointment.patientId
                        )}
                      >
                        Generar reporte
                      </button>
                    </td></tr
                  >
                {/each}
              </tbody>
            </table>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
