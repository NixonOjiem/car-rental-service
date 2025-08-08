<template>
  <section class="bg-gray-50 py-16">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
          {{ title }}
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          {{ description }}
        </p>
      </div>

      <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(benefit, index) in benefits"
          :key="index"
          class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
        >
          <div class="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500 text-white mx-auto">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="mt-6 text-xl font-semibold text-gray-900 text-center">
            {{ benefit.title }}
          </h3>
          <p class="mt-2 text-base text-gray-600 text-center">
            {{ benefit.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'BenefitsSection',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    benefits: {
      type: Array,
      required: true,
    },
  },
};
</script>
