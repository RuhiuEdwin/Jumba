<template>
    <!-- card  -->
      <div
        class="p-10 relative text-white w-full h-44 rounded-lg popular"
        :style="{
          background: `linear-gradient(
        to right,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.8)
      ),url(${eventPoster}`,
        }"
      >
        <!-- card title  -->
        <div class="flex flex-col gap-1 items-start absolute top-5 left-5">
          <div class="font-bold text-xl">{{ eventName }}</div>
          <div class="font-light text-sm flex gap-3">
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            {{
              new Date(startDate).toLocaleDateString("en-us", {
                day: "2-digit",
              })
            }}
            {{
              new Date(startDate).toLocaleDateString("en-us", {
                month: "short",
              })
            }}
            {{
              new Date(startDate).toLocaleDateString("en-us", {
                year: "numeric",
              })
            }}
            at
            {{ new Date(startDate).toLocaleTimeString("en-us") }}
          </div>
          <div class="font-light text-sm flex gap-3">
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            {{ eventLocation }}
          </div>
        </div>
      </div>
  </template>
  
  <script>
  export default {
    props: [
      "eventName",
      "city",
      "eventLocation",
      "eventPoster",
      "startDate",
      "eventSlug",
      "id",
      "tickets",
      "usecode"
    ],
    computed: {
      is_live() {
        return new Date(this.$props.startDate).getTime() < new Date().getTime();
      },
      is_soldout() {
        return this.$props.tickets.filter((ticket) => {
          return (
            new Date(ticket.sale_end_date).getTime() > new Date().getTime() &&
            new Date(ticket.sale_start_date).getTime() < new Date().getTime() &&
            ticket.available_quantity > 0
          );
        });
      },
    },
    methods: {
      getDetails() {
        this.$axios.get("events/" + this.id).then((res) => {
          const details = res.data;
          this.$store.commit("SELECTED_EVENT", details);
        });
      },
    },
  };
  </script>
  
  <style>
  .popular {
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: top center !important;
    width: 320px !important;
  }
  </style>