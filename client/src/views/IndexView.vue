<template>
  <div class="relative w-full h-screen">
    <Navbar />
    <HeroSection />
    <HowItWorks />
    <FeaturedCars />
    <div class="h-[100vh] bg-red-200 w-[100vw] "></div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/HeroSection.vue'
import HowItWorks from '../components/HowItWorks.vue'
import FeaturedCars from '../components/FeaturedCars.vue'
export default {
  name: 'IndexView',
  components: {
    Navbar,
    HeroSection,
    HowItWorks,
    FeaturedCars
  },
}
</script>
<style></style>
