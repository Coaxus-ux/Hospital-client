<script>
  import { writable } from "svelte/store";
  import { passwordRecovery } from "../store/Auth.js";
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
  const handleClick = async () => {
    if ($emailUser.length < 3) {
      error.set({
        status: true,
        message: "todos los campos son obligatorios",
      });
      return;
    } else {
      const response = await passwordRecovery($emailUser);
      if (!response.state) {
        error.set({
          status: true,
          message: response.msg,
        });
        return;
      }
      error.set({
        status: false,
        message: "",
      });
      success.set({
        status: true,
        message: response.msg,
      });

      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    }
  };
  
</script>

  <div>
    <h1 class="mb-5 text-lg text-black dark:text-black font-bold text-center">
      ESCRIBE TU CORREO
    </h1>
    {#if $error.status}
      <div class="alert alert-error shadow-lg mb-5">
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
      type="text"
      placeholder="ejemplo@gmail.com"
      class="input input-bordered input-success w-full"
      bind:value={$emailUser}
    />
    <button class="btn btn-success w-full mt-5" on:click={handleClick}
      >Enviar</button
    >
  </div>
