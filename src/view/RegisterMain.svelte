<script>
  import LeftImage from "../lib/LeftImage.svelte";
</script>

<div
  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 grid-flow-row w-auto h-screen"
>
  <LeftImage srcImage="./assets/logo_login.svg" />
  <div
    class="bg-white flex flex-col mx-auto col-span-1 md:col-span-2  content-center justify-center  w-9/12"
  >
    <div>
      <p class="text-center text-4xl my-12  font-bold text-black">
        Registro de usuarios
      </p>
    </div>

    <p class="text-center  font-bold text-black">
      Seleccione el tipo de usuario a registrar
    </p>

    <div
      class="mt-8 flex flex-col mx-auto  content-center justify-center w-8/12 text-black"
    >
      <a
        class="bg-blue-300 drop-shadow-md duration-500 hover:bg-blue-400 font-bold py-2 px-4 text-center hover:text-black hover:no-underline rounded focus:outline-none focus:shadow-outline"
        href="/register/admin"
      >
        Administrador
      </a>
      <a
        class="my-3 bg-blue-300 drop-shadow-md duration-500 hover:bg-blue-400 font-bold py-2 px-4 text-center hover:text-black hover:no-underline rounded focus:outline-none focus:shadow-outline"
        href="/register/doctor"
      >
        Medico
      </a>
      <a
        class="bg-blue-300 drop-shadow-md duration-500 hover:bg-blue-400 font-bold py-2 px-4 text-center hover:text-black  hover:no-underline rounded focus:outline-none focus:shadow-outline"
        href="/register/patient"
      >
        Paciente
      </a>
    </div>
  </div>
</div>