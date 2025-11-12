<template lang="">
  <div>
    <NavbarComponent />
    <div class="min-h-screen bg-gray-50">
    <main class="container mx-auto px-4 py-12 md:py-16">
      <h1 class="text-4xl font-extrabold text-gray-900 mb-8 border-b-2 pb-2">
        👤 User Profile & Bookings
      </h1>

      <div v-if="loading" class="text-center py-20">
        <div class="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p class="text-xl text-gray-600">Loading profile data...</p>
      </div>

      <div v-if="error" class="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg text-red-700">
        <p class="font-bold">Error fetching profile:</p>
        <p>{{ error.message }}</p>
      </div>

      <div v-if="result && result.userProfile">
        <div class="bg-white shadow-xl rounded-xl p-8 mb-10">
          <h2 class="text-2xl font-bold text-blue-600 mb-4">Account Details</h2>
          <p class="text-lg text-gray-700"><strong>Name:</strong> {{ result.userProfile.name }}</p>
          <p class="text-lg text-gray-700"><strong>Email:</strong> {{ result.userProfile.email }}</p>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mb-6">Recent Bookings ({{ result.userProfile.bookings.length }})</h2>

        <div v-if="result.userProfile.bookings.length === 0" class="p-8 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg">
          <p class="text-xl text-yellow-800">You haven't booked any cars yet.</p>
          <router-link to="/cars" class="text-blue-600 hover:underline mt-2 inline-block">
            Browse available cars
          </router-link>
        </div>

        <div v-else class="space-y-6">
          <div v-for="booking in result.userProfile.bookings" :key="booking._id"
            class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 transition duration-300 hover:shadow-xl">

            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <div class="md:col-span-2 flex items-center">
                <img :src="booking.car.image || 'https://placehold.co/100x75/cccccc/ffffff?text=Car'" :alt="booking.car.name"
                  class="w-24 h-16 object-cover rounded-lg mr-4 border border-gray-200">
                <div>
                  <h3 class="text-xl font-bold text-gray-900">{{ booking.car.name }}</h3>
                  <p class="text-sm text-gray-500 capitalize">{{ booking.car.type }}</p>
                </div>
              </div>

              <div>
                <p class="text-sm font-semibold text-gray-500">Dates</p>
                <p class="text-base text-gray-800">
                  {{ new Date(booking.pickupDate).toLocaleDateString() }} -
                  {{ new Date(booking.returnDate).toLocaleDateString() }}
                </p>
              </div>

              <div>
                <p class="text-sm font-semibold text-gray-500">Location</p>
                <p class="text-base text-gray-800">{{ booking.pickupLocation }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import NavbarComponent from '@/components/layouts/NavbarComponent.vue';
import FooterComponent from '@/components/layouts/FooterComponent.vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { useAuthStore } from '../stores/auth';
import { computed } from 'vue'; // 👈 Import computed

const authStore = useAuthStore();

// 1. Make the User ID a reactive computed property
const userId = computed(() => authStore.user?.id);

// 2. Define the GraphQL query (no change needed here)
const GET_USER_PROFILE_QUERY = gql`
  query GetUserProfile($id: ID!) {
    userProfile(id: $id) {
      id
      fullname # Changed from 'name' to 'fullname' based on your resolver's token logic
      email
      bookings {
        _id
        pickupDate
        returnDate
        pickupLocation
        car {
          _id
          name
          type
          image
          price
        }
      }
    }
  }
`;

// 3. Execute the query with reactive variables and the 'enabled' option
const { result, loading, error } = useQuery(
  GET_USER_PROFILE_QUERY,
  () => ({ // 👈 Use a function for reactive variables
    id: userId.value
  }),
  {
    // 👈 Only execute the query when userId.value is truthy (not null, not undefined, not empty string)
    enabled: computed(() => !!userId.value),
    // Optional: Add fetch policy to re-run on subsequent component loads
    fetchPolicy: 'cache-and-network',
  }
);
</script>

<style lang="">

</style>
