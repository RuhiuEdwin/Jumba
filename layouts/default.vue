<template>
  <div class="overflow-srcoll relative">
    <Navbar class="fixed left-0 top-0 nave"/>
    <Nuxt class="bg-bg min-h-screen lg:pt-14 pt-10"/>
    <Button  class="fixed right-10 bottom-10 z-20"/>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Button from '../components/Button.vue';
export default {
  components: {
    Navbar,
    Footer,
    Button
},
}
</script>
<style>
 .nave{
  z-index: 999999;
 }
</style>