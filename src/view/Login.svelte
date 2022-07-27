<script>
  import LeftImage from "../lib/LeftImage.svelte";
  import { writable } from "svelte/store";
  import { userLogin } from "../store/Auth.js";
  import { navigate } from "svelte-routing";
  import { fade } from "svelte/transition";
  import { loggedValidator} from "../lib/loggedValidator";
  import { onMount } from "svelte";
  onMount(async () => {
      await loggedValidator();
    });
  let User = writable({
    email: "",
    password: "",
    remeberMe: false,
  });
  let Error = writable({
    errorState: false,
    errorMessage: "",
  });
  const handleClick = async () => {
    const emailRegex = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (emailRegex.test($User.email) && $User.password.length > 6) {
      const response = await userLogin($User);
      if (response.hasOwnProperty("token")) {
        localStorage.setItem("user", JSON.stringify(response));
        navigate("/" + response.userType);
      } else if (response.msg === "User not confirmed") {
        Error.set({
          errorState: true,
          errorMessage: "Cuenta no activada",
        });
      } else if (response.msg === "User not found") {
        Error.set({
          errorState: true,
          errorMessage: "Usuario no existe",
        });
      } else {
        Error.set({
          errorState: true,
          errorMessage: "Correo o Contraseña incorrectos",
        });
      }
    }else{
      Error.set({
        errorState: true,
        errorMessage: "Datos incorrectos"
      });
    }
    setTimeout(() => {
      Error.set({
        errorState: false,
        errorMessage: "",
      });
    }, 3000);
  };
</script>

<div
  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 grid-flow-row w-auto h-screen"
>
  <LeftImage srcImage="../src/assets/logo_login.svg" />
  <div
    class="bg-white flex gap-10 flex-col mx-auto col-span-1 md:col-span-2 content-center justify-center md:w-5/12 w-9/12"
  >
    <div>
      <p class="text-center text-5xl mb-5 font-bold text-black">
        Iniciar sesión
      </p>
    </div>
    {#if $Error.errorState}
      <div
        class="bg-rose-500 uppercase flex items-center justify-center font-semibold rounded-lg mx-6 my-7 h-12 text-center"
        transition:fade
      >
        {$Error.errorMessage}
      </div>
    {/if}
   
    <form>
      <div class="w-full flex flex-col justify-center gap-2 mb-5">
        <label
          for="emailInput"
          class="text-md ml-2 font-semibold text-black leading-5"
        >
          Email
        </label>
        <input
          id="emailInput"
          type="email"
          bind:value={$User.email}
          placeholder="ejemplo@mail.com"
          class="focus:ring-green-400 focus:ring-2 my-3 w-full bg-green-50 h-10 p-2 rounded mt-0  border-green-200 focus:outline-none"
        />
      </div>
      <div class="w-full gap-2 flex flex-col justify-center">
        <label
          for="passwordInput"
          class="text-md ml-2 font-semibold text-black leading-5"
        >
          Contaseña
        </label>
        <input
          id="passwordInput"
          type="password"
          bind:value={$User.password}
          placeholder="Contraseña"
          class="focus:ring-green-400 focus:ring-2 my-3 w-full bg-green-50 h-10 p-2 rounded mt-0  border-green-200 focus:outline-none"
        />
      </div>
    </form>
 
      <a
        href="/password-recovery"
        class="text-sm text-green-500 ml-auto hover:text-blue-600"
        >Olvidé mi Contraseña</a
      >
 
    <div
      class="flex flex-col mx-auto  content-center justify-center w-8/12 text-black mt-5"
    >
      <button
        class="bg-green-400 duration-500 hover:bg-green-600 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        on:click={handleClick}
      >
        Iniciar sesión
      </button>
      <a
        class="my-3 bg-gray-300 duration-500 hover:bg-gray-400 font-semibold py-2 px-4 text-center hover:text-black hover:no-underline rounded focus:outline-none focus:shadow-outline"
        href="/register"
      >
        Registrarme
      </a>
    </div>
  </div>
</div>
