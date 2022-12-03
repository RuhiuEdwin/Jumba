<template>
    <div class="relative bg-bg">
      <div class="pt-10 h-96 w-screen relative bg">
        <div class="font-bold text-center text-white text-2xl uppercase">OUR PROPERTY LISTINGS</div>
        <div class="relative w-screen max-w-screen-lg lg:m-auto h-full">
          <div class="absolute bottom-10 lg:bottom-36 z-10">
            <Search />
          </div>
        </div>
      </div>
      <FeaturedProperties />
      <AllProperties />
    </div>
  </template>
  
  <script>
import FeaturedProperties from '../../partials/FeaturedProperties.vue'
import AllProperties from '../../partials/AllProperties.vue'
import Search from '../../components/search.vue'
  export default {
    components: {
    FeaturedProperties,
    Search,
    AllProperties
},
    data() {
      return { 
      }
    },
        created() {
          this.refreshList();
        },
        methods: {
          refreshList() {
            console.log('hello')
            this.$store.dispatch('getProperties')
          }
        }
  }
  </script>
  
  <style>
  .bg{
    background-repeat: no-repeat;
    background-size: cover !important;
    background-position:top center !important;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),url(../../assets/bg.jpg);
  }
  </style>