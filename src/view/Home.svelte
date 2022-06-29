<script>
  import { setContext } from "svelte";
  import Header from "../lib/Header.svelte";
  import Footer from "../lib/Footer.svelte";
</script>

<Header />
<div class="bg-[#F1F1F1]">
  <main
    class="flex justify-between bg-[url('../src/assets/stethoscope.svg')] bg-no-repeat px-3 mx-5"
  >
    <div class=" m-auto ">
      <h1 class="text-6xl font-extrabold">
        Salud de calidad, soluciones y cuidados para todo el mundo
      </h1>
      <div class="pt-10 ">
        <p class="text-lg opacity-75 font-medium">
          Nostros estamos disponibles 24/7 para ti, estamos enfocados en tu
          bienestar
        </p>
        <p class="text-lg opacity-75 font-medium ">
          Puedes pedir una cita con nosotros en cualquien momento
        </p>
      </div>
      <div class="mt-10">
        <a
          class="uppercase bg-[#20BC7E] text-white font-bold rounded-full py-4 px-10"
          href="/cambiarruta"
        >
          Saca tu cita
        </a>
      </div>
    </div>
    <div class="hidden lg:block">
      <img src="../src/assets/doctor.png" alt="" class="object-cover" />
    </div>
  </main>
  <section class="px-3 mx-auto my-12 max-w-7xl h-screen">
    <div class="flex flex-col justify-center text-center items-center">
      <p class="text-[#FFB87A] font-bold text-lg my-3">Nuestros Servicios</p>
      <h1 class="font-bold text-5xl">
        MyHospital ofrece diferentes servicios para mejorar tu salud
      </h1>
      <hr class="bg-[#FFB87A] w-80 h-0.5 rounded-lg my-6" />
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-1 ms:grid-rows-2 lg:grid-rows-3 gap-5 mx-auto h-10/12 w-10/12"
    >
      <div class="box ">
        <img src="../src/assets/solid_user-doctor.svg" alt="" class="w-16" />
        <h2 class="text-2xl font-bold my-2">Consultas</h2>
        <p class="text-lg text-gray-400 p-2">
          Contamos con un equipo de expertos médico especialista.
        </p>
      </div>
      <div class="box ">
        <img
          src="../src/assets/healthicons_neurology.svg"
          alt=""
          class="w-16"
        />
        <h2 class="text-2xl font-bold my-2">Diagnostico</h2>
        <p class="text-lg text-gray-400 p-2">
          Los mejores equipos para diagnosticarte.
        </p>
      </div>
      <div class="box ">
        <img src="../src/assets/fontisto_blood-drop.svg" alt="" class="w-16" />
        <h2 class="text-2xl font-bold my-2">Patologia</h2>
        <p class="text-lg text-gray-400 p-2">
          Medicos especialistas en tu area de patologia.
        </p>
      </div>
      <div class="box ">
        <img
          src="../src/assets/medical-icon_i-cardiology.svg"
          alt=""
          class="w-16"
        />
        <h2 class="text-2xl font-bold my-2">Cardiologia</h2>
        <p class="text-lg text-gray-400 p-2">
          Contamos con un equipo de expertos médico especialista.
        </p>
      </div>
      <div class="box ">
        <img
          src="../src/assets/ri_medicine-bottle-fill.svg"
          alt=""
          class="w-16"
        />
        <h2 class="text-2xl font-bold my-2">Medicina</h2>
        <p class="text-lg text-gray-400 p-2">
          especialistas para sugerir las mejores medicinas.
        </p>
      </div>
      <div class="box ">
        <img
          src="../src/assets/medical-icon_i-dental.svg"
          alt=""
          class="w-16"
        />
        <h2 class="text-2xl font-bold my-2">Odontologia</h2>
        <p class="text-lg text-gray-400 p-2">
          Nuestros equipos de odontologia estan altamente calificados.
        </p>
      </div>
    </div>
  </section>
  <Footer />
</div>
