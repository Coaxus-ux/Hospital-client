<script>
  import { setContext } from "svelte";
  import Header from "../lib/Header.svelte";
</script>

<Header />
<div class="bg-[#F1F1F1]">
  <main
    class="flex justify-between bg-[url('../src/assets/stethoscope.svg')] bg-no-repeat"
  >
    <div class=" m-auto p-20">
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


  <div
    class="flex flex-col lg:flex-row justify-center md:p-20 p-10 gap-10 bg-slate-50"
    id="about"
  >
    <div class="flex-1 d-none lg:flex">
      <img src="../src/assets/card4.jpg" alt="" />
    </div>
    <div class="flex flex-col flex-1 gap-10 justify-between">
      <p class="text-yellow-500 text-xl font-semibold">¿Quienes somos?</p>
      <p class="text-5xl font-bold">Historia de MyHospital</p>
      <p class="text-xl">
        Medifine es un proveedor de asistencia sanitaria en línea que ofrece soluciones de salud y
        asesoramiento a más de 30.00.000 pacientes en todo Bangladesh. <br /><br />
        Con un equipo de médicos y farmacéuticos licenciados, Medifine tiene como objetivo proporcionar
        servicios integrales de consulta médica para pacientes y médicos por igual.
      </p>
      <p class="text-green-500 text-2xl font-bold">Saber más -></p>
    </div>
  </div>
  <div class="flex flex-col gap-10 py-10 bg-slate-50" id="services">
    <p class="text-center text-yellow-500 text-xl font-semibold">
      Nuestros servicios
    </p>
    <p class="text-5xl font-bold text-center lg:w-5/12 p-10 mx-auto leading-snug">
      Ofrecemos diferentes servicios para mejorar su salud
    </p>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:p-20 p-10 justify-center items-stretch gap-10"
    >
    <div class="card bg-white shadow-xl w-full">
      <figure class="px-10 pt-10">
        <img src="../src/assets/solid_user-doctor.svg" alt="a" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Médico experto</h2>
        <p>Contamos con un equipo de expertos médicos especialistas.</p> 
      </div>
    </div>
      <div class="card bg-white shadow-xl w-full">
        <figure class="px-10 pt-10">
          <img src="../src/assets/solid_user-doctor.svg" alt="a" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Psicologos expertos</h2>
          <p>Contamos con un equipo de expertos psicologos especialistas.</p> 
        </div>
      </div>
      <div class="card bg-white shadow-xl w-full">
        <figure class="px-10 pt-10">
          <img src="../src/assets/fontisto_blood-drop.svg" alt="a" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Patología</h2>
          <p>Médico altamente especializado en MD O DO.</p> 
        </div>
      </div>
      <div class="card bg-white shadow-xl w-full">
        <figure class="px-10 pt-10">
          <img src="../src/assets/medical-icon_i-dental.svg" alt="a" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Salud Oral</h2>
          <p>Mantenga la salud general de su boca.</p>
        </div>
      </div>
      <div class="card bg-white shadow-xl w-full">
        <figure class="px-10 pt-10">
          <img src="../src/assets/medical-icon_i-cardiology.svg" alt="a" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Cardiologia</h2>
          <p>Contamos con todo un equipo expertos en cardiologia</p>
        </div>
      </div>
      <div class="card bg-white shadow-xl w-full">
        <figure class="px-10 pt-10">
          <img src="../src/assets/healthicons_neurology.svg" alt="a" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Medicina</h2>
          <p>Farmacéutico especialista de la mejor medicina</p>
        </div>
      </div>
      <div class="card bg-white shadow-xl w-full">
        <figure class="px-10 pt-10">
          <img src="../src/assets/healthicons_neurology.svg" alt="a" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Neurologia</h2>
          <p>Tenemos un grupo de neurologos expertos.</p>
        </div>
      </div>
      <div class="card bg-white shadow-xl w-full">
        <figure class="px-10 pt-10">
          <img src="../src/assets/fa_ambulance.svg" alt="a"/>
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Ambulancias</h2>
          <p>24/7 servicio de ambulancia de emergencia</p>
        </div>
      </div>
    </div>
  </div>
  <footer
    class="flex flex-col md:flex-row p-20 bg-white justify-around items-start gap-10"
  >
    <div class="flex flex-col gap-10">
      <p
        class="bg-[#22C987] p-2 px-10 rounded-lg text-white font-semibold lg:w-5/12 text-center"
      >
        MyHospital
      </p>
      <p>
        No hay nada en esta historia que nos haga pensar que estamos soñando con la buena
        salud.
      </p>
      <div class="flex gap-5 justify-center lg:justify-start">
        <p class="text-blue-500">Facebook</p>
        <p class="text-cyan-400">Twitter</p>
        <p class="text-orange-700">Instagram</p>
      </div>
    </div>
    <div class="w-full md:w-auto flex flex-col gap-5">
      <p class="text-2xl font-bold mb-5">Contact us</p>
      <p>594 E. Whitemarsh Street, Mchenry, IL 60050</p>
      <p>+880 123 456 789</p>
      <p>+880 123 456 789</p>
    </div>
    <div class="w-full md:w-auto flex flex-col gap-5">
      <p class="text-2xl font-bold mb-5">Navigate</p>
 
      <p>Nuestras soluciones</p>
      <p>Carreras en el area</p>
      <p>Noticias</p>
    </div>
    <div class="w-full md:w-auto flex flex-col gap-5">
      <p class="text-2xl font-bold mb-5">Contactanos</p>
      <p>Neiva, Huila - Colombia</p>
      <p>Casa de marino cra 6w</p>
      <p>+1 (800) 580-8239</p>
    </div>
  </footer>
</div>
