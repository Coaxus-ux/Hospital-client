<script>
  import { writable } from "svelte/store";
  import { newPassword } from "../store/Auth.js";
  export let emailtoken;
  const emailUser = writable("");
  const error = writable({
    status: false,
    message: "",
  });
  const password = writable({
    password: "",
    confirmPassword: "",
  });
  const success = writable({
    status: false,
    message: "",
  });

  const handleChangePassword = async (e) => {
    if ($password.password.length < 6) {
      error.set({
        status: true,
        message: "la contraseña debe tener al menos 6 caracteres",
      });
      return;
    }
    if ($password.password !== $password.confirmPassword) {
      error.set({
        status: true,
        message: "las contraseñas no coinciden",
      });
      return;
    }
    const response = await newPassword(emailtoken, $password.password);
    console.log(response);
    if(!response.state){
      error.set({
        status: true,
        message: response.msg,
      });
      return;
    }
    success.set({
      status: true,
      message: response.msg,
    });
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);


  };
</script>
<div class="m-auto max-w-xl ">
<h1 class="mb-5 text-lg text-black dark:text-black font-bold text-center">
  ESCRIBE TU CONTRASEÑA
</h1>
{#if $error.status}
  <div class="alert alert-error shadow-lg mb-5 ">
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current flex-shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        /></svg
      >
      <span>{$error.message}</span>
    </div>
  </div>
{/if}
{#if $success.status}
      <div class="alert alert-success shadow-lg mb-5">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            /></svg
          >
          <span>{$success.message}</span>
        </div>
      </div>
    {/if}
<input
  type="password"
  placeholder="Nueva contraseña"
  bind:value={$password.password}
  class="input input-bordered input-success w-full"
/>
<input
  type="password"
  placeholder="repite la nueva contraseña"
  bind:value={$password.confirmPassword}
  class="input input-bordered input-success w-full mt-2"
/>
<button class="btn btn-success w-full mt-5" on:click={handleChangePassword}
  >Enviar</button
>
</div>