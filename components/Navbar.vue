<template>
  <div class="w-screen z-9999">
    <div
      class="flex items-center bg-black text-white justify-between lg:hidden w-full px-5"
    >
      <nuxt-link
        to="/"
      >
        <img src="../src/logo.png" class="w-1/4" />
      </nuxt-link>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10"
        @click="showMenu = !showMenu">
<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>

    </div>
    <div
      :class="showMenu ? 'flex' : 'hidden'"
      class="pl-5 pt-10 pb-10 lg:p-0 bg-black w-full items-center lg:flex flex-col justify-between h-screen absolute top-10 z-20 lg:top-0 lg:h-16"
    >
      <div class="flex flex-col lg:flex-row lg:items-center gap-20">
          <nuxt-link
            to="/"
            class="hidden lg:block"
            @click="showMenu = !showMenu"
          >
              <img src="../src/logo.png" class="w-1/6" />
          </nuxt-link>
        <div class="flex flex-col lg:flex-row gap-2">
          <nuxt-link
            to="/properties"
            class="p-2 ml-1 pl-2 hover:bg-bg rounded-l-lg text-white w-full"
            @click="showMenu = !showMenu"
          >
            Properties
          </nuxt-link>
          <nuxt-link
            to="/services"
            class="p-2 ml-1 pl-2 hover:bg-bg rounded-l-lg text-white w-full"
            @click="showMenu = !showMenu"
          >
            Services
          </nuxt-link>
          <nuxt-link
            to="/contacts"
            class="p-2 ml-1 pl-2 hover:bg-bg rounded-l-lg text-white w-full"
            @click="showMenu = !showMenu"
          >
            Contacts
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        showMenu: false,
      }
    },
  }
  </script>
  
<style>
  /* .nuxt-link-exact-active {
    background-color: #eae8e8;
    font-weight: bold;
  } */
  </style>