<template>
    <!-- <div class="bg-black pt-20 pb-20"> -->
        <!-- numbers wrapper  -->
        <div class="bg-black px-20 py-10 drop-shadow-lg mb-10 max-w-screen-lg m-auto flex flex-col lg:flex-row justify-between gap-5 text-white rounded-2xl">
            <!-- active events  -->
            <div class="lg:w-1/3 flex flex-col items-center lg:gap-5 lg:border-r lg:border-r-blackish">
                <div class="font-bold text-3xl">
                    {{listingsCount}}
                </div>
                <div class="text-sm font-light">
                    LISTINGS
                </div>
            </div>
            <!-- active users  -->
            <div class="lg:w-1/3 flex flex-col items-center gap-5 lg:border-r lg:border-r-blackish">
                <div class="font-bold text-3xl">
                    {{clientsCount}}
                </div>
                <div class="text-sm font-light">
                    HAPPY CLIENTS
                </div>
            </div>
            <!-- tickets sold  -->
            <div class="lg:w-1/3 flex flex-col items-center gap-5 divide-y-0">
                <div class="font-bold text-3xl">
                    {{soldCount}}
                </div>
                <div class="text-sm font-light">
                    PROPERTIES SOLD
                </div>
            </div>
        </div>
    <!-- </div> -->
  </template>
  
  <script>
  export default {
      data() {
          return {
              listingsCount: '100',
              clientsCount: '42',
              soldCount: '67'
          }
      },
    //   created() {
        //   this.getEvents()
        //   this.getTickets()
        //   this.getUsers()
    //   },
      methods: {
      getEvents() {
        this.$axios.get('events/').then((res) => {
          this.eventsCount = res.data.length
        })
      },
      getTickets() {
        this.$axios.get('individual_tickets/total-sold').then((res) => {
          this.ticketCount = res.data.length
        })
      },
      getUsers() {
        this.$axios.get('users/total-users').then((res) => {
          this.usersCount = res.data.length
        })
      },
      }
  }
  </script>
  
  <style>
  
  </style>