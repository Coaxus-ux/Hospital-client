<script>
  import LeftImage from "../lib/LeftImage.svelte";
</script>

<div
  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 grid-flow-row w-auto h-screen"
>
  <LeftImage srcImage="../src/assets/logo_login.svg" />
  <div
    class="bg-white gap-10 flex flex-col mx-auto col-span-1 md:col-span-2 align-middle content-center justify-center w-9/12 "
  >
    <div>
      <p class="text-center text-5xl font-bold text-black">
        Registro de usuarios
      </p>
    </div>

    <p class="text-center text-xl font-semibold text-black">
      Seleccione el tipo de usuario a registrar
    </p>
    <div
      class="flex gap-3 flex-col mx-auto content-center justify-center w-8/12 text-black"
    >
      <a
        class="bg-green-400 text-lg drop-shadow-md duration-500 hover:bg-green-600 font-normal py-2 px-4 text-center hover:text-black hover:no-underline rounded focus:outline-none focus:shadow-outline"
        href="/register/admin"
      >
        Administrador
      </a>
      <a
        class="mainButtons"
        href="/register/doctor"
      >
        Medico
      </a>
      <a
        class="mainButtons"
        href="/register/patient"
      >
        Paciente
      </a>
      <a
        class="my-2 bg-gray-300 drop-shadow-md duration-500 hover:bg-gray-400 font-semibold py-2 px-4 text-center hover:text-black hover:no-underline rounded focus:outline-none focus:shadow-outline"
        href="/login"
      >
        Volver
      </a>
    </div>
  </div>
</div>
