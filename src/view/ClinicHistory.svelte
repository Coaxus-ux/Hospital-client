<script>
  import { writable } from "svelte/store";
  import { jsPDF } from "jspdf";
  import { getAppointmentData } from "../store/Appointments.js";
import { onMount } from "svelte";
  const clinicData = writable([]);
  const getAppointment = async () => {
    const response = await getAppointmentData();
    console.log(response)
    clinicData.set(response.result);
  };
  getAppointment();

  
  const onClick = () => {
    const doc = new jsPDF('p', 'pt', 'a4');
    let margin = (doc.internal.pageSize.width - 100) / 2;
    let scale = 0.5;
    doc.html(document.getElementById("clinicHistory"),{
      x: margin,
      y: margin,
      html2canvas: { scale: scale },
      callback: function (doc) {
        doc.output('dataurlnewwindow', { filename: 'clinic-history.pdf' });
      }
    })
  };
  
</script>

<div class="max-w-3xl m-auto">
  <div class="overflow-x-auto">
    <table class="table w-full" id="clinicHistory">
      <!-- head -->
      <thead>
        <tr>
          <th>Nombre del doctor</th>
          <th>recomendaciones</th>
          <th>medicina</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        {#each $clinicData as appointment}
        <tr>
        
          <td>{appointment.doctor}</td>
          <td>{appointment.recomendations}</td>
          <td>{appointment.medicine ? appointment.medicine : "Sin receta"}</td>
        </tr>
        {/each}
        
       
      </tbody>
    </table>

  </div>
  <button class="btn btn-primary" on:click={onClick}>Descargar</button>
</div>
