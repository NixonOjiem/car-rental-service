<template>
  <div class="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-800 mb-8 text-center">Our Car Collection</h1>

      <div v-if="loading" class="text-center text-gray-500 py-10">
        <p class="text-xl">Loading inventory, please wait...</p>
      </div>

      <div v-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-md" role="alert">
        <p class="font-bold">An error occurred</p>
        <p>We couldn't fetch the data. Please try again later. Details: {{ error.message }}</p>
      </div>

      <div v-if="result && result.categories">
        <div v-for="category in result.categories" :key="category._id" class="mb-12">
          <h2 class="text-3xl font-bold text-gray-700 mb-6 border-b-2 border-indigo-200 pb-2">
            {{ category.name }}
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div v-for="car in category.cars" :key="car.name"
              class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <img :src="car.image || 'https://placehold.co/600x400/cccccc/ffffff?text=No+Image'"
                :alt="'Image of ' + car.name" class="w-full h-56 object-cover">
              <div class="p-6">
                <h2 class="text-2xl font-semibold text-gray-900 mb-2 truncate">{{ car.name }}</h2>
                <p class="text-gray-600 mb-4 capitalize">Type: {{ car.type }}</p>
                <div class="text-2xl font-bold text-indigo-600">
                  ${{ car.price ? car.price.toLocaleString() : 'N/A' }}
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
