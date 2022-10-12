<template>
  <div>
    <Hero />
    <FeaturedProperties />
    <Numbers />
  </div>
</template>

<script>
import Hero from '../components/hero.vue';
import FeaturedProperties from '../partials/FeaturedProperties.vue'
import Numbers from '../components/numbers.vue';
export default {
    name: "IndexPage",
    components: { Hero, FeaturedProperties, Numbers },  
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
