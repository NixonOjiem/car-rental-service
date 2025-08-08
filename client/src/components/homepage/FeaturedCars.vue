<template>
  <section class="py-20 bg-slate-900 text-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600">
          Our Premier Fleet
        </h2>
        <p class="mt-4 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
          Explore our hand-picked collection of cars, from luxury sedans to powerful sports cars, each ready for your next adventure.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <div
          v-for="car in featuredCars"
          :key="car.id"
          class="group relative bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-sky-500/50 transition-all duration-300"
        >
          <div class="h-48 overflow-hidden">

            <img
              :src="car.imageUrl"
              :alt="car.name"
              class="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-2"
            >
          </div>

          <div class="p-4 flex flex-col h-full">
            <h3 class="text-xl font-bold text-white mb-1 truncate">{{ car.name }}</h3>
            <span class="font-bold text-lg text-sky-400 mb-4">${{ car.price }}<span class="text-sm font-normal text-slate-400">/day</span></span>

            <div class="opacity-0 max-h-0 group-hover:max-h-48 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
              <p class="text-sm text-slate-300 mb-4">{{ car.description }}</p>

              <div class="flex items-center space-x-4 text-slate-400 mb-6">
                <span class="flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0L7.88 5.5H5.25a1.75 1.75 0 00-1.74 1.95l.8 4.5c.1.58.6 1.05 1.2 1.05h6.98c.6 0 1.1-.47 1.2-1.05l.8-4.5a1.75 1.75 0 00-1.74-1.95h-2.63l-.63-2.33zM7.5 13.25a.75.75 0 000 1.5h5a.75.75 0 000-1.5h-5z" clip-rule="evenodd" />
                  </svg>
                  {{ car.specs.transmission }}
                </span>
                <span class="flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0010 9c-1.55 0-2.958.68-3.93 1.67a6.97 6.97 0 00-1.5 4.33c0 .34.024.673.07 1h9.86z" />
                  </svg>
                  {{ car.specs.seats }}
                </span>
              </div>
            </div>

            <div class="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
               <button class="w-full text-center px-4 py-2 text-sm font-semibold text-white bg-sky-600 rounded-lg hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 transition-colors duration-300">
                  Book Now
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'ModernFeaturedCars',
  data() {
    return {
      featuredCars: [
        {
          id: 1,
          name: 'Mazda MX-30',
          description: 'A cutting-edge electric sedan, perfect for tech-savvy drivers seeking performance and sustainability.',
          price: 180,
          specs: { transmission: 'Automatic', seats: 5, fuel: 'Electric' },
          imageUrl: '/images/mazda_PNG9.png', // Note: Use your actual image paths
        },
        {
          id: 2,
          name: 'Mazda CX-5 Miata',
          description: 'Unleash the raw power of a legendary muscle car. A symbol of freedom and performance on the open road.',
          price: 120,
          specs: { transmission: 'Manual', seats: 4, fuel: 'Gasoline' },
          imageUrl: '/images/mazda_PNG130.png',
        },
        {
          id: 3,
          name: 'Mercedes-Benz E-Class',
          description: 'Experience unparalleled luxury and comfort in this elegant sedan, perfect for business or special occasions.',
          price: 150,
          specs: { transmission: 'Automatic', seats: 5, fuel: 'Hybrid' },
          imageUrl: '/images/mercedes_PNG80177.png',
        },
        {
          id: 4,
          name: 'Audi e-tron GT',
          description: 'The soul of a sports car with the innovation of an EV. Breathtaking acceleration and iconic design.',
          price: 220,
          specs: { transmission: 'Automatic', seats: 4, fuel: 'Electric' },
          imageUrl: '/images/audi_PNG1760.png',
        },
      ]
    };
  }
};
</script>
