<template>
  <div class="min-h-screen bg-gray-50 ">
    <NavbarComponent />
    <main class="container mx-auto px-4 py-8 md:py-12">
      <!-- Loading State -->
      <div v-if="loading" class="flex flex-col items-center justify-center py-20">
        <div class="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p class="text-xl text-gray-600">Loading car details...</p>
      </div>

      <!-- Error State -->
      <div v-if="error" class="max-w-2xl mx-auto bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow-md"
        role="alert">
        <div class="flex items-start">
          <svg class="w-6 h-6 text-red-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <p class="font-bold text-red-800 text-lg">Could not fetch car details</p>
            <p class="text-red-700 mt-1">{{ error.message }}</p>
          </div>
        </div>
      </div>

      <!-- Car Details -->
      <div v-if="result && result.car" class="max-w-6xl mx-auto mt-[100px] ">
        <!-- Breadcrumb -->
        <nav class="mb-6 text-sm text-gray-500">
          <ol class="flex space-x-2">
            <li><a href="/" class="hover:text-blue-600 transition-colors">Home</a></li>
            <li class="before:content-['/'] before:mr-2"><a href="/cars"
                class="hover:text-blue-600 transition-colors">Cars</a></li>
            <li class="before:content-['/'] before:mr-2"><span class="text-gray-900 font-medium">{{ result.car.name
            }}</span></li>
          </ol>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <!-- Car Image Section -->
          <div class="space-y-4">
            <div class="overflow-hidden rounded-xl shadow-lg">
              <img :src="result.car.image || 'https://placehold.co/800x600/cccccc/ffffff?text=No+Image'"
                :alt="result.car.name"
                class="w-full h-auto object-cover transition-transform duration-500 hover:scale-105">
            </div>

            <!-- Additional Images (Placeholder) -->
            <div class="grid grid-cols-3 gap-3">
              <div class="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden cursor-pointer">
                <img :src="result.car.image || 'https://placehold.co/300x200/cccccc/ffffff?text=Image+2'"
                  :alt="result.car.name + ' interior'" class="w-full h-full object-cover">
              </div>
              <div class="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden cursor-pointer">
                <img :src="result.car.image || 'https://placehold.co/300x200/cccccc/ffffff?text=Image+3'"
                  :alt="result.car.name + ' interior'" class="w-full h-full object-cover">
              </div>
              <div class="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden cursor-pointer">
                <img :src="result.car.image || 'https://placehold.co/300x200/cccccc/ffffff?text=Image+4'"
                  :alt="result.car.name + ' interior'" class="w-full h-full object-cover">
              </div>
            </div>
          </div>

          <!-- Car Details Section -->
          <div class="space-y-6">
            <div>
              <div class="flex items-center justify-between mb-2">
                <h1 class="text-3xl md:text-4xl font-bold text-gray-900">{{ result.car.name }}</h1>
                <span
                  class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 capitalize">
                  {{ result.car.type }}
                </span>
              </div>
              <div class="flex items-center text-gray-500 mb-4">
                <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"></path>
                </svg>
                <span>Available for pickup in New York</span>
              </div>
            </div>

            <!-- Price Section -->
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
              <p class="text-3xl font-extrabold text-gray-900">
                ${{ result.car.price ? result.car.price.toLocaleString() : 'N/A' }}
                <span class="text-lg font-normal text-gray-600">/day</span>
              </p>
              <p class="text-gray-600 mt-1">All taxes and fees included</p>
            </div>

            <!-- Key Features -->
            <div class="grid grid-cols-2 gap-4 py-4">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                  </path>
                </svg>
                <div>
                  <p class="font-medium text-gray-900">Full Insurance</p>
                  <p class="text-sm text-gray-500">Zero liability</p>
                </div>
              </div>
              <div class="flex items-center">
                <svg class="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                  </path>
                </svg>
                <div>
                  <p class="font-medium text-gray-900">Secure Booking</p>
                  <p class="text-sm text-gray-500">Data protection</p>
                </div>
              </div>
              <div class="flex items-center">
                <svg class="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <div>
                  <p class="font-medium text-gray-900">Free Cancellation</p>
                  <p class="text-sm text-gray-500">Up to 24 hours</p>
                </div>
              </div>
              <div class="flex items-center">
                <svg class="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
                <div>
                  <p class="font-medium text-gray-900">Best Price</p>
                  <p class="text-sm text-gray-500">Guaranteed</p>
                </div>
              </div>
            </div>

            <!-- Booking Section -->
            <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Book Your Ride</h2>

              <div class="space-y-4 mb-6">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Pick-up Date</label>
                    <div class="relative">
                      <input type="date"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <svg class="w-5 h-5 text-gray-400 absolute right-3 top-3" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Return Date</label>
                    <div class="relative">
                      <input type="date"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <svg class="w-5 h-5 text-gray-400 absolute right-3 top-3" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                        </path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Pick-up Location</label>
                  <select
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>New York City Center</option>
                    <option>JFK Airport</option>
                    <option>LaGuardia Airport</option>
                    <option>Manhattan Downtown</option>
                  </select>
                </div>
              </div>

              <button
                class="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Confirm Booking
              </button>

              <p class="text-center text-gray-500 text-sm mt-4">No credit card required to reserve</p>
            </div>
          </div>
        </div>

        <!-- Car Specifications -->
        <div class="mt-12 bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Car Specifications</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center p-4 bg-gray-50 rounded-lg">
              <svg class="w-8 h-8 text-blue-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z">
                </path>
              </svg>
              <p class="text-sm text-gray-500">Engine</p>
              <p class="font-semibold text-gray-900">2.0L Turbo</p>
            </div>
            <div class="text-center p-4 bg-gray-50 rounded-lg">
              <svg class="w-8 h-8 text-blue-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
              </svg>
              <p class="text-sm text-gray-500">Transmission</p>
              <p class="font-semibold text-gray-900">Automatic</p>
            </div>
            <div class="text-center p-4 bg-gray-50 rounded-lg">
              <svg class="w-8 h-8 text-blue-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <p class="text-sm text-gray-500">Fuel Type</p>
              <p class="font-semibold text-gray-900">Gasoline</p>
            </div>
            <div class="text-center p-4 bg-gray-50 rounded-lg">
              <svg class="w-8 h-8 text-blue-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z">
                </path>
              </svg>
              <p class="text-sm text-gray-500">Seats</p>
              <p class="font-semibold text-gray-900">5 People</p>
            </div>
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

<style scoped>
/* Custom styles for enhanced UI */
.aspect-w-16 {
  position: relative;
}

.aspect-w-16::before {
  content: "";
  display: block;
  padding-bottom: 56.25%;
  /* 16:9 aspect ratio */
}

.aspect-h-9>* {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
