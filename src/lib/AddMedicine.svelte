<script>
  import { getContext, onMount } from "svelte";
  import { writable } from "svelte/store";
  export let message = {};
  export let route = "";
  import {
    addMedicine
  } from "../store/Utils.js";
  import { createAppointment } from "../store/Appointments.js";
  const { close } = getContext("simple-modal");
  const selectConsultorium = document.getElementById("selectConsultorium");

  const user = writable(JSON.parse(window.localStorage.getItem("user")));
  const handleClose = () => {
    close();
  };

  const surgery = writable({
    medicineName: "",
    medicineType: "",
    medicineDescription: "",
  });
  const departments = writable([]);

  const onHandleChange = (e) => {
    surgery.set({
      ...$surgery,
      [e.target.name]: e.target.value,
    });
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const res = await addMedicine($surgery);
    if (res.state) {
      handleClose();
    }
  };
</script>

<div>
  <form
    class="flex flex-col gap-5 items-center justify-center p-10"
    on:change={onHandleChange}
  >
    <h1 class="text-3xl font-bold">Agregar Medicina</h1>
    <input
      type="text"
      name="medicineName"
      placeholder="Nombre de la medicina"
      class="input input-bordered input-accent w-full"
    />
    <input
      type="text"
      name="medicineType"
      placeholder="Tipo de la medicina"
      class="input input-bordered input-accent w-full"
    />
    <input
      type="text"
      name="medicineDescription"
      placeholder="Descripcion de la medicina"
      class="input input-bordered input-accent w-full"
    />

    <button class="btn btn-success w-full mt-5" on:click={onHandleSubmit}
      >Aceptar</button
    >
  </form>
</div>
