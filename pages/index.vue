<template>
  <div>
    <Hero />
    <FeaturedProperties />
    <Services />
    <Numbers />
    <Testimonials />
  </div>
</template>

<script>
import Hero from '../components/hero.vue';
import FeaturedProperties from '../partials/FeaturedProperties.vue'
import Numbers from '../components/numbers.vue';
import Testimonials from '../components/Testimonials.vue';
export default {
    name: "IndexPage",
    components: { Hero, FeaturedProperties, Numbers, Testimonials },  
    created() {
    this.refreshList();
  },
methods: {
  refreshList() {
    this.$store.dispatch('getProperties')
  }
}
}
</script>
