<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  /* import { onMount } from "svelte";
    import { loggedValidator} from "../lib/loggedValidator";
    onMount(async () => {
      await loggedValidator();
    });
    const JWT = JSON.parse(localStorage.getItem("user")); */
  const user = JSON.parse(window.localStorage.getItem("user"));
  import Header from "../lib/Header.svelte";

  import { getAppointmentByuser } from "../store/Appointments";
  const appointments = writable([]);

  onMount(async () => {
    const appointmentsResults = await getAppointmentByuser({
      patientId: user._id,
    });
    appointments.set(appointmentsResults.result);

    console.log($appointments);
  });
</script>

<div>
  <Header />
  <div class="p-20 flex flex-col gap-10 bg-base-200/50">
    <div class="card bg-base-100 shadow p-10 gap-10">
      <h2 class="text-2xl font-bold">Mis datos</h2>
      <div class="flex flex-col md:flex-row items-center gap-10">
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src="https://placeimg.com/192/192/people" alt="g" />
          </div>
        </div>
        <div class="flex flex-row flex-wrap gap-10 items-center">
          <p class="font-bold text-lg flex-1 text-center">{user.name}</p>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
    <div class="grid md:grid-cols-3 gap-10">
      <div class="card bg-base-100 shadow p-20 gap-10">
        <div class="flex flex-row items-center gap-10 justify-center">
          <div class="flex flex-row flex-wrap gap-10 items-center">
            <p class="font-bold text-lg">Mis ordenes</p>
          </div>
        </div>
      </div>
      <div class="card bg-base-100 shadow p-20 gap-10">
        <div class="flex flex-row items-center gap-10 justify-center">
          <div class="flex flex-row flex-wrap gap-10 items-center">
            <p class="font-bold text-lg">Mi diagnostico</p>
          </div>
        </div>
      </div>
      <div class="card bg-base-100 shadow p-20 gap-10">
        <div class="flex flex-row items-center gap-10 justify-center">
          <div class="flex flex-row flex-wrap gap-10 items-center">
            <p class="font-bold text-lg">Mis citas</p>
          </div>
        </div>
      </div>
      <div class="card bg-base-100 shadow py-10 px-20 gap-10">
        <div class="flex flex-row items-center gap-10 justify-center">
          <div class="flex flex-row flex-wrap gap-10 items-center">
            <p class="font-bold text-lg">Mis citas</p>
          </div>
        </div>
      </div>
      <div class="card bg-base-100 shadow py-10 px-20 gap-10">
        <div class="flex flex-row items-center gap-10 justify-center">
          <div class="flex flex-row flex-wrap gap-10 items-center">
            <p class="font-bold text-lg">Mis citas</p>
          </div>
        </div>
      </div>
      <div class="card bg-base-100 shadow py-10 px-20 gap-10">
        <div class="flex flex-row items-center gap-10 justify-center">
          <div class="flex flex-row flex-wrap gap-10 items-center">
            <p class="font-bold text-lg">Mis citas</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card bg-base-100 shadow w-full">
      <div class="card-body">
        <h2 class="card-title">Mis Citas</h2>
        <div>
          <div class="overflow-x-auto">
            <table class="table w-full">
              <!-- head -->
              <thead>
                <tr>
                  <th class="text-center">Doctor</th>
                  <th class="text-center">Departamento</th>
                  <th class="text-center">Ciudad</th>
                  <th class="text-center">Cirugia</th>
                  <th class="text-center">Fecha</th>
                </tr>
              </thead>
              <tbody>
                <!-- row 1 -->
                {#each $appointments as appointment}
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
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
