<template lang="">
  <div>
    <NavbarComponent />

    <main class="bg-gray-50 text-gray-800">
      <BannerSection />
      <CarDisplaySection />
    </main>

    <FooterComponent />
  </div>
</template>

<script lang="ts">
import NavbarComponent from '../components/layouts/NavbarComponent.vue';
import FooterComponent from '../components/layouts/FooterComponent.vue';
import BannerSection from '../components/rentcarpage/BannerSection.vue';
import CarDisplaySection from '../components/rentcarpage/CarDisplaySection.vue';

export default {
  components: { NavbarComponent, FooterComponent, BannerSection, CarDisplaySection },
  data() {
    return {

    }
  }
}
</script>

<style lang="">
/* Scoped styles can be added here if needed, but Tailwind handles most of it. */
</style>
