<script>
  import LeftImage from "../lib/LeftImage.svelte";
  export let typeUser;
</script>

<div
  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 grid-flow-row w-auto h-screen"
>
  <LeftImage srcImage="./assets/logo_login.svg" />
  <div
    class="bg-white flex flex-col mx-auto col-span-1 md:col-span-2  content-center justify-center  w-9/12"
  >
    {#if typeUser === "patient"}
      <p class="text-center text-4xl my-12  font-bold text-black">
        Registro de paciente
      </p>
    {/if}
    {#if typeUser === "admin"}
      <p class="text-center text-4xl my-12  font-bold text-black">
        Registro de administrador
      </p>
    {/if}
    {#if typeUser === "doctor"}
      <p class="text-center text-4xl my-12  font-bold text-black">
        Registro de doctor
      </p>
    {/if}

    <div class="block lg:flex justify-between focus-within:ring-blue-400">
      <div class="flex-col flex">
        <label
          for="nameInput"
          class="text-sm ml-2 font-bold text-black leading-5 "
        >
          Nombre
        </label>
        <input
          id="nameInput"
          type="text"
          placeholder="Nombre"
          class="my-3 bg-slate-50 w-full lg:w-60 h-10 p-2 rounded mt-0 border-slate-200 focus:outline-none"
        />
      </div>
      <div class="flex-col flex">
        <label
          for="lastNameInput"
          class="text-sm ml-2 font-bold text-black leading-5 "
        >
          Apellido
        </label>
        <input
          id="lastNameInput"
          type="text"
          placeholder="Apellido"
          class="my-3 bg-slate-50 w-full h-10 p-2 lg:w-60 rounded mt-0  border-slate-200 focus:outline-none"
        />
      </div>
    </div>

    <div class="block lg:flex justify-between focus-within:ring-blue-400 mt-3">
      <div class="flex-col flex">
        {#if typeUser === "patient"}
          <label
            for="birthDateInput"
            class="text-sm ml-2 font-bold text-black leading-5 "
          >
            Fecha de nacimiento
          </label>
          <input
            id="birthDateInput"
            type="date"
            class="my-3 w-full lg:w-60 h-10 p-2 bg-slate-50 rounded mt-0 border-slate-200 focus:outline-none"
          />
        {/if}
        {#if typeUser === "admin" || typeUser === "doctor"}
          <label
            for="nitInput"
            class="text-sm ml-2 font-bold text-black leading-5 "
          >
            Nit de empleado
          </label>
          <input
            id="nitInput"
            type="text"
            placeholder="Nit de empleado"
            class="my-3 w-full lg:w-60 h-10 p-2 bg-slate-50 rounded mt-0 border-slate-200 focus:outline-none"
          />
        {/if}
      </div>

      <div class="flex-col flex">
        <label
          for="ccInput"
          class="text-sm ml-2  font-bold text-black leading-5 "
        >
          Cedula
        </label>
        <input
          id="ccInput"
          type="number"
          placeholder="Cedula"
          class="my-3 bg-slate-50 h-10 p-2 w-full lg:w-60 rounded mt-0 border-slate-200 focus:outline-none"
        />
      </div>
    </div>
    {#if typeUser === "admin"}
      <div
        class="w-full flex flex-col justify-center mt-3 focus-within:ring-blue-400 "
      >
        <label
          for="emailInput"
          class="text-sm ml-2 font-bold text-black leading-5 "
        >
          Email
        </label>
        <input
          id="emailInput"
          type="text"
          placeholder="ejemplo@mail.com"
          class="my-3 w-full bg-slate-50 h-10 p-2 rounded mt-0  border-slate-200 focus:outline-none"
        />
      </div>
    {/if}
    {#if typeUser === "patient" || typeUser === "doctor"}
      <div
        class="block lg:flex justify-between focus-within:ring-blue-400 mt-3"
      >
        <div class="flex-col flex">
          <label
            for="emailInput"
            class="text-sm ml-2  font-bold text-black leading-5 "
          >
            Email
          </label>
          <input
            id="emailInput"
            type="text"
            placeholder="ejemplo@mail.com"
            class="my-3 w-full lg:w-60 bg-slate-50 h-10 p-2 rounded mt-0  border-slate-200 focus:outline-none"
          />
        </div>

        <div class="flex flex-col">
          <label
            for="phoneInput"
            class="text-sm ml-2  font-bold text-black leading-5 "
          >
            Numero de telefono
          </label>
          <input
            id="phoneInput"
            type="number"
            placeholder="Numero de telefono"
            class="my-3 bg-slate-50 w-full lg:w-60 rounded mt-0 h-10 p-2 border-slate-200 focus:outline-none"
          />
        </div>
      </div>
    {/if}

    <div class="block lg:flex justify-between mt-3 focus-within:ring-blue-400">
      <div class="flex-col flex">
        <label
          for="password"
          class="text-sm ml-2 font-bold text-black leading-5 "
        >
          Digite su contraseña
        </label>
        <input
          id="password"
          type="password"
          placeholder="Contraseña"
          class="my-3 bg-slate-50 w-full lg:w-60 rounded mt-0 h-10 p-2 border-slate-200 focus:outline-none"
        />
      </div>
      <div class="flex-col flex">
        <label
          for="confirmPasswordInput"
          class="text-sm ml-2 font-bold text-black leading-5 "
        >
          Confirme su contraseña
        </label>
        <input
          id="confirmPasswordInput"
          type="password"
          placeholder="Contraseña"
          class="my-3 bg-slate-50 w-full lg:w-60 rounded mt-0  border-slate-200 focus:outline-none"
        />
      </div>
    </div>
    <div
      class="mt-8 flex flex-col mx-auto  content-center justify-center w-8/12 text-black"
    >
      <button
        class="bg-blue-300 drop-shadow-md duration-500 hover:bg-blue-400 font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Registrarme
      </button>
      <a
        class="my-2 bg-gray-300 drop-shadow-md duration-500 hover:bg-gray-400 font-bold py-2 px-4 text-center hover:text-black hover:no-underline rounded focus:outline-none focus:shadow-outline"
        href="/register"
      >
        Volver a la pagina principal
      </a>
    </div>
  </div>
</div>
