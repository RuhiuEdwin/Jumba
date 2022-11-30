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
          <div class="font-bold text-xl">Client Testimonials</div>
        </div>
        <!-- card wrapper -->
        <div class="w-full">
            <VueSlickCarousel v-bind="settings" >
                <div class="flex flex-col gap-5 h-96 relative"  v-for="t in testimonials" :key="t.id">
                    <div class="flex flex-col gap-5 items-center">
                        <div
                            class="p-5 text-white w-44 h-44 rounded-full r-img"
                            :style="{
                            background: `linear-gradient(
                            to right,
                            rgba(0, 0, 0, 0.6),
                            rgba(0, 0, 0, 0.6)
                        ),url(${t.poster}`,
                            }"
                        ></div>
                    </div>
                    <div class="flex flex-col w-1/2 items-center absolute left-60 top-50 p-5 rounded-lg bg-black text-white">
                      <div class="flex ">
                        <h1 class="text-6xl font-bold ">"</h1>
                        <div class="text-sm font-light mt-5">
                        {{t.description}}
                        </div>
                      </div>
                        <h4 class="text-xl font-bold">
                            {{t.name}}
                        </h4>
                    </div>
                </div>
            </VueSlickCarousel>
        </div>
      </div>
    </div>
  </template>
    
<script>
  import { mapState } from 'vuex'
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    export default {
      data() {
          return {
      settings: {
          "infinite": true,
          "initialSlide": 1 ,
          "slidesToScroll": 1,
          "swipeToSlide": true,
          "autoplay": true,
          "autoplaySpeed": 4000,
          "centerMode": true,
          "centerPadding": "20px",
          "focusOnSelect": true,
          "infinite": true,
          "slidesToShow": 1,
          "speed": 500,
          "pauseOnHover": false,
        }
          };
      },
    computed: {
        ...mapState(["testimonials"]),
    },
  components: {
    VueSlickCarousel ,
  },
  }
    </script>
    
<style>
.r-img {
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: top center !important;
}
</style>