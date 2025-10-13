<template>
  <div>
    <NavbarComponent />

    <main class="bg-white">
      <section class="bg-[#ADD8E6] text-[#0E100F] text-center">
        <div class="container mx-auto px-6 py-20 md:py-28">
          <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Smarter Fleet & Travel Solutions
          </h1>
          <p class="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-800">
            Expert guidance for your personal and business vehicle needs. Optimize costs, improve efficiency, and travel
            with confidence.
          </p>
          <a href="#contact"
            class="inline-block bg-[#00B4D8] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#00A2C2] transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
            Get a Free Consultation
          </a>
        </div>
      </section>

      <section class="bg-gray-50 py-16 md:py-20">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-[#0E100F]">What We Offer</h2>
            <p class="text-lg text-gray-600 mt-2">Tailored advice to meet your unique challenges.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="service in services" :key="service.title"
              class="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 text-center">
              <div class="inline-block text-[#00B4D8] mb-4" v-html="service.icon"></div>
              <h3 class="text-xl font-bold text-[#0E100F] mb-2">{{ service.title }}</h3>
              <p class="text-gray-600">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 md:py-20">
        <div class="container mx-auto px-6">
          <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div class="w-full lg:w-1/2">
              <div class="bg-[#ADD8E6] rounded-lg h-80 flex items-center justify-center text-gray-500 italic">

              </div>
            </div>
            <div class="w-full lg:w-1/2">
              <h2 class="text-3xl md:text-4xl font-bold text-[#0E100F] mb-4">Why Partner With Us?</h2>
              <p class="text-lg text-gray-600 mb-6">We combine industry expertise with a commitment to your success.</p>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <span class="text-[#00B4D8] font-bold text-xl mr-3">✓</span>
                  <div>
                    <strong class="text-[#0E100F]">Data-Driven Insights:</strong> We analyze usage to provide concrete,
                    cost-saving recommendations.
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-[#00B4D8] font-bold text-xl mr-3">✓</span>
                  <div>
                    <strong class="text-[#0E100F]">Vendor Neutral:</strong> Our advice is unbiased. We find the best
                    vehicles and solutions for you, regardless of brand.
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-[#00B4D8] font-bold text-xl mr-3">✓</span>
                  <div>
                    <strong class="text-[#0E100F]">Scalable Solutions:</strong> From a single trip to a full corporate
                    fleet, our strategies grow with you.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-[#ADD8E6] py-16 md:py-20">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-[#0E100F]">Our Simple 4-Step Process</h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div class="flex flex-col items-center">
              <div
                class="w-16 h-16 bg-[#00B4D8] text-white flex items-center justify-center rounded-full text-2xl font-bold mb-4">
                1</div>
              <h3 class="text-xl font-bold text-[#0E100F] mb-2">Discovery Call</h3>
              <p class="text-gray-700">We listen to your needs, goals, and current challenges.</p>
            </div>
            <div class="flex flex-col items-center">
              <div
                class="w-16 h-16 bg-[#00B4D8] text-white flex items-center justify-center rounded-full text-2xl font-bold mb-4">
                2</div>
              <h3 class="text-xl font-bold text-[#0E100F] mb-2">Analysis & Strategy</h3>
              <p class="text-gray-700">We analyze your data and develop a custom-tailored plan.</p>
            </div>
            <div class="flex flex-col items-center">
              <div
                class="w-16 h-16 bg-[#00B4D8] text-white flex items-center justify-center rounded-full text-2xl font-bold mb-4">
                3</div>
              <h3 class="text-xl font-bold text-[#0E100F] mb-2">Proposal</h3>
              <p class="text-gray-700">We present a clear, actionable proposal with transparent pricing.</p>
            </div>
            <div class="flex flex-col items-center">
              <div
                class="w-16 h-16 bg-[#00B4D8] text-white flex items-center justify-center rounded-full text-2xl font-bold mb-4">
                4</div>
              <h3 class="text-xl font-bold text-[#0E100F] mb-2">Execution & Support</h3>
              <p class="text-gray-700">We help you implement the plan and provide ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="bg-[#ADD8E6] text-white">
        <div class="container mx-auto px-6 py-20 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-[#000]">Ready to Optimize Your Rentals?</h2>
          <p class="text-lg text-[#ADD8E6] max-w-2xl mx-auto mb-8">
            Let's talk about how we can help you save money and streamline your transportation needs. Your initial
            consultation is always free.
          </p>
          <a href="mailto:consulting@yourcarrental.com"
            class="inline-block bg-white text-[#00B4D8] font-bold py-3 px-8 rounded-full text-lg hover:bg-[#ADD8E6] hover:text-[#0E100F] transition-colors duration-300">
            Contact Us Today
          </a>
        </div>
      </section>
    </main>

    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavbarComponent from '../components/layouts/NavbarComponent.vue';
import FooterComponent from '../components/layouts/FooterComponent.vue';

// Service data - this part remains unchanged
const services = ref([
  {
    title: 'Corporate Fleet Management',
    description: 'Optimize your company\'s vehicle fleet for cost-efficiency, reliability, and reduced administrative overhead.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 16h-4a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z"></path><path d="M14 4h-4a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z"></path><path d="M6 10h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2"></path><path d="M18 10h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2"></path><path d="M6 14v-4"></path><path d="M18 14v-4"></path></svg>`
  },
  {
    title: 'Personal Trip Planning',
    description: 'From family vacations to cross-country road trips, we help you select the perfect vehicle and route for a seamless journey.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 17.5l-2.5 2.5l-2.5-2.5l2.5-2.5l2.5 2.5z"></path><path d="M12 21l-7 -7a4 4 0 0 1 0 -5.5a4 4 0 0 1 5.5 -0.5l1.5 1.5l1.5-1.5a4 4 0 0 1 5.5 0.5a4 4 0 0 1 0 5.5l-7 7"></path></svg>`
  },
  {
    title: 'Event & Group Logistics',
    description: 'Coordinating transportation for weddings, conferences, or tours? We provide logistical support and group vehicle planning.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0 -4 -4h-6a4 4 0 0 0 -4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0 -3 -3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
  }
]);
</script>
