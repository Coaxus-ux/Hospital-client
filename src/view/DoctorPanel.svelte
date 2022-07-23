<script>
    // import { onMount } from "svelte";
    // import { loggedValidator} from "../lib/loggedValidator";
    // onMount(async () => {
    //   await loggedValidator();
    // });
    import Header from "../lib/Header.svelte";
  </script>

  <div>
    <Header />
    <div class="p-20 bg-slate-100 flex flex-col gap-20">
      <div class="flex flex-wrap w-full justify-between gap-20">
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
      <div class="flex flex-wrap w-full justify-between gap-20">
        <div class="card bg-white p-10 shadow flex-1">
          <p class="font-bold text-xl mb-5">Atajos</p>
          <div class="flex flex-wrap gap-10">
            <div class="card bg-white p-10 shadow flex-1 font-semibold">Agregar nueva cita</div>
            <div class="card bg-white p-10 shadow flex-1 font-semibold">Medicamentos</div>
          </div>
        </div>
        <div class="card bg-white p-10 shadow flex-1">
          <p class="font-bold text-xl mb-5">Mi consultorio</p>
            <div class="card bg-white p-10 shadow flex-1 font-semibold">Consultorio #1</div>
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
                  <th />
                  <th class="text-center">Nombre del paciente</th>
                  <th class="text-center">Email del paciente</th>
                  <th class="text-center">Teléfono del paciente</th>
                  <th class="text-center">Fecha</th>
                  <th class="text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                <!-- row 1 -->
                <tr>
                  <th class="text-center">1</th>
                  <td class="text-center">Cy Ganderton</td>
                  <td class="text-center">Quality Control Specialist</td>
                  <td class="text-center">Blue</td>
                  <td class="text-center">Blue</td>
                  <td class="text-center"><p class="bg-warning p-2 rounded-full text-center">Esperando</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>