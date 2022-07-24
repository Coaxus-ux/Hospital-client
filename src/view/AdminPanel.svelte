<script>
  import { onMount } from "svelte";

  import { writable } from "svelte/store";

  /* import { onMount } from "svelte";
    import { loggedValidator} from "../lib/loggedValidator";
    onMount(async () => {
      await loggedValidator();
    }); */
  import Header from "../lib/Header.svelte";

  import { getDoctors, getSurgeries, getMedicines } from "../store/Utils";
  import { getAppointment } from "../store/Appointments";

  const doctors = writable([]);
  const surgerys = writable([]);
  const medicines = writable([]);
  const appointments = writable([]);

  onMount(async () => {
    const doctorResults = await getDoctors();
    doctors.set(doctorResults.result);
    const surgerysResults = await getSurgeries();
    surgerys.set(surgerysResults.result);
    const medicinesResults = await getMedicines();
    medicines.set(medicinesResults.result);
    const appointmentsResults = await getAppointment();
    appointments.set(appointmentsResults.result);

    console.log($appointments);
  });
</script>

<div>
  <Header />

  <div
    class="flex flex-col gap-10 justify-center items-center p-20 bg-base-200/50"
  >
    <div class="flex justify-evenly flex-wrap">
      <a
        class="card w-56 bg-white text-neutral-content shadow-xl hover:bg-green-500 transition duration-300 m-4"
        href="/appointment"
      >
        <div
          class="card-body items-center text-center text-black flex flex-row "
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M17.7071 2.29289C17.3166 1.90237 16.6834 1.90237 16.2929 2.29289L14 4.58579L12.7071 3.29289C12.3166 2.90237 11.6834 2.90237 11.2929 3.29289L5.29289 9.29289C4.90237 9.68342 4.90237 10.3166 5.29289 10.7071C5.68342 11.0976 6.31658 11.0976 6.70711 10.7071L12 5.41421L12.5858 6L10.2929 8.29289L3.29289 15.2929C3.10536 15.4804 3 15.7348 3 16V20C3 20.5523 3.44772 21 4 21H8C8.26522 21 8.51957 20.8946 8.70711 20.7071L15.7071 13.7071L21.7071 7.70711C22.0976 7.31658 22.0976 6.68342 21.7071 6.29289L17.7071 2.29289ZM14.7071 6.70711L17 4.41421L19.5858 7L15 11.5858L12.4142 9L14.7071 6.70711ZM5 16.4142L11 10.4142L13.5858 13L7.58579 19H5V16.4142Z"
              fill="#0D0D0D"
            />
          </svg>
          Crear Nueva cita
        </div>
      </a>
      <button
        class="card w-56 bg-white text-neutral-content shadow-xl hover:bg-green-500 transition duration-300 m-4"
      >
        <div
          class="card-body items-center text-center text-black flex flex-row "
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M10 4C7.79086 4 6 5.79086 6 8C6 10.2091 7.79086 12 10 12C12.2091 12 14 10.2091 14 8C14 5.79086 12.2091 4 10 4ZM4 8C4 4.68629 6.68629 2 10 2C13.3137 2 16 4.68629 16 8C16 11.3137 13.3137 14 10 14C6.68629 14 4 11.3137 4 8ZM19 11C19.5523 11 20 11.4477 20 12V13H21C21.5523 13 22 13.4477 22 14C22 14.5523 21.5523 15 21 15H20V16C20 16.5523 19.5523 17 19 17C18.4477 17 18 16.5523 18 16V15H17C16.4477 15 16 14.5523 16 14C16 13.4477 16.4477 13 17 13H18V12C18 11.4477 18.4477 11 19 11ZM6.5 18C5.24054 18 4 19.2135 4 21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21C2 18.3682 3.89347 16 6.5 16H13.5C16.1065 16 18 18.3682 18 21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21C16 19.2135 14.7595 18 13.5 18H6.5Z"
              fill="#0D0D0D"
            />
          </svg>
          Agregar Paciente
        </div>
      </button>
      <button
        class="card w-56 bg-white text-neutral-content shadow-xl hover:bg-green-500 transition duration-300 m-4"
      >
        <div
          class="card-body items-center text-center text-black flex flex-row "
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M11.3356 2.25259C11.7145 1.9158 12.2855 1.9158 12.6644 2.25259L21.6644 10.2526C22.0772 10.6195 22.1143 11.2516 21.7474 11.6644C21.3805 12.0771 20.7484 12.1143 20.3356 11.7474L20 11.4491V19C20 20.1046 19.1046 21 18 21H6.00001C4.89544 21 4.00001 20.1046 4.00001 19V11.4491L3.66437 11.7474C3.25159 12.1143 2.61952 12.0771 2.2526 11.6644C1.88568 11.2516 1.92286 10.6195 2.33565 10.2526L11.3356 2.25259ZM6.00001 9.67129V19H9.00001V14C9.00001 13.4477 9.44773 13 10 13H14C14.5523 13 15 13.4477 15 14V19H18V9.67129L12 4.33795L6.00001 9.67129ZM13 19V15H11V19H13Z"
              fill="#0D0D0D"
            />
          </svg>
          Crear consultorio
        </div>
      </button>
    </div>

    <div class="card w-full bg-white shadow-xl ">
      <div class="card-body">
        <h2 class="card-title">Doctores disponibles</h2>
        <div class="flex w-1/2">
          <p>
            Ultima actualización hace 1 hora <button
              class="ml-2 bg-[#F6F8FB] rounded-xl px-2 border-2 border-[#DBDDE0] text-[#20BC7E] font-semibold"
              >Actualizar información</button
            >
          </p>
        </div>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <!-- head -->
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Cedula</th>
                <th>numero profesional</th>
                <th>Especialidad</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              {#each $doctors as doctor}
                <tr>
                  <td>{doctor.name}</td>
                  <td>{doctor.lastName}</td>
                  <td>{doctor.citizenshipCard}</td>
                  <td>{doctor.emploeeId}</td>
                  <td>{doctor.userType}</td>
                  <td>{doctor.isActive}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row w-full justify-between gap-10">
      <div class="card bg-base-100 shadow-xl flex-1">
        <div class="card-body">
          <h2 class="card-title">Consultorios disponibles</h2>
          <div>
            <div class="overflow-x-auto">
              <table class="table w-full">
                <!-- head -->
                <thead>
                  <tr>
                    <th>Nombre consultorio</th>
                    <th>Departamento</th>
                    <th>Ciudad</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- row 1 -->
                  {#each $surgerys as surgery}
                    <tr>
                      <td>{surgery.surgeryName}</td>
                      <td>{surgery.departmentId}</td>
                      <td>{surgery.city}</td>
                      <td>{surgery.status}</td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 shadow-xl flex-1">
        <div class="card-body">
          <h2 class="card-title">Medicamentos disponibles</h2>
          <div>
            <div class="overflow-x-auto">
              <table class="table w-full">
                <!-- head -->
                <thead>
                  <tr>
                    <th>Nombre medicamento</th>
                    <th>Tipo</th>
                    <th>Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- row 1 -->
                  {#each $medicines as medicine}
                    <tr>
                      <td>{medicine.medicineName}</td>
                      <td>{medicine.medicineType}</td>
                      <td>{medicine.medicineDescription}</td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card bg-base-100 shadow-xl w-full">
      <div class="card-body">
        <h2 class="card-title">Citas pacientes</h2>
        <div>
          <div class="overflow-x-auto">
            <table class="table w-full">
              <!-- head -->
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Cedula</th>
                  <th>Doctor</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                <!-- row 1 -->
                {#each $appointments as appointment}
                  <tr>
                    <td>{appointment.patient}</td>
                    <td>{appointment.patientId}</td>
                    <td>{appointment.doctor}</td>
                    <td
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
