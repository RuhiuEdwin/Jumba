<template>
    <!-- event card -->
  
    <div class="card flex justify-between">
      <!-- event card -->
      <div class="
      relative
          flex flex-col
          gap-5
          bg-white
          rounded-md
          drop-shadow-xl
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
        </div>
        <!-- event details  -->
        <nuxt-link :to="`/properties/${id}`"  class="flex flex-col p-2 items-start">
          <!-- event title  -->
          <div>
            <div class="font-bold capitalize">{{Name }}</div>
            <div class="capitalize font-light">KES {{ Price }}</div>
            <div class="capitalize font-light">{{ Location }}</div>
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
        const link = `https://urbanridgepropertieslimited.co.ke/${this.eventSlug}`
        const message = this.eventName
        const location = this.eventLocation
        const date =  new Date(this.startDate).toLocaleDateString('en-us', {day: '2-digit',weekday: 'short',month: 'short',year: 'numeric',})
        const api = `https://api.whatsapp.com/send?text=Twende ${message} at ${location} on ${date}, Buy your tickets at ${link} `
        window.open(api)
        this.share = false
      },
      facebook() {
        const link = `https://urbanridgepropertieslimited.co.ke/${this.eventSlug}`
        const message = this.eventName
        const tags = this.eventTags
        const location = this.eventLocation
        const date =  new Date(this.startDate).toLocaleDateString('en-us', {day: '2-digit',weekday: 'short',month: 'short',year: 'numeric',})
        const api = `https://www.facebook.com/sharer.php?u=${link} Twende ${message} at ${location} on ${date}.${tags}`
        window.open(api)
        this.share = false
      },
      twitter() {
        const link = `https://urbanridgepropertieslimited.co.ke/${this.eventSlug}`
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