<template>
    <div class="mb-10">
      <!-- featured events wrapper  -->
      <div
        class="
          max-w-screen-lg 
          m-auto
          flex flex-col
          gap-5
          p-2
          lg:pl-0 lg:pr-0
        "
      >
        <!-- title and controller  -->
        <div class="flex justify-between">
          <!-- title  -->
          <div class="font-bold text-xl">All Properties</div>
        </div>
        <!-- card wrapper -->
        <div class="flex justify-center flex-wrap gap-5 lg:justify-start">
              <div v-for="property in more" :key="property.id" >
                <!-- event card -->
                <PropertyCard 
                  :Name="property.name"
                  :Poster="property.image"
                  :Price="property.price"
                  :Category="property.category"
                  :Location="property.location"
                  :id="property.id"
                />
              </div>
        </div>
      </div>
    </div>
  </template>
    
  <script>
    import { mapState } from 'vuex'
  import PropertyCard from '../components/PropertyCard.vue'
    export default {
      data() {
          return {
              isLiked: false,
          };
      },
      methods: {
          toggleLike() {
              this.isLiked = !this.isLiked;
          },
          share() { },
      },
      computed: {
          ...mapState(["properties"]),
          more(){
            return this.properties ? this.properties.filter(data =>
                data.isFeatured === false
            ) : ''
          }
      },
      components: { PropertyCard }
  }
    </script>
    
  <style>
    </style>