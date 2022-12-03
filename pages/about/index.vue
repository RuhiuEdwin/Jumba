<template>
    <div class="relative bg-bg flex flex-col gap-5">
        <div class="p-10 h-96 w-screen relative abg lg:pt-20">
            <h1 class="font-bold text-center text-white text-2xl uppercase">ABOUT US</h1>
            <div class="flex flex-col gap-2">
                <div class="text-white text-center font-light">
                    Get to know all about us.
                </div>
            </div>
        </div>
        <div class="login-box p-5 bg-white w-11/12 max-w-screen-lg m-auto -mt-40">
            <h2 class="font-bold text-lg">OUR STORY</h2>
            <p class="text-center text-xs lg:text-sm w-full lg:w-3/4 m-auto">
                At Urbanridge Properties Limited, we are a boutique team of full-time real estate professionals and trusted advisors. Our singular focus is achieving the highest value for our San Francisco home buyer and seller clients through expert strategy, market insight and skilled negotiations, while ensuring you are comfortable, well-informed and patiently guided throughout the process. We attribute our success to both our passion for homes, ongoing training and honed intuition in the psychology of buying and selling. Real estate is an integral part of your financial plan. In the San Francisco Bay Area, real estate is very expensive and often one of your most valuable investments as well as your sanctuary. Now more than ever, home is truly where the heart is—and board meetings, recess, and happy hour too. We specialize in getting top dollar and the highest value for our clients. When you sell a home, you want to get the highest possible price. When you buy a home, you want to buy the right home for you at the best possible price. You want to feel confident that you did not leave money on the table and that you made a savvy, smart decision that will enhance your life.  To provide the highest level of service, we take a team approach to real estate. Buying or selling a home in San Francisco is a complex, sophisticated and often deeply personal endeavor. You deserve the full service and attention that only a team of experts can consistently provide. Our small and dedicated team approach prioritizes quality over quantity so we are always available to offer an unparalleled sales experience as well as hold your hand through any step of your real estate journey. Working with our team, you will have personal attention, multiplied by the experience, full-time professionalism, track record, and consistency of a highly productive team. Our top priority is superior results for you, combined with a pleasant experience. 
            </p>
        </div>
        <div class="flex flex-col lg:flex-row gap-2 w-11/12 max-w-screen-lg lg:flex-row m-auto ">
            <div class="bg-white p-5 w-full py-10 text-center drop-shadow-xl hover:drop-shadow-2xl flex flex-col items-center justify-center rounded-2xl">
                <div class="font-bold text-lg">
                    OUR MISSION
                </div>
                <div class="font-light capitalize text-xs lg:text-sm">
                    To make the Buying and Selling of Real Estate as Cost effective as possible while maintaining the highest level of service. 
                    The best interest of our clients will always come first and we will place the clients concerns ahead of our own in each and every transaction, as we are dedicated to development of long- term client relationships. 
                    To provide accurate and up-to-date information, skilled analysis and sound Real Estate advice.
                </div>
            </div>
            <div class="bg-white p-5 w-full py-10 text-center drop-shadow-xl hover:drop-shadow-2xl flex flex-col items-center space-between rounded-2xl">
                <div class="font-bold text-lg">
                    OUR VISION
                </div>
                <div class="font-light capitalize text-xs lg:text-sm">
                    To provide a wide range of land and property to suit different needs and purposes of our esteemed customer; from prime properties, commercial and residential plots, agricultural farms, upcountry land
                </div>
            </div>
        </div>
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
        <div class="font-bold text-xl">We Are Driven By Values And Principles.</div>
        <div class="flex justify-center flex-wrap gap-5 lg:justify-start">
            <div v-for="service in values" :key="service.id" >
                <ServiceCard 
                    :Name="service.name"
                    :Description="service.description"
                    :Poster="service.poster"
                />
            </div>
        </div>

      </div>
    </div>
  </template>
  
<script>
import { mapState } from 'vuex'
import ServiceCard from '../../components/ServiceCard.vue';
  export default {
  data() {
      return {
      };
  },
  computed: {
      ...mapState(["values"]),
  },
  components: { ServiceCard }
}
  </script>
  <style>
  .abg{
    background-repeat: no-repeat;
    background-size: cover !important;
    background-position:center center !important;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),url(../../assets/nairobi.jpg);
  }
  .login-box {
  /* padding: 40px; */
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
  z-index: 9999 !important;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  /* margin-bottom: 30px; */
  border: none;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 10px;
  padding: 10px 0;
  font-size: 14px;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 10px;
  font-size: 12px;
  font-weight: black;
}

  </style>