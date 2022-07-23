<div class="navbar bg-base-100 flex justify-center">
  <div class="navbar-start">
    <div class="dropdown">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          /></svg
        >
      </label>
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a href="#about"> Nosotros </a></li>
        <li><a href="#services"> Servicios </a></li>
        <li>
          <a href="/login" class="bg-green-400 hover:bg-green-700">
            Inicio de sesión
          </a>
        </li>
      </ul>
    </div>
    <a href="/">
      <p class="bg-[#20BC7E] p-2 px-10 text-white font-semibold rounded-lg">MyHospital</p>
    </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><a href="#about"> Nosotros </a></li>
      <li><a href="#services"> Servicios </a></li>
      <li>
        <a href="/login" class="bg-green-400 hover:bg-green-700">
          Inicio de sesión <svg fill="none" viewBox="0 0 24 24" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
            <path xmlns="http://www.w3.org/2000/svg" d="M12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4ZM6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8ZM8 18C6.34315 18 5 19.3431 5 21C5 21.5523 4.55228 22 4 22C3.44772 22 3 21.5523 3 21C3 18.2386 5.23858 16 8 16H16C18.7614 16 21 18.2386 21 21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21C19 19.3431 17.6569 18 16 18H8Z" fill="#0D0D0D"></path>
            </svg>
        </a>
      </li>
    </ul>
  </div>
</div>
