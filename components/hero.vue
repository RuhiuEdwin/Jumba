<template>
  <div class="block hero relative">
  <el-carousel trigger="click"  class="h-full z-0">
    <el-carousel-item v-for="property in properties" :key="property"
        :style="{
          background: `linear-gradient(
      to right,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ),url(${property.image})`,
        }" class="main">
        <div class="text-white relative max-w-screen-lg m-auto">
          <div class="w-full lg:w-3/5 absolute -bottom-72 p-10 lg:p-0">
            <div class="font-black text-2xl">{{ property.name }}</div>
            <div class="flex flex-col lg:flex-row gap-1 mt-2 lg:gap-5 w-full">
              <div class="flex items-center gap-2">
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
                <div v-if="property.price !== 0" class="text-xs font-light flex items-center gap-1">
                  <div class="font-light text-sm">
                    {{
                      property.size
                    }}
                  </div>
                  at
                  <div  class="font-light text-sm">
                    KES {{property.price
                    }}
                  </div>
                </div>
                <div v-else class="text-xs font-light flex items-center gap-1">
                  <div class="font-light text-sm">
                    {{
                      property.size
                    }}
                  </div>
                  <div   class="font-light text-sm">
                    Contact For Details
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-2">
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
                <div class="font-light">{{property.location}}</div>
              </div>
            </div>
          </div>
        </div>
    </el-carousel-item>
  </el-carousel>
    <div class="relative max-w-screen-lg m-auto">
      <div class="absolute bottom-5 lg:bottom-36 z-10">
        <Search />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Search from './search.vue'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['properties']),
  },
  components: { Search },
}
</script>

<style>

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
.hero{
  height: 75vh;
  max-height: 800px ;
  overflow: none;
}
/* .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item {
  background-position: top center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
} */

.el-carousel__container {
  height: 100% !important;
  overflow: none;
}
.el-carousel__indicators--horizontal {
  left: 90% !important;
}
.el-carousel__button {
  width: 10px !important;
  height: 10px !important;
  border-radius: 50%;
  background-color: #000 !important;
} 
.main {
    background-repeat: no-repeat;
    background-size: cover !important;
    background-position:center center !important;
}
</style>