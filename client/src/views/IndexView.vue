<template>
  <div class="relative w-full h-screen">
    <Navbar />
    <HeroSection />
    <HowItWorks />
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/HeroSection.vue'
import HowItWorks from '../components/HowItWorks.vue'
export default {
  name: 'IndexView',
  components: {
    Navbar,
    HeroSection,
    HowItWorks,
  },
}
</script>
<style></style>
