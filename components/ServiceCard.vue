<template>
    <!-- card  -->
      <div
        class="p-5 text-white w-full h-44 rounded-lg popular"
        :style="{
          background: `linear-gradient(
        to right,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)
      ),url(${Poster}`,
        }"
      >
        <!-- card title  -->
        <div class="flex flex-col h-full items-start justify-between ">
          <div class="font-bold text-xl">{{ Name }}</div>
          <div class="font-light text-xs flex gap-3">
            {{ Description }}
          </div>
        </div>
      </div>
  </template>
  
  <script>
  export default {
    props: [
      "Name",
      "Description",
      "Poster"
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