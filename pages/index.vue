<template>
  <div class="container h-screen mx-auto">
    <section class="flex flex-row flex-wrap p-5 justify-center h-32 text-white">
      <div class="flex flex-col flex-1 mx-1">
        <div
          class="bg-secondary rounded-xl font-bold text-5xl leading-tight p-5"
        >
          <h1 class="text-wrap capitalize">
            Bringing your ideas <br />
            into Reality Through <br />
            Code
          </h1>
        </div>

        <div class="projects-sec flex flex-row flex-wrap text-center my-3">
          <div
            class="flex flex-col flex-1 h-48 items-center justify-center bg-yellow-300 text-black rounded-xl font-bold leading-tight p-5"
          >
            <h1 class="text-wrap capitalize text-5xl">2+</h1>
            <span class="text-lg">Years Experience</span>
          </div>

          <div
            class="flex flex-col flex-1 h-48 items-center justify-center bg-green-500 text-white rounded-xl font-bold leading-tight p-5 mx-2"
          >
            <h1 class="text-wrap capitalize text-5xl">60+</h1>
            <span class="text-lg">Apps Created</span>
          </div>

          <div
            class="flex flex-col flex-1 h-48 items-center justify-center bg-rose-400 text-white rounded-xl font-bold leading-tight p-5"
          >
            <h1 class="text-wrap capitalize text-5xl">20+</h1>
            <span class="text-lg">Certifications</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col flex-1 mx-1">
        <div
          class="flex flex-row justify-between items-center bg-secondary h-18 rounded-xl p-3 w-full"
        >
          <h1>mowais.dev</h1>
          <font-awesome-icon :icon="['fas', 'bars']" size="2xl" />
        </div>

        <section class="flex flex-row my-2 h-full">
          <img
            class="rounded-xl object-cover"
            width="50%"
            height="100%"
            src="~/assets/images/profile-pic.png"
            alt="selfie"
          />

          <section class="flex flex-col w-full pl-2">
            <div
              class="flex flex-row items-center justify-between bg-secondary p-4 rounded-lg"
            >
              <span class="text-base text-gray-400">Name:</span>
              <span class="text-xl font-bold">Owais</span>
            </div>

            <div
              class="flex flex-row items-start my-2 h-full justify-between bg-secondary p-4 rounded-lg"
            >
              <span class="text-base text-gray-400">Based In:</span>
              <span class="text-md font-bold">Karachi, Pakistan</span>
            </div>

            <div
              class="flex flex-row items-center h-20 justify-between bg-secondary p-4 rounded-lg"
            >
              <font-awesome-icon :icon="['fab', 'linkedin']" size="2xl" />
              <font-awesome-icon :icon="['fab', 'github']" size="2xl" />
              <font-awesome-icon :icon="['fab', 'whatsapp']" size="2xl" />
              <font-awesome-icon :icon="['fab', 'instagram']" size="2xl" />
            </div>
          </section>
        </section>
      </div>
    </section>
  </div>
</template>
  