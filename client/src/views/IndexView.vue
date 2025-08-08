<template>
  <div class="relative w-full h-screen">
    <Navbar />
    <HeroSection />
    <HowItWorks />
    <FeaturedCars />
    <BenefitsSection
      :title="'Our Value Proposition'"
      :description="'We help you simplify complex tasks, save time, and boost your productivity. Our platform is designed to streamline your workflow so you can focus on what matters most.'"
      :benefits="benefitsData"
    />
    <TestimonialsSection />
    <FaqSection />

    <div class="h-[100vh] bg-red-200 w-[100vw] "></div>
  </div>
</template>
<script lang="ts">
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/homepage/HeroSection.vue'
import HowItWorks from '../components/HowItWorks.vue'
import FeaturedCars from '../components/homepage/FeaturedCars.vue'
import BenefitsSection from '../components/homepage/BenefitsSection.vue'
import FaqSection from '../components/homepage/FaqSection.vue'
import TestimonialsSection from '../components/homepage/TestimonialsSection.vue'
export default {
  name: 'IndexView',
  components: {
    Navbar,
    HeroSection,
    HowItWorks,
    FeaturedCars,
    TestimonialsSection,
    BenefitsSection,
    FaqSection,
  },
   data() {
    return {
      benefitsData: [
        {
          title: 'Time Savings',
          description: 'Automate repetitive tasks and reduce your workload.'
        },
        {
          title: 'Increased Efficiency',
          description: 'Access powerful tools and data to make smarter decisions.'
        },
        {
          title: 'Seamless Integration',
          description: 'Connect with your existing tools and services effortlessly.'
        }
      ]
      };
    }
}
</script>
<style></style>
