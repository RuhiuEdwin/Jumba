<template>
    <div
      v-loading.fullscreen.lock="fullscreenLoading"
      class="relative bg-bg d-page"
    >
      <!-- hero  -->
      <div
        v-if="propertyData"
        :style="{
          background: `linear-gradient(
        to right,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.8)
      ),url(${propertyData.image}`,
        }"
        class="detail-hero flex align-center justify-center pt-40"
      >
      <h1 class="font-bold text-2xl uppercase text-white">{{ propertyData.name }}</h1>
    </div>
      <!-- event details  -->
  
      <div
        v-if="propertyData"
        class="flex flex-col lg:flex-row max-w-screen-lg m-auto -mt-80"
      >
        <div class="bg-white flex-initial w-11/12 mx-auto lg:w-2/3">
          <!-- event image  -->
          <div
            class="detail"
            :style="{ background: `url(${propertyData.image}` }"
          >
          </div>
          <!-- event details  -->
        </div>
        <!-- palnning and logistics  -->
        <div
          class="bg-gray-50 flex-initial w-11/12 mx-auto lg:w-1/3 p-5 flex flex-col"
        >
          <!-- ttile  -->
          <div class="font-bold text-xl flex gap-3 items-center">
            {{ propertyData.name }}
          </div>
          <div class="flex flex-col">
            <div class="font-bold flex gap-3 items-center text-base">
              Size
            </div>
            <!-- venue  -->
            <div class="text-sm capitalize">{{ propertyData.size }}</div>
          </div>
          <!-- host  -->
          <!-- <div class="text-sm text-gray">Hosted by {{ organiser }}</div> -->
          <!-- date and time  -->
          <div class="flex flex-col">
            <div class="font-bold flex gap-3 items-center text-base capitalize">
              Description
            </div>
            <!-- venue  -->
            <div class="text-sm capitalize">{{ propertyData.description }}</div>
          </div>
          <!-- location  -->
          <div class="flex flex-col mb-5 mt-5">
            <!-- title  -->
            <div class="font-bold flex gap-3 items-center text-base">
              Location
            </div>
            <!-- venue  -->
            <div class="text-sm capitalize">{{ propertyData.location }}</div>
          </div>
          <!-- ticket type  -->
          <div class="flex flex-col gap-3">
            <!-- <el-select v-model="value" clearable placeholder="Select ticket type">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select> -->
            <button
              class="bg-gray-200 p-1 rounded-sm text-white hover:bg-lime w-40 text-sm"
              @click="openCheckOut()"
            >
              BOOK SITE VISIT
            </button>
          </div>
          <!-- tags  -->
          <!-- share  -->
        </div>
      </div>
      <div v-if="propertyData"
      class="flex flex-col lg:flex-row max-w-screen-lg m-auto">
        <div id="location" style="height: 500px"></div>
      </div>
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <div class="max-w-screen-lg m-auto mt-10 flex flex-col gap-3 p-2 lg:p-0">
        <div class="font-bold text-xl flex gap-3 items-center">
          Other Properties You May Like
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
        <div class="flex justify-center flex-wrap gap-5 lg:justify-start">
          <div v-for="property in moreProperties" :key="property.id">
          <PropertyCard 
            :Name="property.name"
            :Poster="property.image"
            :Price="property.price"
            :Description="property.description"
            :Location="property.location"
            :id="property.id"
          />
          </div>
        </div>
        <nuxt-link
          to="/properties"
          class="m-auto border-2 border-blackish text-sm p-3 w-80 flex items-center justify-center mb-10 mt-10 hover:text-lime hover:border-lime justify-self-center text-font"
        >
          See More
        </nuxt-link>
      </div>
    </div>
  </template>
  
  <script>
