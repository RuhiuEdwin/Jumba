<template>
    <div
      v-loading.fullscreen.lock="screenLoading" id="location" class="w-full flex flex-col justify-between">
    </div>
</template>

<script>
export default {
  props: [
      'property'
  ],
  rules: {
    "object-shorthand": "off",
  },
  data() {
    return {
      screenLoading: false,
    };
  },
  auth: false,
  computed: {
  },
  mounted() {
    const geocoder = new window.google.maps.Geocoder();
    const latlng = { lat: -0.0236, lng: 37.9062 };
      const location = new window.google.maps.Map(
        document.getElementById("location"),
        {
          zoom: 16,
          center: latlng,
        }
      );
      // console.log(location, latlng, geocoder)
      this.MapsInit(location, latlng, geocoder);
  },
  created() {
    this.screenLoading = true;
  },
  methods: {
  MapsInit(location, geocoder) {
      const venue = this.property ? this.property : "Nairobi";
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

      this.screenLoading = false;
    },
  },
};
</script>

<style>
/* Set the size of the div element that contains the map */
#location {
  height: 70vh;
  /* The height is 400 pixels */
  width: 100%;
  /* The width is the width of the web page */
}
</style>