<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

    <div v-for="category in carCategories" :key="category.title" class="mb-16">
      <h2 class="text-3xl font-bold mb-2 text-gray-900">{{ category.title }}</h2>
      <p class="text-md text-gray-500 mb-8">{{ category.description }}</p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

        <div v-for="car in category.cars" :key="car.id"
          class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group">
          <div class="relative">
            <img :src="car.image" :alt="car.name" class="w-full h-48 object-cover">
            <div
              class="absolute top-0 right-0 bg-[#00B4D8] text-white text-sm font-semibold px-3 py-1 m-3 rounded-full">
              {{ car.type }}
            </div>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ car.name }}</h3>

            <div class="flex items-center space-x-4 text-gray-600 border-t border-b border-gray-100 py-3 my-4">
              <div class="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#00B4D8]" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd" />
                </svg>
                <span>{{ car.specs.seats }}</span>
              </div>
              <div class="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#00B4D8]" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                </svg>
                <span>{{ car.specs.transmission }}</span>
              </div>
              <div class="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#00B4D8]" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h4a1 1 0 001-1v-2a1 1 0 00-1-1H4V4h2a1 1 0 001-1V3H3zm8 0a1 1 0 00-1 1v2a1 1 0 001 1h2v10h-2a1 1 0 00-1 1v2a1 1 0 001 1h4a1 1 0 001-1v-2a1 1 0 00-1-1h-2V6h2a1 1 0 001-1V3a1 1 0 00-1-1h-4z"
                    clip-rule="evenodd" />
                </svg>
                <span>{{ car.specs.fuel }}</span>
              </div>
            </div>

            <div class="flex justify-between items-center mt-4">
              <p class="text-xl font-extrabold text-gray-900">
                ${{ car.price }}<span class="text-sm font-normal text-gray-500">/day</span>
              </p>
              <button
                class="bg-[#00B4D8] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#0096b2] transition-colors duration-300">
                Rent Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
import { carCategories } from '../data/carCategories';

</script>
<style lang="">

</style>
