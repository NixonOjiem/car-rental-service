<template>
  <div>
    <main class="bg-gray-50 text-gray-800">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div v-if="loading" class="text-center text-gray-500 py-10">
          <p class="text-xl">Loading inventory, please wait...</p>
        </div>

        <div v-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-md"
          role="alert">
          <p class="font-bold">An error occurred</p>
          <p>We couldn't fetch the data. Please try again later. Details: {{ error.message }}</p>
        </div>

        <div v-if="result && result.categories">
          <div v-for="category in result.categories" :key="category._id" class="mb-16">
            <h2 class="text-3xl font-bold mb-2 text-gray-900">{{ category.name }}</h2>
            <p class="text-md text-gray-500 mb-8">The finest selection in the {{ category.name }} class.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

              <div v-for="car in category.cars" :key="car._id"
                class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group">
                <div class="relative">
                  <img :src="car.image || 'https://placehold.co/600x400/cccccc/ffffff?text=No+Image'" :alt="car.name"
                    class="w-full h-48 object-cover">
                  <div
                    class="absolute top-0 right-0 bg-[#00B4D8] text-white text-sm font-semibold px-3 py-1 m-3 rounded-full capitalize">
                    {{ car.type }}
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold text-gray-900 mb-2 truncate">{{ car.name }}</h3>

                  <div class="flex justify-between items-center mt-4">
                    <p class="text-xl font-extrabold text-gray-900">
                      ${{ car.price ? car.price.toLocaleString() : 'N/A' }}
                      <span class="text-sm font-normal text-gray-500">/day</span>
                    </p>
                    <router-link :to="{ name: 'BookView', params: { id: car._id } }"
                      class="bg-[#00B4D8] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#0096B2] transition-colors duration-300">
                      Rent Now
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="category.cars.length === 0" class="text-center text-gray-500 py-4">
              <p>No cars found in this category.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

// This single, powerful query gets everything you need, perfectly grouped.
const GET_CATEGORIES_WITH_CARS_QUERY = gql`
  query GetCategoriesWithCars {
    categories {
      _id
      name
      cars {
        _id
        name
        type
        image
        price
      }
    }
  }
`;

const { result, loading, error } = useQuery(GET_CATEGORIES_WITH_CARS_QUERY);
</script>

<style scoped>
/* Scoped styles can be added here if needed, but Tailwind handles most of it. */
</style>
