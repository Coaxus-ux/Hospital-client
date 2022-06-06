<script>
  import LeftImage from "../lib/LeftImage.svelte";
  import { writable } from "svelte/store";
  import { userLogin } from "../store/loginUser.js";

 

  let userData = writable({
    email: "",
    password: "",
  });
  let error = writable(false);
  const handleClick = async () => {
    const emailRegex = new RegExp(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    if (emailRegex.test($userData.email) && $userData.password.length > 0) {
      const login = await userLogin($userData);
      console.log("eso", login)

    }
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
    {#if $error}
      <div
        class="bg-red-200 uppercase flex items-center justify-center font-semibold rounded-lg mx-6 my-7 h-12"
      >
        Correo o Contraseña incorrectos
      </div>
    {/if}
    <form>
      <div
        class="w-full flex flex-col justify-center gap-2 mb-5"
      >
        <label
          for="emailInput"
          class="text-md ml-2 font-semibold text-black leading-5"
        >
          Email
        </label>
        <input
          id="emailInput"
          type="email"
          bind:value={$userData.email}
          placeholder="ejemplo@mail.com"
          class="focus:ring-blue-400 focus:ring-2 my-3 w-full bg-slate-50 h-10 p-2 rounded mt-0  border-slate-200 focus:outline-none"
        />
      </div>
      <div
        class="w-full gap-2 flex flex-col justify-center"
      >
        <label
          for="passwordInput"
          class="text-md ml-2 font-semibold text-black leading-5"
        >
          Contaseña
        </label>
        <input
          id="passwordInput"
          type="password"
          bind:value={$userData.password}
          placeholder="Contraseña"
          class="focus:ring-blue-400 focus:ring-2 my-3 w-full bg-slate-50 h-10 p-2 rounded mt-0  border-slate-200 focus:outline-none"
        />
      </div>
    </form>
    <div class="flex items-start  mx-3">
      <div class="flex center">
        <div class="flex items-center">
          <input
            id="remember"
            aria-describedby="remember"
            type="checkbox"
            class="cursor-pointer bg-gray-300 border border-gray-400 focus:ring-3 focus:ring-emerald-500 h-4 w-4 rounded"
          />
        </div>
        <div class="text-sm ml-3">
          <label for="remember" class="font-medium text-gray-900"
            >Recordardarme</label
          >
        </div>
      </div>
      <a
        href="/register"
        class="text-sm text-blue-500 ml-auto hover:text-blue-600"
        >Olvidé mi Contraseña</a
      >
    </div>
    <div
      class="flex flex-col mx-auto  content-center justify-center w-8/12 text-black mt-5"
    >
      <button
        class="bg-blue-300 drop-shadow-md duration-500 hover:bg-blue-400 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        on:click={handleClick}
      >
        Iniciar sesión
      </button>
      <a
        class="my-3 bg-gray-300 drop-shadow-md duration-500 hover:bg-gray-400 font-semibold py-2 px-4 text-center hover:text-black hover:no-underline rounded focus:outline-none focus:shadow-outline"
        href="/register"
      >
        Registrarme
      </a>
    </div>
  </div>
</div>
