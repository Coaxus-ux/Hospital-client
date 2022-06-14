<script>
  import { writable } from "svelte/store";
  import { fade } from "svelte/transition";
  import LeftImage from "../lib/LeftImage.svelte";
  import { registerUser } from "../store/Auth.js";
  export let typeUser;
  import Modal, { bind } from "svelte-simple-modal";
  // @ts-ignore
  import Popup from "../lib/Popup.svelte";
  const modal = writable(null);

  const showModal = () =>
    modal.set(
      bind(Popup, {
        message:
          "Se te envio un correo, por favor revisa tu bandeja de entrada para activar tu cuenta",
        route: "/register",
      })
    );
  const User = writable({
    name: "",
    lastName: "",
    birthDate: "",
    citizenshipCard: "",
    phoneNumber: "",
    emploeeId: "",
    email: "",
    password: "",
    repeatPassword: "",
    typeUser: typeUser,
  });

  const Error = writable({
    errorState: false,
    errorMessage: "",
  });
  const handleClick = async () => {
    $User.citizenshipCard = $User.citizenshipCard.toString();
    $User.email = $User.email.toLocaleLowerCase().trim();
    const emailRegex = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const passwordRegex = new RegExp(
      /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
    );
    
    if (!emailRegex.test($User.email)) {
      Error.set({
        errorState: true,
        errorMessage: "Email no valido",
      });
    }
    if (!passwordRegex.test($User.password)) {
      Error.set({
        errorState: true,
        errorMessage: "Contraseña no valida, debe tener minimo 8 y maximo 16 caracteres, una mayuscula y un numero",
      });
    }
    
    if ($User.password !== $User.repeatPassword) {
      Error.set({
        errorState: true,
        errorMessage: "Contraseñas no coinciden",
      });
    }
    if (typeUser === "admin" || typeUser === "doctor") {
      if ($User.emploeeId === "") {
        Error.set({
          errorState: true,
          errorMessage: "Todos los campos son obligatorios",
        });
      }
      if($User.emploeeId.toString().length < 9){
      Error.set({
        errorState: true,
        errorMessage: "El nit de empleado debe tener 9 caracteres",
      });
    }
    }
    if( typeUser === "patient" || typeUser === "doctor"){
      if($User.phoneNumber === ""){
        Error.set({
          errorState: true,
          errorMessage: "Todos los campos son obligatorios",
        });
      }
    }
    if(typeUser === "patient"){
      if($User.birthDate === ""){
        Error.set({
          errorState: true,
          errorMessage: "Todos los campos son obligatorios",
        });
      }
    }
    if (
      $User.name === "" ||
      $User.lastName === "" ||
      $User.citizenshipCard === "" ||
      $User.email === "" ||
      $User.password === "" ||
      $User.repeatPassword === ""
    ) {
      Error.set({
        errorState: true,
        errorMessage: "Todos los campos son obligatorios",
      });
    }
    if (!$Error.errorState) {
      const response = await registerUser($User);
      if (!response.state) {
        Error.set({
          errorState: true,
          errorMessage: response,
        });
      } else {
        showModal();
      }
    }
    setTimeout(() => {
      Error.set({
        errorState: false,
        errorMessage: "",
      });
    }, 3000);
  };
</script>

<Modal
  closeOnOuterClick={false}
  closeButton={false}
  show={$modal}
  styleWindow={{
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.15 )",
    backgroundColor: "rgb(241, 245, 249)",
  }}
/>
<div
  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 grid-flow-row w-auto h-screen"
