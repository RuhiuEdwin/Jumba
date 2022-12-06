<template>
    <div class="relative">
      <div class="
          bg-white
          flex flex-col
          items-start
          lg:items-end lg:justify-between
          p-2
          gap-2
          w-screen
          max-w-screen-lg 
          lg:m-auto
          rounded-lg
          md:flex-row
          search
          lg:border-1
          lg:border-black
          lg:drop
        ">
        <div class="flex lg:w-1/2 flex-col items-start w-5/6 lg:border-r lg:border-r-blackish">
            <div class="text-blackish font-bold">Property Size</div>
          <div class="flex items-center gap-2  w-full">
            <svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input v-model="event" type="text" placeholder="Property Size"
              class="p-1 w-full" @input="filterEvents()" />
          </div>
        </div>
        <div class="flex lg:w-1/2 flex-col items-start w-5/6">
          <div class="text-blackish font-bold">Property Location</div>
          <div class="flex items-center gap-2 w-full">
            <svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z">
              </path>
            </svg>
            <input v-model="venue" type="text" placeholder="Property Location"
              class="p-1 w-full" @input="filterLocation()" />
          </div>
        </div>
      </div>
      <div class="absolute bg-white w-5/6 -top-20 lg:top-20 left-0 rounded-lg" v-if="event">
        <div v-if="filteredEvents === ''">No Properties with that Size</div>
        <div v-for="result in filteredEvents" :key="result" class="flex flex-col p-1">
          <nuxt-link :to="`/properties/${result.id}`" 
            class="flex justify-between w-full cursor-pointer hover:bg-bg p-3">
            <div>
              {{ result.name }}
            </div>
            <div>
              {{ result.location }}, {{result.size}}
            </div>
            <div>
              {{
                result.price
              }}
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="absolute bg-white w-5/6 -top-20 lg:top-20 left-0 rounded-lg" v-if="venue">
        <div v-if="filteredVenues === ''">No Properties at that location</div>
        <div v-for="result in filteredVenues" :key="result" class="flex flex-col p-1">
          <nuxt-link :to="`/properties/${result.id}`" 
            class="flex justify-between w-full cursor-pointer hover:bg-bg p-3">
            <div>
              {{ result.name }}
            </div>
            <div>
              {{ result.location }}, {{result.size}}
            </div>
            <div>
              {{
                result.price
              }}
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        value1: '',
        event: '',
        venue: '',
        date: '',
        filteredEvents: [],
        filteredVenues: [],
        filteredTime: [],
        pickerOptions: {
            disabledDate(time) {
              return time.getTime() < Date.now();
            },
        }
      }
    },
    computed: {
      ...mapState(['properties']),
    },
    methods: {
      filterEvents() {
        this.filteredEvents = this.properties.filter((data) => {
          return data.size.includes(this.event)
        })
      },
      filterLocation() {
        this.filteredVenues = this.properties.filter((data) => {
          return data.location.toLowerCase().includes(this.venue.toLowerCase()) || data.location.toLowerCase().includes(this.venue.toLowerCase()) 
        })
      },
      filterDate() {
        // console.log(this.date)
        this.filteredTime = this.events.filter((data) => {
          return data.start_date.includes(this.date)
        })
      },
    },
  }
  </script>
  
  <style>
  .search .el-date-range-picker .el-picker-panel__body {
    min-width: 100% !important;
  }
  .search .el-date-editor--datetimerange.el-input__inner {
    width: 100% !important;
  }
  .search .el-date-range-picker {
    width: 100% !important;
  }
  .search input ::placeholder {
    color: black !important;
  }
  @media screen and (min-width: 800px) {
    .search .el-date-range-picker .el-picker-panel__body {
      min-width: 200px !important;
    }
    .search .el-date-editor--datetimerange.el-input__inner {
      width: 200px !important;
    }
    .search .el-date-range-picker {
      width: 500px !important;
    }
  }
  </style>