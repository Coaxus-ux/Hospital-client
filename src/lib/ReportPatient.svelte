<script>
  import { writable } from "svelte/store";
  import { getMedicines } from "../store/Utils";
  import { getContext, onMount } from "svelte";
  import {createAppointmentReport, putAppointmentReady, getAppointmentByDoctor} from "../store/Appointments";
  export let appointmentId = "";
  export let patientId = "";
  export let patientName = "";
  const { close } = getContext("simple-modal");
  const doctor = JSON.parse(window.localStorage.getItem("user"));
  const medicines = writable([]);
  const report = writable({
    patientId: patientId,
    doctorId: doctor._id,
    recomendations: "",
    medicines: "",
  });
  const onClick = async () => {
    const res = await createAppointmentReport($report);
    const res2 = await putAppointmentReady(appointmentId);
    getAppointmentByDoctor(doctor._id);
    close();
  };
  const onChange = (e) => {
    report.set({
      ...$report,
      [e.target.name]: e.target.value,
    });
  };

  const getMedicine = async () => {
    const medicinesResult = await getMedicines();
    medicines.set(medicinesResult.result);
    console.log($medicines);
  };
  getMedicine();
</script>

<div>
  <form
  on:change={onChange}
  >
  <p class="m-5">Paciente: {patientName}</p>
  <textarea
    class="textarea textarea-accent w-full"
    name="recomendations"
    placeholder="Recomendaciones"
  />
  <div class="form-control w-full">
    <label class="label">
      <span class="label-text">-No es requerido formular-</span>
      <span class="label-text-alt">Alt label</span>
    </label>
    <select class="select select-bordered" name="medicines">
      <option selected>Selecionar una medicina</option>
      {#each $medicines as medicine}
        <option value={medicine.medicineName}
          >{medicine.medicineName} - {medicine.medicineDescription}</option
        >
      {/each}
    </select>
  </div>
</form>
  <button class="btn btn-primary w-full mt-10" on:click={onClick}>
    crear reporte
  </button>
</div>
