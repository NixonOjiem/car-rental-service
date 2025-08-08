<template>
  <section class="py-32 bg-slate-900 text-white min-h-screen">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600">
          Our Premier Fleet
        </h2>
        <p class="mt-4 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
          Explore our hand-picked collection of cars, from luxury sedans to powerful sports cars, each ready for your next adventure.
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <div
          v-for="car in featuredCars"
          :key="car.id"
          class="group relative bg-slate-800/50 rounded-2xl overflow-visible border border-slate-700/50 hover:border-sky-500/50 transition-all duration-300 flex flex-col"
        >
          <!-- Image Container -->
          <div class="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-visible">
            <img
              :src="car.imageUrl"
              :alt="car.name"
              class="absolute inset-0 mx-auto object-contain w-full h-full transition-transform duration-500 ease-out group-hover:scale-125 z-10"
            />
          </div>

          <!-- Content -->
          <div class="p-4 flex flex-col flex-grow z-0">
            <h3 class="text-xl font-bold text-white mb-1 truncate">{{ car.name }}</h3>
            <span class="font-bold text-lg text-sky-400 mb-4">
              ${{ car.price }}<span class="text-sm font-normal text-slate-400">/day</span>
            </span>
            <p class="text-sm text-slate-300 mb-4">{{ car.description }}</p>

            <div class="flex items-center space-x-4 text-slate-400 mb-6">
              <span class="flex items-center text-sm">
                <svg class="h-4 w-4 mr-1.5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M11.49..."/>
                </svg>
                {{ car.specs.transmission }}
              </span>

              <span class="flex items-center text-sm">
                <svg class="h-4 w-4 mr-1.5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11..."/>
                </svg>
                {{ car.specs.seats }}
              </span>
            </div>

            <button class="mt-auto w-full px-4 py-2 text-sm font-semibold text-white bg-sky-600 rounded-lg hover:bg-sky-500 transition-colors duration-300">
              Book Now
            </button>
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
          imageUrl: '/images/mazda_PNG9.png',
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
        }
      ]
    };
  }
};
</script>
