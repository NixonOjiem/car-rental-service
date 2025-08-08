<template>
  <div class="relative w-full h-screen">
    <Navbar />
    <HeroSection />
    <HowItWorks />
    <FeaturedCars />
    <BenefitsSection :title="'Our Value Proposition'"
      :description="'We help you simplify complex tasks, save time, and boost your productivity. Our platform is designed to streamline your workflow so you can focus on what matters most.'"
      :benefits="benefitsData" />
    <TestimonialsSection />
    <SecondaryCTA :title="'Ready to dive deeper?'"
      :description="'Explore our extensive documentation and see how our tools can transform your workflow.'"
      :buttonText="'Read the Docs'" :link="'/docs'" />
    <FaqSection />
    <FooterComponent />
  </div>
</template>
<script lang="ts">
import Navbar from '../components/layouts/NavbarComponent.vue'
import HeroSection from '../components/homepage/HeroSection.vue'
import HowItWorks from '../components/homepage/HowItWorks.vue'
import FeaturedCars from '../components/homepage/FeaturedCars.vue'
import SecondaryCTA from '../components/homepage/SecondaryCTA.vue'
import FaqSection from '../components/homepage/FaqSection.vue'
import TestimonialsSection from '../components/homepage/TestimonialsSection.vue'
import FooterComponent from '../components/layouts/FooterComponent.vue'
export default {
  name: 'IndexView',
  components: {
    Navbar,
    HeroSection,
    HowItWorks,
    FeaturedCars,
    TestimonialsSection,
    SecondaryCTA,
    FaqSection,
    FooterComponent
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
