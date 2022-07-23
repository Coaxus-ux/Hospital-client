<script>
  import { getContext, onMount } from "svelte";
  import { writable } from "svelte/store";
  import { navigate } from "svelte-routing";
  export let message = {};
  export let route = "";
  import { getDoctors, getSurgeries, getDepartments } from "../store/Utils.js";
  import { createAppointment } from "../store/Appointments.js";
  const { close } = getContext("simple-modal");
  const selectConsultorium = document.getElementById("selectConsultorium");
  const handleClose = () => {
    close();
  };
  const appointment = writable({
    patientId: message._id,
    doctorId: "",
    sugeryId: "",
    date: "",
    departmentId: "",
  });
  const doctors = writable([]);
  const surgeries = writable([]);
  const valideSurgery = writable([
    {
      _id: "",
      surgeryName: "",
    },
  ]);
  const surgeryready = writable(false);
  const departments = writable([]);
  const cities = writable([]);
  const getData = async () => {
    const doctorResult = await getDoctors();
    const surgeryResult = await getSurgeries();
    const departmentsResult = await getDepartments();

    doctors.set(doctorResult.result);
    surgeries.set(surgeryResult.result);
    departments.set(departmentsResult.result);
  };
  getData();
  const onHandleChange = (e) => {
    appointment.set({
      ...$appointment,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "departmentId") {

      for (let i = 0; i < $departments.length; i++) {
        if ($departments[i]._id === e.target.value)
          cities.set($departments[i].cities);
      }
    }
    if (e.target.name === "city") {
      valideSurgery.set([]);
      for (let i = 0; i < $surgeries.length; i++) {
        if ($surgeries[i].city === e.target.value) {
          valideSurgery.set([
            ...$valideSurgery,
            {
              _id: $surgeries[i]._id,
              surgeryName: $surgeries[i].surgeryName,
            },
          ]);
        }
      }
    }
  };
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const result = await createAppointment($appointment);
    if (result.state) {
      handleClose();
    }
  };
</script>

<div>
  <form
    class="flex flex-col gap-5 items-center justify-center p-10"
    on:change={onHandleChange}
  >
    <h1 class="text-3xl font-bold">Agendar cita</h1>
    <select class="select select-bordered w-full" name="doctorId">
      <option disabled selected>Doctor</option>
      {#each $doctors as doctor}
        <option value={doctor._id}>{doctor.name}</option>
      {/each}
    </select>
    <input
      class="input input-bordered w-full"
      disabled
      type="text"
      name="patientId"
      placeholder={message.name}
    />
    <select class="select select-bordered w-full" name="departmentId">
      <option disabled selected>Departamento</option>
      {#each $departments as department}
        <option value={department._id}>{department.departmentName}</option>
      {/each}
    </select>

    <select class="select select-bordered w-full" name="city">
      <option disabled selected>Ciudad</option>
      {#each $cities as city}
        <option value={city}>{city}</option>
      {/each}
    </select>

    <select class="select select-bordered w-full"  name="sugeryId">
      <option disabled selected id="selectConsultorium">Consultorio</option>
      {#each $valideSurgery as surgery}
        <option value={surgery._id}>{surgery.surgeryName}</option>
      {/each}
    </select>

    <div class="w-full">
      <p class="font-semibold text-lg label">Seleccionar fecha y hora</p>
      <input
        name="date"
        type="datetime-local"
        id="meeting-time"
        min={new Date().toISOString().slice(0, 16)}
        class="w-full input input-bordered"
        required
      />
    </div>
    <button class="btn btn-success w-full mt-5" on:click={onHandleSubmit}>Aceptar</button>
  </form>
</div>
