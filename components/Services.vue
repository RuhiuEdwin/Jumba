<template>
    <div class="mb-10">
      <!-- featured events wrapper  -->
      <div
        class="
          max-w-screen-lg 
          m-auto
          flex flex-col
          gap-5
          p-2
          lg:pl-0 lg:pr-0
        "
      >
        <!-- title and controller  -->
        <div class="flex justify-between">
          <!-- title  -->
          <div class="font-bold text-xl">Our Services</div>
          <nuxt-link to="/about" class="flex gap-1 items-center">
            <div class="text-blackish">See More</div>
            <!-- See More Link controller  -->
            <div>
              <svg
                class="w-4 h-4 hover:text-lime"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </div>
          </nuxt-link>
        </div>
        <!-- card wrapper -->
        <div class="flex justify-center flex-wrap gap-5 lg:justify-start">
            <div v-for="service in services" :key="service.id" >
                <ServiceCard 
                    :Name="service.name"
                    :Description="service.description"
                    :Poster="service.poster"
                />
            </div>
        </div>
      </div>
    </div>
  </template>
    
  <script>
  import { mapState } from 'vuex'
import ServiceCard from './ServiceCard.vue';
    export default {
    data() {
        return {
        };
    },
    computed: {
        ...mapState(["services"]),
    },
    components: { ServiceCard }
}
    </script>
    
  <style>
    </style>