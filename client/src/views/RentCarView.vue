<template lang="">
  <div>
    <NavbarComponent />

    <main class="bg-gray-50 text-gray-800">
      <section class="relative h-[50vh] min-h-[300px] flex items-center justify-center text-center text-white px-4">
        <div class="absolute inset-0 bg-black opacity-50 z-0"></div>
        <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" alt="Sports Car Banner" class="absolute inset-0 w-full h-full object-cover z-[-1]">
        <div class="relative z-10">
          <h1 class="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">Find Your Perfect Ride</h1>
          <p class="text-lg md:text-xl max-w-2xl mx-auto">Explore our premium collection of vehicles for any adventure.</p>
        </div>
      </section>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

        <div v-for="category in carCategories" :key="category.title" class="mb-16">
          <h2 class="text-3xl font-bold mb-2 text-gray-900">{{ category.title }}</h2>
          <p class="text-md text-gray-500 mb-8">{{ category.description }}</p>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            <div v-for="car in category.cars" :key="car.id" class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group">
              <div class="relative">
                <img :src="car.image" :alt="car.name" class="w-full h-48 object-cover">
                <div class="absolute top-0 right-0 bg-[#00B4D8] text-white text-sm font-semibold px-3 py-1 m-3 rounded-full">
                  {{ car.type }}
                </div>
              </div>

              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ car.name }}</h3>

                <div class="flex items-center space-x-4 text-gray-600 border-t border-b border-gray-100 py-3 my-4">
                  <div class="flex items-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#00B4D8]" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" /></svg>
                    <span>{{ car.specs.seats }}</span>
                  </div>
                  <div class="flex items-center space-x-1">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#00B4D8]" viewBox="0 0 20 20" fill="currentColor"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" /></svg>
                    <span>{{ car.specs.transmission }}</span>
                  </div>
                  <div class="flex items-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#00B4D8]" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h4a1 1 0 001-1v-2a1 1 0 00-1-1H4V4h2a1 1 0 001-1V3H3zm8 0a1 1 0 00-1 1v2a1 1 0 001 1h2v10h-2a1 1 0 00-1 1v2a1 1 0 001 1h4a1 1 0 001-1v-2a1 1 0 00-1-1h-2V6h2a1 1 0 001-1V3a1 1 0 00-1-1h-4z" clip-rule="evenodd" /></svg>
                    <span>{{ car.specs.fuel }}</span>
                  </div>
                </div>

                <div class="flex justify-between items-center mt-4">
                  <p class="text-xl font-extrabold text-gray-900">
                    ${{ car.price }}<span class="text-sm font-normal text-gray-500">/day</span>
                  </p>
                  <button class="bg-[#00B4D8] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#0096b2] transition-colors duration-300">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>

    <FooterComponent />
  </div>
</template>

<script lang="ts">
import NavbarComponent from '../components/layouts/NavbarComponent.vue';
import FooterComponent from '../components/layouts/FooterComponent.vue';