>
  <LeftImage srcImage="../src/assets/logo_register.svg" />
  <div
    class="bg-white flex flex-col mx-auto col-span-1 md:col-span-2  content-center justify-center  w-9/12"
  >
    {#if typeUser === "patient"}
      <p class="text-center text-5xl my-12 font-bold text-black">
        Registro de paciente
      </p>
    {/if}
    {#if typeUser === "admin"}
      <p class="text-center text-5xl my-12 font-bold text-black">
        Registro de administrador
      </p>
    {/if}
    {#if typeUser === "doctor"}
      <p class="text-center text-5xl my-12 font-bold text-black">
        Registro de doctor
      </p>
    {/if}
    {#if $Error.errorState}
      <div
        class="bg-rose-500 uppercase flex items-center justify-center font-semibold rounded-lg mx-6 my-7 h-12 text-center"
        transition:fade
      >
        {$Error.errorMessage}
      </div>
    {/if}
    <div
      class="block gap-10 lg:flex justify-between focus-within:ring-blue-400"
    >
      <div class="flex-col flex flex-1 gap-2">
        <label
          for="nameInput"
          class="text-md font-semibold text-black leading-5 "
        >
          Nombre
        </label>
        <input
          id="nameInput"
          type="text"
          placeholder="Nombre"
          class="my-3 bg-slate-50 w-full h-10 p-2 rounded mt-0 border-slate-200 focus:outline-none"
          bind:value={$User.name}
        />
      </div>
      <div class="flex-col flex flex-1 gap-2">
        <label
          for="lastNameInput"
          class="text-md font-semibold text-black leading-5 "
        >
          Apellido
        </label>
        <input
          id="lastNameInput"
          type="text"
          placeholder="Apellido"
          class="my-3 bg-slate-50 w-full h-10 p-2 rounded mt-0  border-slate-200 focus:outline-none"
          bind:value={$User.lastName}
        />
      </div>
    </div>

    <div
      class="block gap-10 lg:flex justify-between focus-within:ring-blue-400 mt-3"
    >
      <div class="flex-col flex flex-1 gap-2">
        {#if typeUser === "patient"}
          <label
            for="birthDateInput"
            class="text-md font-semibold text-black leading-5 "
          >
            Fecha de nacimiento
          </label>
          <input
            id="birthDateInput"
            type="date"
            class="my-3 w-full h-10 p-2 bg-slate-50 rounded mt-0 border-slate-200 focus:outline-none"
            bind:value={$User.birthDate}
          />
        {/if}
        {#if typeUser === "admin" || typeUser === "doctor"}
          <label
            for="nitInput"
            class="text-md font-semibold text-black leading-5 "
          >
            Nit de empleado
          </label>
          <input
            id="nitInput"
            type="number"
            placeholder="Nit de empleado"
            bind:value={$User.emploeeId}
            class="my-3 w-full h-10 p-2 bg-slate-50 rounded mt-0 border-slate-200 focus:outline-none"
          />
        {/if}
      </div>

      <div class="flex-col flex flex-1 gap-2">
        <label
          for="ccInput"
          class="text-md font-semibold text-black leading-5 "
        >
          Cedula
        </label>
        <input
          id="ccInput"
          type="number"
          placeholder="Cedula"
          bind:value={$User.citizenshipCard}
          class="my-3 bg-slate-50 h-10 p-2 w-full rounded mt-0 border-slate-200 focus:outline-none"
        />
      </div>
    </div>
    {#if typeUser === "admin"}
      <div
        class="w-full flex flex-col justify-center mt-3 focus-within:ring-blue-400 "
      >
        <label
          for="emailInput"
          class="text-md font-semibold text-black leading-5 "
        >
          Email
        </label>
        <input
          id="emailInput"
          type="text"
          placeholder="ejemplo@mail.com"
          bind:value={$User.email}
          class="my-3 w-full bg-slate-50 h-10 p-2 rounded mt-0  border-slate-200 focus:outline-none"
        />
      </div>
    {/if}
    {#if typeUser === "patient" || typeUser === "doctor"}
      <div
        class="block gap-10 lg:flex justify-between focus-within:ring-blue-400 mt-3"
      >
        <div class="flex-col flex flex-1 gap-2">
          <label
            for="emailInput"
            class="text-md font-semibold text-black leading-5 "
          >
            Email
          </label>
          <input
            id="emailInput"
            type="text"
            placeholder="ejemplo@mail.com"
            bind:value={$User.email}
            class="my-3 w-full bg-slate-50 h-10 p-2 rounded mt-0  border-slate-200 focus:outline-none"
          />
        </div>

        <div class="flex flex-col flex-1 gap-2">
          <label
            for="phoneInput"
            class="text-md font-semibold text-black leading-5 "
          >
            Numero de telefono
          </label>
          <input
            id="phoneInput"
            type="number"
            placeholder="Numero de telefono"
            bind:value={$User.phoneNumber}
            class="my-3 bg-slate-50 w-full rounded mt-0 h-10 p-2 border-slate-200 focus:outline-none"
          />
        </div>
      </div>
    {/if}

    <div
      class="block gap-10 lg:flex justify-between mt-3 focus-within:ring-blue-400"
    >
      <div class="flex-col flex flex-1 gap-2">
        <label
          for="password"
          class="text-md font-semibold text-black leading-5 "
        >
          Digite su contraseña
        </label>
        <input
          id="password"
          type="password"
          placeholder="Contraseña"
          bind:value={$User.password}
          class="my-3 bg-slate-50 w-full rounded mt-0 h-10 p-2 border-slate-200 focus:outline-none"
        />
      </div>
      <div class="flex-col flex flex-1 gap-2">
        <label
          for="confirmPasswordInput"
          class="text-md font-semibold text-black leading-5 "
        >
          Confirme su contraseña
        </label>
        <input
          id="confirmPasswordInput"
          type="password"
          placeholder="Contraseña"
          bind:value={$User.repeatPassword}
          class="my-3 bg-slate-50 w-full rounded mt-0 h-10 p-2 border-slate-200 focus:outline-none"
        />
      </div>
    </div>
    <div
      class="mt-8 flex flex-col mx-auto  content-center justify-center w-8/12 text-black"
    >
      <button
        class="bg-blue-300 drop-shadow-md duration-500 hover:bg-blue-400 font-semibold py-2 px-4  rounded focus:outline-none focus:shadow-outline"
        type="button"
        on:click={handleClick}
      >
        Registrarme
      </button>
      <a
        class="my-2 bg-gray-300 drop-shadow-md duration-500 hover:bg-gray-400 font-semibold py-2 px-4 text-center hover:text-black hover:no-underline rounded focus:outline-none focus:shadow-outline"
        href="/register"
      >
        Volver a la pagina principal
      </a>
    </div>
  </div>
</div>
