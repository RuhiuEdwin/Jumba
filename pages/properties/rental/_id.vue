<template>
    <div
      v-loading.fullscreen.lock="fullscreenLoading"
      class="relative bg-bg d-page"
    >
      <DetailsHeader class="fixed top-0 left-0 w-screen z-20" />
      <!-- hero  -->
      <div
        v-if="propertyData"
        :style="{
          background: `linear-gradient(
        to right,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.8)
      ),url(${propertyData.event_poster_thumbnail_url}`,
        }"
        class="detail-hero"
      ></div>
      <!-- event details  -->
  
      <div
        v-if="propertyData"
        class="flex flex-col lg:flex-row max-w-screen-lg m-auto -mt-80"
      >
        <div class="bg-white flex-initial w-11/12 mx-auto lg:w-2/3">
          <!-- event image  -->
          <div
            class="detail"
            :style="{ background: `url(${propertyData.event_poster_url}` }"
          >
            <div class="absolute flex gap-3 top-5 left-5">
              <svg
                :fill="[isLiked ? 'red' : 'none']"
                :stroke="[isLiked ? 'red' : 'currentColor']"
                @click="toggleLike"
                class="w-8 h-8 p-1 bg-white drop-shadow-lg cursor-pointer rounded-full hover:stroke-red"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
  
              <div class="relative">
                <!-- share button  -->
                <svg
                  @click="toggleShare"
                  class="w-8 h-8 p-1 bg-white drop-shadow-lg cursor-pointer rounded-full hover:stroke-lime"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  ></path>
                </svg>
                <div
                  :class="[share ? 'flex' : 'hidden']"
                  class="absolute -bottom-10 left-0 gap-2"
                >
                  <svg
                    @click="facebook"
                    class="cursor-pointer p-1 bg-white rounded-full fill-bg hover:fill-fb w-8 h-8"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                    />
                  </svg>
                  <svg
                    @click="instagram"
                    class="cursor-pointer p-1 bg-white rounded-full fill-bg hover:fill-ig w-8 h-8"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    />
                  </svg>
                  <svg
                    @click="whatsapp"
                    class="cursor-pointer p-1 bg-white rounded-full fill-bg hover:fill-whatsapp w-8 h-8"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                    />
                  </svg>
                  <svg
                    @click="twitter"
                    class="cursor-pointer p-1 bg-white rounded-full fill-bg hover:fill-twitter w-8 h-8"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <!-- event details  -->
          <div id="location" style="height: 500px"></div>
        </div>
        <!-- palnning and logistics  -->
        <div
          class="bg-offwhite flex-initial w-11/12 mx-auto lg:w-1/3 p-5 flex flex-col"
        >
          <!-- ttile  -->
          <div class="font-bold text-xl flex gap-3 items-center">
            {{ propertyData.event_name }}
          </div>
          <!-- host  -->
          <div class="text-sm text-gray">Hosted by {{ organiser }}</div>
          <!-- date and time  -->
          <div v-html="propertyData.description"></div>
          <div class="flex flex-col mb-5 mt-5">
            <div class="font-bold flex gap-3 items-center text-base">
              Date And Time
            </div>
            <!-- date  -->
            <div class="text-sm">
              {{
                new Date(propertyData.start_date).toLocaleDateString("en-us", {
                  day: "2-digit",
                })
              }},
              {{
                new Date(propertyData.start_date).toLocaleDateString("en-us", {
                  weekday: "short",
                })
              }}
              {{
                new Date(propertyData.start_date).toLocaleDateString("en-us", {
                  month: "short",
                })
              }}
              {{
                new Date(propertyData.start_date).toLocaleDateString("en-us", {
                  year: "numeric",
                })
              }}
            </div>
            <!-- time  -->
            <div class="text-sm">
              {{
                new Date(propertyData.start_date).toLocaleTimeString("en-us", {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              }}
              to
              {{
                new Date(propertyData.end_date).toLocaleTimeString("en-us", {
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZone: "EAT",
                })
              }}
            </div>
            <!-- <nuxt-link to="/" class="text-sm text-lime underline"
              >Add to Calendar</nuxt-link
            > -->
          </div>
          <!-- location  -->
          <div class="flex flex-col mb-5 mt-5">
            <!-- title  -->
            <div class="font-bold flex gap-3 items-center text-base">
              Location
            </div>
            <!-- venue  -->
            <div class="text-sm">{{ propertyData.location }}</div>
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
              v-if="is_soldout.length === 0"
              class="bg-red p-1 rounded-sm text-white hover:bg-lime w-40 text-sm"
            >
              SOLD OUT
            </button>
            <button
              v-else
              class="bg-gray p-1 rounded-sm text-white hover:bg-lime w-40 text-sm"
              @click="openCheckOut()"
            >
              BOOK YOUR TICKET
            </button>
          </div>
          <!-- tags  -->
          <div class="flex flex-col mb-5 mt-5 gap-2">
            <div class="font-bold flex gap-3 items-center text-base">Tags</div>
            <div
              class="bg-gray p-1 pr-2 pl-2 rounded-sm text-sm hover:drop-shadow-md text-black"
            >
              {{ propertyData.tags }}
            </div>
          </div>
          <!-- share  -->
          <div class="flex flex-col mb-5 mt-5 gap-2">
            <div class="font-bold flex gap-3 items-center text-base">
              Share with Friend
            </div>
            <!-- socials  -->
            <div class="flex gap-5">
              <svg
                @click="facebook"
                class="w-6 h-6 fill-gray hover:fill-fb cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                />
              </svg>
              <svg
                @click="twitter"
                class="w-6 h-6 fill-gray hover:fill-twitter cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                />
              </svg>
              <svg
                @click="instagram"
                class="w-6 h-6 fill-gray hover:fill-ig cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
              <svg
                @click="whatsapp"
                class="w-6 h-6 fill-gray hover:fill-whatsapp cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
  
      <div class="max-w-screen-lg m-auto mt-10 flex flex-col gap-3 p-2 lg:p-0">
        <div class="font-bold text-xl flex gap-3 items-center">
          Other Events You May Like
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
          <div v-for="property in properties" :key="property.id">
          <PropertyCard 
            :Name="property.name"
            :Poster="property.poster"
            :Price="property.price"
            :Category="property.category"
            :Description="property.description"
            :Location="property.location"
            :id="property.id"
          />
          </div>
        </div>
        <nuxt-link
          to="/Events"
          class="m-auto border-2 border-blackish text-sm p-3 w-80 flex items-center justify-center mb-10 mt-10 hover:text-lime hover:border-lime justify-self-center text-font"
        >
          See More
        </nuxt-link>
      </div>
      <TheFooter />
      <el-dialog
        title="Check Out"
        :visible.sync="checkOut"
        :before-close="handleClose"
      >
        <CheckoutDrawer />
      </el-dialog>
    </div>
  </template>
  
  <script>
import PropertyCard from '../../../components/PropertyCard.vue';
//   import { mapState, mapGetters } from "vuex";
//   import FeatureEvent from "../../Components/FeatureEvent.vue";
//   import DetailsHeader from "~/components/DetailsHeader.vue";
//   import CheckoutDrawer from "~/components/CheckoutDrawer.vue";
  export default {
    rules: {
      "object-shorthand": "off",
    },
    data() {
      return {
        isLiked: false,
        fullscreenLoading: false,
        eventId: this.$route.params.event_slug,
        code: this.$route.params.user_code,
        propertyData: null,
        checkOut: false,
        share: false,
        organiser: "",
        is_live: "",
        is_soldout:'',
      };
    },
    auth: false,
    components: { PropertyCard },
    computed: {
      ...mapState(["properties"]),
    },
    mounted() {
      this.$bus.$on("close-checkout-drawer", () => {
        this.checkOut = false;
      });
      this.getpropertyData().then((res) => {
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
      this.getEvents();
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
        const link = `http://mticketfe.emalify.com/${this.eventSlug}`;
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
        const link = `http://mticketfe.emalify.com/${this.eventSlug}`;
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
        const link = `http://mticketfe.emalify.com/${this.eventSlug}`;
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
        const link = `http://mticketfe.emalify.com/${this.eventSlug}`;
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
      async getpropertyData() {
        const data = await this.$store.dispatch("getpropertyData", this.eventId);
        console.log(this.$route)
        this.propertyData = data;
        this.is_live =
          new Date(this.propertyData.start_date).getTime() < new Date().getTime()
  
      this.is_soldout = this.propertyData.tickets.filter((ticket) => {
          return (
            new Date(ticket.sale_end_date).getTime() > new Date().getTime() &&
            new Date(ticket.sale_start_date).getTime() < new Date().getTime() &&
            ticket.available_quantity > 0
          );
        });
        this.$axios
          .get(`users/organiser/${this.propertyData.user_id}`)
          .then((res) => {
            this.organiser = res.data.full_name;
          });
        this.fullscreenLoading = false;
      },
      getEvents() {
        this.$axios.get("events/upcoming-events").then((res) => {
          const events = res.data.filter((event) => {
            return (
              new Date(event.end_date).getTime() > new Date().getTime() &&
              event.is_active === true
            );
          });
          this.$store.commit("SET_EVENTS", events);
        });
      },
      openCheckOut() {
        this.checkOut = true;
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
  </style>