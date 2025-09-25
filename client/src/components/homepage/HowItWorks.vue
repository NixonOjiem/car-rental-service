<template>
  <section id="how-it-works" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
      <!-- Left Section: Image -->
      <div class="relative w-full lg:w-1/2 flex justify-center items-center p-6 rounded-3xl shadow-xl"
           style="background-image: linear-gradient(45deg, #0077b6, #00b4d8, #90e0ef);">
        <img
          src="/images/mercedes_PNG80163.png"
          alt="Mercedes Benz"
          class="w-full h-auto object-contain transform scale-105 transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>

      <!-- Right Section: How It Works Steps -->
      <div class="w-full lg:w-1/2 text-center lg:text-left">
        <h2 class="text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
          How Our <span class="text-main-blue-dark">Car Rental</span> Works
        </h2>
        <p class="text-lg text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0">
          Renting a car with us is simple, fast, and hassle-free. Follow these easy steps to get on the road!
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Step 1 -->
          <div class="flex flex-col items-center md:items-start text-center md:text-left p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="flex items-center justify-center w-12 h-12 bg-main-blue-medium text-main-blue-dark rounded-full mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684L10.5 9l2.592-5.281A1 1 0 0114.72 3H18a2 2 0 012 2v10a2 2 0 01-2 2h-3.28a1 1 0 01-.948-.684L13.5 15l-2.592 5.281A1 1 0 019.28 21H6a2 2 0 01-2-2V5z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">1. Choose Your Car</h3>
            <p class="text-gray-600">Browse our extensive fleet of vehicles and select the perfect car for your needs.</p>
          </div>

          <!-- Step 2 -->
          <div class="flex flex-col items-center md:items-start text-center md:text-left p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">2. Book & Pay Securely</h3>
            <p class="text-gray-600">Complete your booking online with our secure payment system. It's quick and easy!</p>
          </div>

          <!-- Step 3 -->
          <div class="flex flex-col items-center md:items-start text-center md:text-left p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="flex items-center justify-center w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">3. Pick Up & Drive</h3>
            <p class="text-gray-600">Collect your keys at the designated location and start your journey.</p>
          </div>

          <!-- Step 4 -->
          <div class="flex flex-col items-center md:items-start text-center md:text-left p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-full mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">4. Return with Ease</h3>
            <p class="text-gray-600">Enjoy your trip and return the car conveniently at your chosen drop-off point.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'HowItWorks',
};
</script>

<style scoped>
/* Define custom CSS variables for the blue shades */
:root {
  --main-blue-dark: #0077b6;
  --main-blue-medium: #00b4d8;
  --main-blue-light: #90e0ef;
}

/* Apply custom colors using the variables */
.text-main-blue-dark {
  color: var(--main-blue-dark);
}

.bg-main-blue-medium {
  background-color: var(--main-blue-medium);
}

/* The 'transform scale-105' and 'hover:scale-110' classes give the image a subtle "pop out" effect. */
</style>
