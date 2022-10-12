<template>
    <!-- event card -->
  
    <div class="flex justify-between">
      <!-- event card -->
      <div class="
      relative
          flex flex-col
          gap-5
          bg-white
          rounded-md
          hover:drop-shadow-md
          cursor-pointer
          w-60
          events
        ">
        <!-- event header -->
        <!-- event image  -->
        <div class="relative w-full h-40  popular" :style="{
          background: `linear-gradient(
        to right,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2)
      ),url(${Poster})`,
        }">
            <!-- <div class="absolute top-0 left-0 bg-black text-white p-2 z-9">{{ Category }}</div> -->
          <div class="absolute -bottom-4 right-2 flex gap-2 items-center">
            <div class="relative">
            <!-- share button  -->
            <button class="
                p-2
                bg-white
                rounded-full
                drop-shadow-sm
                hover:drop-shadow-md hover:text-lime
              ">
                <svg  @click="toggleShare"  class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z">
                  </path>
                </svg>
            </button>
                  <div :class="[share ? 'flex' : 'hidden']" class="absolute bottom-10 right-0  gap-2">
                  <svg @click="facebook" class="cursor-pointer p-1 fill-fb bg-white rounded-full lg:fill-bg hover:fill-fb w-8 h-8" stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                  </svg>
                  <svg @click="instagram" class="cursor-pointer p-1 fill-ig bg-white rounded-full lg:fill-bg hover:fill-ig w-8 h-8" stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                  <svg @click="whatsapp" class="cursor-pointer p-1 fill-whatsapp bg-white rounded-full lg:fill-bg hover:fill-whatsapp w-8 h-8" stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  <svg @click="twitter" class="cursor-pointer p-1 fill-fb bg-white rounded-full lg:fill-bg hover:fill-twitter w-8 h-8" stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                  </svg>
                  </div>
            </div>
            <!-- link button  -->
            <button class="
                p-2
                bg-white
                rounded-full
                drop-shadow-sm
                hover:drop-shadow-md hover:text-red
              ">
              <svg class="w-5 h-5" :fill="[isLiked ? 'red' : 'none']" :stroke="[isLiked ? 'red' : 'currentColor']"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" @click="toggleLike">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                </path>
              </svg>
            </button>
          </div>
        </div>
        <!-- event details  -->
        <nuxt-link :to="`/properties/${id}`"  class="flex flex-col p-2 pt-3 items-start">
          <!-- event title  -->
          <div>
            <div class="font-bold">{{Name }}</div>
            <div class="">KES {{ Price }}</div>
            <div class="">{{ Location }}</div>
            <div class="">{{ Description }}</div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </template>
  
<script>
  export default {
    props: [
      'Name',
      'Location',
      'Price',
      'Description',
      'Category',
      'Poster',
      'id',
    ],
    data() {
      return {
        isLiked: false,
        share: false
      }
    },
    computed: {
      is_live(){
          return new Date(this.$props.startDate).getTime() < new Date().getTime()
      },
      is_soldout() {
        return this.$props.tickets.filter((ticket) => {
            return new Date(ticket.sale_end_date).getTime() > new Date().getTime() && new Date(ticket.sale_start_date).getTime() < new Date().getTime() && ticket.available_quantity > 0
          })
      },
    },
    methods: {
      whatsapp() {
        const link = `http://mticketfe.emalify.com/${this.eventSlug}`
        const message = this.eventName
        const location = this.eventLocation
        const date =  new Date(this.startDate).toLocaleDateString('en-us', {day: '2-digit',weekday: 'short',month: 'short',year: 'numeric',})
        const api = `https://api.whatsapp.com/send?text=Twende ${message} at ${location} on ${date}, Buy your tickets at ${link} `
        window.open(api)
        this.share = false
      },
      facebook() {
        const link = `http://mticketfe.emalify.com/${this.eventSlug}`
        const message = this.eventName
        const tags = this.eventTags
        const location = this.eventLocation
        const date =  new Date(this.startDate).toLocaleDateString('en-us', {day: '2-digit',weekday: 'short',month: 'short',year: 'numeric',})
        const api = `https://www.facebook.com/sharer.php?u=${link} Twende ${message} at ${location} on ${date}.${tags}`
        window.open(api)
        this.share = false
      },
      twitter() {
        const link = `http://mticketfe.emalify.com/${this.eventSlug}`
        const message = this.eventName
        const location = this.eventLocation
        const date =  new Date(this.startDate).toLocaleDateString('en-us', {day: '2-digit',weekday: 'short',month: 'short',year: 'numeric',})
        const tags = this.eventTags
        const api = `https://twitter.com/share?url=${link}&text=Twende ${message} at ${location} on ${date}, Buy your tickets at &hashtags=${tags}`
        window.open(api)
        this.share = false
      },
      instagram() { 
        const poster = this.eventPoster
        const api = `https://www.instagram.com/p/${poster}`
        window.open(api)
        this.share = false
      },
      toggleShare() {
        console.log('share')
        this.share = !this.share
      },
      toggleLike() {
        this.isLiked = !this.isLiked
        this.$axios
          .$post('favourite_event', {
            event_id: this.id,
            is_favourited: true
          })
      },
    },
  }
  </script>
  
<style>
  .events .popular {
    background-repeat: no-repeat;
    background-size: cover !important;
    background-position:top center !important;
    width: 240px !important;
  }
  </style>