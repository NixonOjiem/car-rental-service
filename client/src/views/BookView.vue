<template>
  <div>
    <NavbarComponent />

    <main class="container mx-auto px-4 py-12">
      <div v-if="loading" class="text-center py-20">
        <p class="text-xl text-gray-500">Loading car details...</p>
      </div>

      <div v-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-md" role="alert">
        <p class="font-bold">Could not fetch car details</p>
        <p>{{ error.message }}</p>
      </div>

      <div v-if="result && result.car" class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img :src="result.car.image || 'https://placehold.co/800x600/cccccc/ffffff?text=No+Image'"
            :alt="result.car.name" class="w-full h-auto object-cover rounded-lg shadow-lg">
        </div>

        <div>
          <h1 class="text-4xl font-bold text-gray-900 mb-2">{{ result.car.name }}</h1>
          <p class="text-lg text-gray-500 mb-6 capitalize">{{ result.car.type }}</p>

          <p class="text-3xl font-extrabold text-gray-900 mb-8">
            ${{ result.car.price ? result.car.price.toLocaleString() : 'N/A' }}
            <span class="text-lg font-normal text-gray-500">/day</span>
          </p>

          <div class="mt-8">
            <h2 class="text-2xl font-semibold mb-4">Book Your Ride</h2>
            <button
              class="w-full bg-[#00B4D8] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#0096B2] transition-colors duration-300">
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </main>

    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import NavbarComponent from '../components/layouts/NavbarComponent.vue';
import FooterComponent from '../components/layouts/FooterComponent.vue';

// 1. Get the current route object to access URL parameters
const route = useRoute();

// 2. Get the car's ID from the URL. It can be a string or an array, so we ensure it's a string.
const carId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;

// 3. Define a new GraphQL query to get a SINGLE car by its ID
//    IMPORTANT: Your backend GraphQL schema must support this query!
const GET_CAR_BY_ID_QUERY = gql`
  query GetCarById($id: ID!) {
    car(id: $id) {
      _id
      name
      type
      image
      price
      # Add any other fields you want to display
    }
  }
`;

// 4. Execute the query, passing the carId as a variable
const { result, loading, error } = useQuery(GET_CAR_BY_ID_QUERY, { id: carId });

</script>

<style lang=""></style>
