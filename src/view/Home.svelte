<div class="App">
  <header>
    <nav
      class="flex gap-10 flex-col md:flex-row p-8 bg-[#F6F8FB] justify-around items-center"
    >
      <div class="flex flex-col md:flex-row gap-10">
        <p class="bg-blue-300 p-2 px-10 rounded-lg text-white font-semibold">
          MyHospital
        </p>
      </div>
      <div class="flex gap-10 items-center">
        <button>🛎️</button>
        <img
          src="https://avatars.dicebear.com/api/miniavs/.svg"
          class="w-12 border rounded-full"
          alt=""
        />
      </div>
    </nav>
    <nav
      class="flex flex-col md:flex-row bg-[#F6F8FB] font-semibold p-5 justify-center items-center gap-5"
    >
      <a href="/">Panel principal</a>
      <a href="/">Mis citas</a>
      <a href="/" class="hidden md:block"> | </a>
      <a href="/">Servicio al cliente</a>
      <a href="/">Ayuda</a>
    </nav>
  </header>

  <div class="flex flex-wrap overflow-hidden max-w-screen-2xl mx-auto">
    <div class="w-full overflow-hidden lg:w-1/2 max-h-96 ">
      <img
        src="../src/assets/homeimg2.jpg"
        alt="ImageHospitalHome"
        class="object-cover"
      />
    </div>

    <div
      class="w-full overflow-hidden lg:w-1/2 flex flex-col bg-[#3CB4E5] p-10 md:max-h-96 "
    >
      <p class="text-4xl font-semibold text-white py-2">MyHospital</p>
      <p class="text-white">
        En muchos países, los hospitales son gratuitos para las personas que no
        tienen otra forma de pagar la atención que necesitan. En algunos casos,
        el gobierno paga el tratamiento hospitalario de las personas. Algunas
        personas pueden tener su propio seguro y obtener cobertura para su
        estadía en el hospital, pero otras tendrán que hacer un reclamo más
        tarde a las compañías de seguros privadas o al gobierno.
      </p>
      <div class="flex flex-col md:flex-row gap-5 mt-10">
        <a
          class="uppercase bg-white text-black font-bold rounded-xl px-4 py-3"
          href="/register/patient"
        >
          Agenda tu cita
        </a>

        <a
          class="uppercase border border-white text-white font-bold rounded-xl px-4 py-3"
          href="/"
        >
          Contactanos
        </a>
      </div>
    </div>

    <div
      class="w-full overflow-hidden lg:w-1/2 bg-[#00A19B] flex flex-col p-10 lg:max-h-96"
    >
      <p class="text-4xl font-semibold text-white py-2">Vacantes de empleo</p>
      <p class="text-white">
        Un artículo de economist.com publicado el 1 de julio de 2018 informó que
        se espera que la cantidad de empleos en hospitales aumente un 16 %
        durante la próxima década. Este es un ritmo más rápido que cualquier
        otro tipo de trabajo. El uso de asistentes de escritura de IA ayudará a
        los escritores de contenido a ser más eficientes en su trabajo,
        especialmente cuando necesitan generar contenido para diferentes nichos
        y temas.
      </p>
      <div class="mt-10">
        <a
          class="uppercase w-full md:w-auto bg-white text-black font-bold rounded-xl px-10 py-3"
          href="/register/patient"
        >
          Más información
        </a>
      </div>
    </div>

    <div class="w-full overflow-hidden lg:w-1/2 max-h-96">
      <img
        src="../src/assets/homeimg1.jpg"
        alt="ImageHospitalHome2"
        class="object-cover"
      />
    </div>
  </div>

  <div
    class="flex flex-col md:flex-row justify-center items-center max-w-screen-3xl mx-auto bg-[#71A7FF] md:p-20 p-10"
  >
    <div class="p-10 flex flex-col gap-5">
      <p class="text-4xl font-bold text-white">
        Registrate para recibir noticias y ofertas de empleo!
      </p>
      <p class="text-white">
        Get notified about new jobs that match you, and let MyHospital know you
        are interested.
      </p>
    </div>
    <div class="p-10 flex flex-col gap-5 items-center">
      <p class="text-xl text-center text-white">
        Registrate como paciente para recibir beneficios exclusivos de los
        usuarios de la pagina web:
      </p>
      <a
        class="uppercase bg-white text-black font-bold rounded-xl px-4 py-3 w-full text-center"
        href="/register/patient"
      >
        Registrarse
      </a>
    </div>
  </div>
  <div
    class="flex flex-col lg:flex-row md:p-20 p-10 justify-center items-stretch gap-10"
  >
    <div class="rounded-lg lg:w-96 bg-base-100 shadow-xl w-full self-stretch">
      <figure>
        <img
          src="../src/assets/card1.jpg"
          alt="Shoes"
          class="rounded-t-lg w-full"
        />
      </figure>
      <div class="p-10 flex flex-col gap-5">
        <h2 class="text-lg font-semibold">
          MyHospital cuenta con las mejores opciones para tu salud
        </h2>
        <div class="justify-end">
          <a class="text-blue-500 underline">Más información</a>
        </div>
      </div>
    </div>
    <div class="rounded-lg lg:w-96 bg-base-100 shadow-xl w-full self-stretch">
      <figure>
        <img
          src="../src/assets/card2.jpg"
          alt="Shoes"
          class="rounded-t-lg w-full"
        />
      </figure>
      <div class="p-10 flex flex-col gap-5">
        <h2 class="text-lg font-semibold">
          Las instalaciones de MyHospital son muy seguras
        </h2>
        <div class="justify-end">
          <a class="text-blue-500 underline">Más información</a>
        </div>
      </div>
    </div>
    <div class="rounded-lg lg:w-96 bg-base-100 shadow-xl w-full self-stretch">
      <figure>
        <img
          src="../src/assets/card4.jpg"
          alt="Shoes"
          class="rounded-t-lg w-full"
        />
      </figure>
      <div class="p-10 flex flex-col gap-5">
        <h2 class="text-lg font-semibold">
          Nuestros profesionales son los mejores en el sector
        </h2>
        <div class="justify-end">
          <a class="text-blue-500 underline">Más información</a>
        </div>
      </div>
    </div>
    <div class="rounded-lg lg:w-96 bg-base-100 shadow-xl w-full self-stretch">
      <figure>
        <img
          src="../src/assets/card3.jpg"
          alt="Shoes"
          class="rounded-t-lg w-full"
        />
      </figure>
      <div class="p-10 flex flex-col gap-5">
        <h2 class="text-lg font-semibold">Tu salud debe ser siempre primero</h2>
        <div class="justify-end">
          <a class="text-blue-500 underline">Más información</a>
        </div>
      </div>
    </div>
  </div>
  <footer
    class="flex flex-col md:flex-row p-20 bg-[#71A7FF]/20 justify-around items-center gap-10"
  >
    <div>
      <p class="bg-blue-300 p-2 px-10 rounded-lg text-white font-semibold">
        MyHospital
      </p>
    </div>
    <div class="w-full md:w-auto">
      <p class="text-2xl font-bold mb-5">Navigate</p>
      <p>Home</p>
      <p>Our solutions</p>
      <p>Corporate carrers</p>
      <p>News</p>
    </div>
    <div class="w-full md:w-auto">
      <p class="text-2xl font-bold mb-5">Contactanos</p>
      <p>3805 Edwards Road, Suite 700</p>
      <p>Cincinnati, Ohio 45209</p>
      <p>+1 (800) 580-8239</p>
    </div>
  </footer>
</div>
