<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  // import { onMount } from "svelte";
  // import { loggedValidator} from "../lib/loggedValidator";
  // onMount(async () => {
  //   await loggedValidator();
  // });
  const doctor = JSON.parse(window.localStorage.getItem("user"));
  import Header from "../lib/Header.svelte";
  import { getAppointmentByDoctor } from "../store/Appointments";
  const appointments = writable([]);

  onMount(async () => {
    const appointmentsResults = await getAppointmentByDoctor({
      doctorId: doctor._id,
    });
    appointments.set(appointmentsResults.result);

    console.log($appointments);
  });
</script>

<div>
  <Header />
  <div class="p-20 bg-slate-100 flex flex-col gap-20">
    <div
      class="flex flex-col md:flex-row w-full justify-between gap-10 lg:gap-20"
    >
      <div class="card bg-white p-10 shadow flex-1">
        <p class="font-bold">Proximas citas</p>
      </div>
      <div class="card bg-white p-10 shadow flex-1">
        <p class="font-bold">Mis pacientes</p>
      </div>
      <div class="card bg-white p-10 shadow flex-1">
        <p class="font-bold">Consultorios</p>
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row w-full justify-between gap-10 md:gap-20"
    >
      <div class="card bg-white p-10 shadow flex-1">
        <p class="font-bold text-xl mb-5">Atajos</p>
        <div class="flex flex-col lg:flex-row gap-10">
          <div class="card bg-white p-10 shadow flex-1 font-semibold">
            Agregar nueva cita
          </div>
          <div class="card bg-white p-10 shadow flex-1 font-semibold">
            Medicamentos
          </div>
        </div>
      </div>
      <div class="card bg-white p-10 shadow flex-1">
        <p class="font-bold text-xl mb-5">Mi consultorio</p>
        <div class="card bg-white p-10 shadow flex-1 font-semibold">
          Consultorio #1
        </div>
      </div>
    </div>
    <div class="card w-full bg-white shadow-xl ">
      <div class="card-body">
        <h2 class="card-title">Próximas citas</h2>
        <div class="flex w-1/2 mb-5">
          <p>
            Ultima actualización hace 1 hora <button
              class="ml-2 bg-[#F6F8FB] rounded-xl px-2 border-2 border-[#DBDDE0] text-[#20BC7E] font-semibold"
              >Actualizar información</button
            >
          </p>
        </div>
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
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              {#each $appointments as appointment}
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
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
