<template>
    <div class="relative bg-bg">
      <TheHeader class="fixed top-0 left-0 w-screen z-20" />
      <Hero />
      <FeaturedProperties />
      <div class="mb-10">
        <!-- featured events wrapper  -->
        <div
          class="
            max-w-screen-lg 
            m-auto
            flex flex-col
            gap-5
            pl-5
            pr-5
            lg:pl-0 lg:pr-0
          "
        >
          <!-- title and controller  -->
          <div class="flex gap-10 items-center">
            <!-- title  -->
            <div class="font-bold text-xl">Most Popular Properties</div>
            <svg
              class="w-4 h-4"
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
          <!-- card wrapper -->
          <div class="flex justify-center flex-wrap gap-5 lg:justify-start">
            <div v-for="property in properties" :key="property.id">
          <PropertyCard 
            :Name="property.name"
            :Poster="property.Poster"
            :Price="property.price"
            :Category="property.category"
            :Description="property.description"
            :Location="property.location"
            :id="property.id"
          />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex'
//   import HeroPage from '../Partials/HeroPage.vue'
import Hero from '../../components/hero.vue'
import FeaturedProperties from '../../partials/FeaturedProperties.vue'
import PropertyCard from '../../components/PropertyCard.vue'
  export default {
    name: 'HomePage',
    auth: false,
    components: {
    Hero,
    FeaturedProperties,
    PropertyCard
},
    data() {
      return {
            featured: [
              {
                id:1,
                name:'Ikinu',
                Poster:'',
                category:'onsale',
                description:'1/4 acre',
                location:'ikinu',
                price:'1.5 M',
              },
              {
                id:2,
                name:'Ikinu',
                Poster:'',
                category:'rental',
                description:'1/4 acre',
                location:'ikinu',
                price:'1.5 M',
              },
              {
                id:3,
                name:'Ikinu',
                Poster:'',
                category:'onsale',
                description:'1/4 acre',
                location:'ikinu',
                price:'1.5 M',
              },
              {
                id:4,
                name:'Ikinu',
                Poster:'',
                category:'rental',
                description:'1/4 acre',
                location:'ikinu',
                price:'1.5 M',
              },
              {
                id:5,
                name:'Ikinu',
                Poster:'',
                category:'onsale',
                description:'1/4 acre',
                location:'ikinu',
                price:'1.5 M',
              },
              {
                id:6,
                name:'Ikinu',
                Poster:'',
                category:'onsale',
                description:'1/4 acre',
                location:'ikinu',
                price:'1.5 M',
              }
            ],
            properties: [
              {
                id:1,
                name:'Ikinu',
                Poster:'',
                category:'onsale',
                description:'1/4 acre',
                location:'ikinu',
                price:'1.5 M',
              },
              {
                id:2,
                name:'Ikinu',
                Poster:'',
                category:'rental',
                description:'1/4 acre',
                location:'ikinu',
                price:'1.5 M',
              },
              {
                id:3,
                name:'Ikinu',
                Poster:'',
                category:'onsale',
                description:'1/4 acre',
                location:'ikinu',
                price:'1.5 M',
              },
              {
                id:4,
                name:'Ikinu',
                Poster:'',
                category:'rental',
                description:'1/4 acre',
                location:'ikinu',
                price:'1.5 M',
              },
              {
                id:5,
                name:'Ikinu',
                Poster:'',
                category:'onsale',
                description:'1/4 acre',
                location:'ikinu',
                price:'1.5 M',
              },
              {
                id:6,
                name:'Ikinu',
                Poster:'',
                category:'onsale',
                description:'1/4 acre',
                location:'ikinu',
                price:'1.5 M',
              }
            ]}
    },
    computed: {
      ...mapState(['events']),
      popular() {
        return this.events ? this.events.filter(data =>
          data.users_favourite.length >= 1
        ) : 0
      },
      online() {
        return this.events ? this.events.filter(data =>
          data.event_type === "online"
        ) : 0
      }
    },
    created() {
    //   this.getEvents()
    },
    methods: {
      getEvents() {
        this.$axios.get('events/upcoming-events').then((res) => {
          const events = res.data.filter((event) => {
            return (
              new Date(event.end_date).getTime() > new Date().getTime() &&
              event.is_active === true
            );
          });
          this.$store.commit('SET_EVENTS', events)
        })
      },
    },
  }
  </script>
  
  <style>
  </style>