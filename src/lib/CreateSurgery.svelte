<script>
  import { getContext, onMount } from "svelte";
  import { writable } from "svelte/store";
  import { navigate } from "svelte-routing";
  export let message = {};
  export let route = "";
  import { getDoctors, getSurgeries, getDepartments, createSurgery } from "../store/Utils.js";
  import { createAppointment } from "../store/Appointments.js";
  const { close } = getContext("simple-modal");
  const selectConsultorium = document.getElementById("selectConsultorium");

  const user = writable(JSON.parse(window.localStorage.getItem("user")));
  const handleClose = () => {
    close();
  };

  const surgery = writable({
    surgeryName: "",
    departmentId: "",
    city: "",
 
  });
  const departments = writable([]);
  const cities = writable([]);
  const getData = async () => {
    const departmentsResult = await getDepartments();
    departments.set(departmentsResult.result);
  };
  getData();
  const onHandleChange = (e) => {
    surgery.set({
      ...$surgery,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "departmentId") {
      for (let i = 0; i < $departments.length; i++) {
        if ($departments[i]._id === e.target.value)
          cities.set($departments[i].cities);
      }
    }
  };
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const result = await createSurgery($surgery);
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
    <h1 class="text-3xl font-bold">Crear consultorio</h1>
    <input
      type="text"
        name="surgeryName"
      placeholder="Nombre del consultorio"
      class="input input-bordered input-accent w-full"
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

    <button class="btn btn-success w-full mt-5" on:click={onHandleSubmit}
      >Aceptar</button
    >
  </form>
</div>
