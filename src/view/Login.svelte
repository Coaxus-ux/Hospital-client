<script>
  import LeftImage from "../lib/LeftImage.svelte";
</script>

<div
  class="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 grid-flow-row w-auto h-screen"
>
  <LeftImage srcImage="./assets/logo_login.svg" />

  <div
    class="bg-white flex flex-col mx-auto col-span-1 md:col-span-2  content-center  justify-center  w-9/12"
  >
    <div>
      <p class="text-center text-4xl  font-bold text-black">Iniciar sesión</p>
    </div>

    <div
      class="w-full flex flex-col  justify-center  focus-within:ring-blue-400 "
    >
      <label
        for="emailInput"
        class="text-sm ml-2  font-bold text-black leading-5 "
      >
        Email
      </label>
      <input
        id="emailInput"
        type="email"
        placeholder="ejemplo@mail.com"
        class="my-3 w-full bg-slate-50  rounded mt-0  border-slate-200 focus:outline-none"
      />
    </div>

    <div
      class="w-full flex flex-col  justify-center  focus-within:ring-blue-400 "
    >
      <label
        for="passwordInput"
        class="text-sm ml-2 font-bold text-black leading-5 "
      >
        Contaseña
      </label>
      <input
        id="passwordInput"
        type="password"
        placeholder="Contraseña"
        class="my-3 w-full bg-slate-50  rounded mt-0  border-slate-200 focus:outline-none"
      />
    </div>

    <div class="flex items-start  mx-3">
      <div class="flex items-start">
        <div class="flex items-center">
          <input
            id="remember"
            aria-describedby="remember"
            type="checkbox"
            class="bg-gray-300 border border-gray-400 focus:ring-3 focus:ring-emerald-500 h-4 w-4 rounded"
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
        class="text-sm text-blue-500 ml-auto hover:text-blue-6  00"
        >Olvide mi Contraseña</a
      >
    </div>
    <div
      class="mt-8 flex flex-col mx-auto  content-center justify-center w-8/12 text-black"
    >
      <button
        class="bg-blue-300 drop-shadow-md duration-500 hover:bg-blue-400 font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Iniciar sesión
      </button>
      <a
        class="my-2 bg-gray-300 drop-shadow-md duration-500 hover:bg-gray-400 font-bold py-2 px-4 text-center hover:text-black hover:no-underline rounded focus:outline-none focus:shadow-outline"
        href="/register"
      >
        Registrarme
      </a>
    </div>
  </div>
</div>
