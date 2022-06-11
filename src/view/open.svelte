<script>
  import { getContext } from 'svelte';
  export let message = "";
  const { close } = getContext('simple-modal');
  
</script>

<div class="p-6 text-center">
 
  <svg
  class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    ><path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    /></svg
  >
  <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
    {message}
  </h3>
  <button
    data-modal-toggle="popup-modal"
    type="button"
    class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
    on:click={close}
    >
    ¡Correcto!
  </button>
</div>