import PropertyCard from '../../components/PropertyCard.vue';
  import { mapState } from "vuex";
  export default {
    rules: {
      "object-shorthand": "off",
    },
    data() {
      return {
        isLiked: false,
        fullscreenLoading: false,
        Id: this.$route.params.id,
        propertyData: null,
        checkOut: false,
        share: false,
      };
    },
    auth: false,
    components: { PropertyCard },
    computed: {
      ...mapState(["properties"]),
    moreProperties() {
      return this.properties.filter((item) => item.id !== this.Id);
    },
    },
    mounted() {
      this.getProperty().then((res) => {
      const geocoder = new window.google.maps.Geocoder();
      const latlng = { lat: -0.0236, lng: 37.9062 };
        const location = new window.google.maps.Map(
          document.getElementById("location"),
          {
            zoom: 16,
            center: latlng,
          }
        );
        this.MapsInit(location, latlng, geocoder);
      });
    },
    created() {
      this.fullscreenLoading = true;
      // this.getEvents();
    },
    methods: {
      MapsInit(location, latlng, geocoder) {
        console.log("getting map");
        console.log(location);
        console.log(latlng);
        console.log(geocoder);
        console.log(this.propertyData);
        const venue = this.propertyData ? this.propertyData.location : "Nairobi";
        geocoder.geocode({ address: venue }, (results, status) => {
          if (status === "OK") {
            location.setCenter(results[0].geometry.location);
            const marker = new window.google.maps.Marker({
              position: results[0].geometry.location,
              map: location,
            });
            console.log(marker);
          } else if (status !== "ZERO_RESULTS") {
            alert(
              "Geocode was not successful for the following reason: " + status
            );
          }
        });
      },
      toggleShare() {
        console.log("share");
        this.share = !this.share;
      },
      whatsapp() {
        const link = `https://urbanridgepropertieslimited.co.ke/${this.eventSlug}`;
        const message = this.eventName;
        const location = this.eventLocation;
        const date = new Date(this.startDate).toLocaleDateString("en-us", {
          day: "2-digit",
          weekday: "short",
          month: "short",
          year: "numeric",
        });
        const api = `https://api.whatsapp.com/send?text=Twende ${message} at ${location} on ${date}, Buy your tickets at ${link} `;
        window.open(api);
        this.share = false;
      },
      facebook() {
        const link = `https://urbanridgepropertieslimited.co.ke/${this.eventSlug}`;
        const message = this.eventName;
        const tags = this.eventTags;
        const location = this.eventLocation;
        const date = new Date(this.startDate).toLocaleDateString("en-us", {
          day: "2-digit",
          weekday: "short",
          month: "short",
          year: "numeric",
        });
        const api = `https://www.facebook.com/sharer.php?u=${link}.&text=Twende ${message} at ${location} on ${date}.${tags}`;
        window.open(api);
        this.share = false;
      },
      twitter() {
        const link = `https://urbanridgepropertieslimited.co.ke/${this.eventSlug}`;
        const message = this.eventName;
        const location = this.eventLocation;
        const date = new Date(this.startDate).toLocaleDateString("en-us", {
          day: "2-digit",
          weekday: "short",
          month: "short",
          year: "numeric",
        });
        const tags = this.eventTags;
        const api = `https://twitter.com/share?url=${link}&text=Twende ${message} at ${location} on ${date}, Buy your tickets at &hashtags=${tags}`;
        window.open(api);
        this.share = false;
      },
      instagram() {
        const link = `https://urbanridgepropertieslimited.co.ke/${this.eventSlug}`;
        const message = this.eventName;
        const location = this.eventLocation;
        const date = new Date(this.startDate).toLocaleDateString("en-us", {
          day: "2-digit",
          weekday: "short",
          month: "short",
          year: "numeric",
        });
        const tags = this.eventTags;
        const api = `https://api.instagram.com/send?text=${link}.Twende ${message} at ${location} on ${date}, Buy your tickets at &hashtags=${tags}`;
        window.open(api);
        this.share = false;
      },
      toggleLike() {
        this.isLiked = !this.isLiked;
        this.$axios.$post("favourite_event", {
          event_id: this.eventId.id,
          is_favourited: true,
        });
      },
      handleClose() {
        this.checkOut = false;
      },
      async getProperty() {
        const data = await this.$store.dispatch("getProperty", this.Id);
        console.log(this.$route)
      this.propertyData = data;
      this.$store.dispatch("getProperties")
        this.fullscreenLoading = false;
      },
    },
  };
  </script>
  
  <style>
  .detail-hero {
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center center !important;
    height: 70vh;
    width: 100%;
  }
  
  .detail {
    height: 50vh;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center center !important;
    /* width: 100%; */
    position: relative;
  }
  
  .d-page .el-dialog {
    width: 90% !important;
    max-width: 500px !important;
    background: #e5e5e5;
  }
  
  .d-page .el-dialog .el-dialog__header,
  .d-page .el-dialog .el-dialog__headerbtn {
    color: #000 !important;
  }
  /* Set the size of the div element that contains the map */
  #map {
    height: 400px;
    /* The height is 400 pixels */
    width: 100%;
    /* The width is the width of the web page */
  }
    .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  </style>