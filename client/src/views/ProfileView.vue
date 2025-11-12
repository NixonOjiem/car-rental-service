<template>
  <div>
    <NavbarComponent />
    <div class="min-h-screen bg-gray-50 ">
      <main class="container mx-auto px-4 py-12 md:py-16">

        <div v-if="loading" class="text-center py-20 bg-white shadow-lg rounded-xl">
          <div class="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4">
          </div>
          <p class="text-xl text-gray-600">Loading profile data...</p>
        </div>

        <div v-else-if="error"
          class="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl text-red-700 max-w-2xl mx-auto my-10 shadow-md">
          <p class="font-bold text-lg">⚠️ Error fetching profile</p>
          <p class="mt-1">{{ error.message }}</p>
        </div>

        <div v-else-if="result && result.userProfile">
          <header class="mb-10 text-center">
            <h1 class="text-5xl font-extrabold text-gray-900 mb-2">
              👋 Welcome, {{ result.userProfile.fullname.split(' ')[0] || 'User' }}
            </h1>
            <p class="text-xl text-gray-500">Manage your account and view past bookings.</p>
          </header>

          <div class="bg-white shadow-2xl rounded-xl p-8 max-w-4xl mx-auto">

            <div class="border-b border-gray-200 mb-6">
              <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                <button
                  :class="['py-2 px-1 text-lg font-medium border-b-2',
                    true ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700']">
                  Account
                </button>
                <button
                  :class="['py-2 px-1 text-lg font-medium border-b-2',
                    false ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700']">
                  Bookings ({{ result.userProfile.bookings.length }})
                </button>
              </nav>
            </div>

            <div class="space-y-6">
              <div class="flex items-center space-x-6 pb-4 border-b border-gray-100">
                <div
                  class="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl font-semibold">
                  {{ result.userProfile.fullname[0] || 'U' }}
                </div>
                <div>
                  <h2 class="text-3xl font-bold text-gray-900">{{ result.userProfile.fullname }}</h2>
                  <p class="text-lg text-gray-600">{{ result.userProfile.email }}</p>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p class="text-sm font-semibold text-gray-500 uppercase tracking-wider">Full Name</p>
                  <p class="text-xl text-gray-800">{{ result.userProfile.fullname }}</p>
                </div>
                <div>
                  <p class="text-sm font-semibold text-gray-500 uppercase tracking-wider">Email Address</p>
                  <p class="text-xl text-gray-800">{{ result.userProfile.email }}</p>
                </div>
              </div>

              <div class="pt-4">
                <button
                  class="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-150">
                  Edit Profile
                </button>
              </div>
            </div>

            <div class="mt-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Your Car Bookings</h2>

              <div v-if="result.userProfile.bookings.length === 0"
                class="p-8 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg shadow-inner text-center">
                <p class="text-xl text-yellow-800 mb-3">Looks like you're ready for an adventure!</p>
                <p class="text-yellow-700">You haven't booked any cars yet. Start exploring our fleet.</p>
                <router-link to="/cars"
                  class="mt-4 inline-block px-4 py-2 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition duration-150">
                  🚗 Browse Available Cars
                </router-link>
              </div>

              <div v-else class="space-y-5">
                <div v-for="booking in result.userProfile.bookings" :key="booking._id"
                  class="bg-white rounded-xl shadow-lg p-6 border border-gray-200 transition duration-300 hover:shadow-xl grid grid-cols-1 md:grid-cols-6 gap-4 items-center">

                  <div class="md:col-span-2 flex items-center space-x-4">
                    <img :src="booking.car.image || 'https://placehold.co/100x75/eeeeee/333333?text=Car'"
                      :alt="booking.car.name"
                      class="w-20 h-16 object-cover rounded-lg border border-gray-200 flex-shrink-0">
                    <div>
                      <h3 class="text-xl font-bold text-blue-600">{{ booking.car.name }}</h3>
                      <p class="text-sm text-gray-500 capitalize">{{ booking.car.type }}</p>
                    </div>
                  </div>

                  <div class="md:col-span-1">
                    <p class="text-xs font-semibold text-gray-500 uppercase">Dates</p>
                    <p class="text-sm text-gray-800 font-medium">
                      {{ new Date(booking.pickupDate).toLocaleDateString() }}
                    </p>
                    <p class="text-sm text-gray-800 font-medium">
                      to {{ new Date(booking.returnDate).toLocaleDateString() }}
                    </p>
                  </div>

                  <div class="md:col-span-1">
                    <p class="text-xs font-semibold text-gray-500 uppercase">Pickup</p>
                    <p class="text-base text-gray-800 font-medium">{{ booking.pickupLocation }}</p>
                  </div>

                  <div class="md:col-span-1">
                    <p class="text-xs font-semibold text-gray-500 uppercase mb-1">Status</p>
                    <span
                      class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Confirmed
                    </span>
                  </div>

                  <div class="md:col-span-1 text-right">
                    <button class="text-blue-600 font-semibold hover:text-blue-800 transition duration-150 text-sm">
                      View Details &rarr;
                    </button>
                  </div>
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
