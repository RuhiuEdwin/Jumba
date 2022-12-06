<template>
    <div class="mb-10">
      <div class="p-10 h-60 w-screen relative sbg">
          <h1 class="font-bold text-2xl text-center text-white uppercase">Our Services</h1>
        <div class="text-white text-center font-light">
            We offer a variety of real estate services, take a look at our services below.
        </div>
      </div>
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
          <!-- title  -->
          <div class="font-bold text-xl">Numbers Don't Lie</div>
      </div>
        <Numbers />
    </div>
</template>
<script>
import { mapState } from 'vuex'
import ServiceCard from '../../components/ServiceCard.vue';
import Numbers from '../../components/Numbers.vue';
  export default {
  data() {
      return {
      };
  },
  computed: {
      ...mapState(["services"]),
  },
  components: { ServiceCard, Numbers }
}
  </script>
  
  <style>
  .sbg{
    background-repeat: no-repeat;
    background-size: cover !important;
    background-position:center center !important;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),url(../../assets/night.jpg);
  }
  </style>