export default {
  components: { NavbarComponent, FooterComponent },
  data() {
    return {
      carCategories: [
        {
          title: 'Popular Cars',
          description: 'Our most requested vehicles, perfect for daily drives and city trips.',
          cars: [
            { id: 1, name: 'Toyota Camry', type: 'Sedan', image: 'https://images.unsplash.com/photo-1617469724584-55d512f483b8?q=80&w=2070&auto=format&fit=crop', price: 75, specs: { seats: '5', transmission: 'Auto', fuel: 'Gasoline' } },
            { id: 2, name: 'Honda Civic', type: 'Sedan', image: 'https://images.unsplash.com/photo-1553524325-a13a4a03c038?q=80&w=1949&auto=format&fit=crop', price: 70, specs: { seats: '5', transmission: 'Auto', fuel: 'Gasoline' } },
            { id: 3, name: 'Ford Explorer', type: 'SUV', image: 'https://images.unsplash.com/photo-1617445214418-f173c36c4b2c?q=80&w=2070&auto=format&fit=crop', price: 90, specs: { seats: '7', transmission: 'Auto', fuel: 'Gasoline' } },
            { id: 4, name: 'Hyundai Tucson', type: 'SUV', image: 'https://images.unsplash.com/photo-1662919426868-7137f2619e04?q=80&w=1964&auto=format&fit=crop', price: 85, specs: { seats: '5', transmission: 'Auto', fuel: 'Hybrid' } },
          ]
        },
        {
          title: 'Off-Road Cars',
          description: 'Conquer any terrain with these rugged and reliable 4x4 vehicles.',
          cars: [
            { id: 5, name: 'Jeep Wrangler', type: '4x4', image: 'https://images.unsplash.com/photo-1566437979482-89b5a8a1c92a?q=80&w=2070&auto=format&fit=crop', price: 120, specs: { seats: '4', transmission: 'Manual', fuel: 'Diesel' } },
            { id: 6, name: 'Ford Bronco', type: '4x4', image: 'https://images.unsplash.com/photo-1627443493933-7a09c3799d50?q=80&w=2070&auto=format&fit=crop', price: 135, specs: { seats: '5', transmission: 'Auto', fuel: 'Gasoline' } },
            { id: 7, name: 'Land Rover Defender', type: '4x4', image: 'https://images.unsplash.com/photo-1605628540321-c584e03c407c?q=80&w=1974&auto=format&fit=crop', price: 150, specs: { seats: '5', transmission: 'Auto', fuel: 'Diesel' } },
            { id: 8, name: 'Toyota 4Runner', type: '4x4', image: 'https://images.unsplash.com/photo-1625941913160-26b274aad45f?q=80&w=2070&auto=format&fit=crop', price: 110, specs: { seats: '5', transmission: 'Auto', fuel: 'Gasoline' } },
          ]
        },
        {
          title: 'High-End Cars',
          description: 'Experience pure performance and thrilling drives with our sports collection.',
          cars: [
            { id: 9, name: 'Porsche 911', type: 'Coupe', image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1964&auto=format&fit=crop', price: 450, specs: { seats: '2', transmission: 'Auto', fuel: 'Gasoline' } },
            { id: 10, name: 'BMW M4', type: 'Coupe', image: 'https://images.unsplash.com/photo-1617436236592-1b33b2554744?q=80&w=2070&auto=format&fit=crop', price: 380, specs: { seats: '4', transmission: 'Auto', fuel: 'Gasoline' } },
            { id: 11, name: 'Chevrolet Corvette', type: 'Coupe', image: 'https://images.unsplash.com/photo-1613102462024-814a682c3c6f?q=80&w=2070&auto=format&fit=crop', price: 420, specs: { seats: '2', transmission: 'Auto', fuel: 'Gasoline' } },
          ]
        },
        {
          title: 'Luxury Cars',
          description: 'Travel in ultimate comfort and style with our finest luxury vehicles.',
          cars: [
            { id: 12, name: 'Rolls Royce Ghost', type: 'Luxury', image: 'https://images.unsplash.com/photo-1616422285812-4a0b2a5b2b2c?q=80&w=1964&auto=format&fit=crop', price: 800, specs: { seats: '5', transmission: 'Auto', fuel: 'Gasoline' } },
            { id: 13, name: 'Mercedes-Benz S-Class', type: 'Luxury', image: 'https://images.unsplash.com/photo-1620436993590-5cd5a4a5ac4e?q=80&w=2070&auto=format&fit=crop', price: 650, specs: { seats: '5', transmission: 'Auto', fuel: 'Hybrid' } },
            { id: 14, name: 'Bentley Continental GT', type: 'Luxury', image: 'https://images.unsplash.com/photo-1594071352434-d62f043b22b6?q=80&w=2070&auto=format&fit=crop', price: 750, specs: { seats: '4', transmission: 'Auto', fuel: 'Gasoline' } },
          ]
        },
      ]
    }
  }
}
</script>

<style lang="">
/* Scoped styles can be added here if needed, but Tailwind handles most of it. */
</style>
