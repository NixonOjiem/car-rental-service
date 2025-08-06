<template>
  <div class="relative w-full h-screen">
    <Navbar />
    <HeroSection />
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/HeroSection.vue'

export default {
  name: 'IndexView',
  components: {
    Navbar,
    HeroSection,
  },
}
</script>
<style></style>
