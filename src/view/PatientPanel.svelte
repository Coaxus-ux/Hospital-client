<script>
    /* import { onMount } from "svelte";
    import { loggedValidator} from "../lib/loggedValidator";
    onMount(async () => {
      await loggedValidator();
    });
    const JWT = JSON.parse(localStorage.getItem("user")); */
    import Header from "../lib/Header.svelte";
</script>

<div>
  <Header />
  <div class="p-20 flex flex-col gap-10 bg-base-200/50">
    <div class="card bg-base-100 shadow p-10 gap-10">
      <h2 class="text-2xl font-bold">Mis datos</h2>
      <div class="flex flex-row items-center gap-10">
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src="https://placeimg.com/192/192/people" alt="g" />
          </div>
        </div>
        <div class="flex flex-row flex-wrap gap-10 items-center">
          <p class="font-bold text-lg">Simón Jiménez</p>
          <p>Correo@correo.com</p>
          <p>Telefono</p>
          <p>Dirección</p>
          <p>Tipo de sangre</p>
          <p>Estado civil</p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-10">
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
                  <th />
                  <th>Doctor</th>
                  <th>Consultorio</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                <!-- row 1 -->
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>