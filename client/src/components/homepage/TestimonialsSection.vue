<template>
  <section class="bg-slate-900 py-20">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          What Our Customers Are Saying
        </h2>
        <p class="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
          We pride ourselves on providing an exceptional experience. See what our renters have to share about their adventures with us.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="flex flex-col justify-between bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div>
            <div class="flex items-center mb-4">
              <div v-for="star in 5" :key="star" class="text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p class="text-slate-700 leading-relaxed">"{{ testimonial.quote }}"</p>
          </div>

          <div class="flex items-center mt-8">
            <img
              :src="testimonial.imageUrl"
              :alt="testimonial.name"
              class="h-12 w-12 rounded-full object-cover"
            >
            <div class="ml-4">
              <p class="font-semibold text-slate-900">{{ testimonial.name }}</p>
              <p class="text-sm text-slate-500">{{ testimonial.trip }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'TestimonialsSection',
  data() {
    return {
      testimonials: [
        {
          id: 1,
          name: 'Sarah L.',
          trip: 'Weekend Getaway in a Tesla',
          quote: 'The booking process was seamless, and the car was immaculate. Driving a Tesla for the weekend was an absolute dream. I can\'t recommend this service enough!',
          imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100', // Replace with your image paths
        },
        {
          id: 2,
          name: 'Michael B.',
          trip: 'Cross-Country in a Mustang',
          quote: 'Renting the Mustang was the highlight of our road trip. The car was a beast, and the customer service was top-notch from start to finish. We felt like VIPs.',
          imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100', // Replace with your image paths
        },
        {
          id: 3,
          name: 'Jessica T.',
          trip: 'Family Vacation with an SUV',
          quote: 'The SUV was spacious, clean, and perfect for our family of five. It made our vacation so much more comfortable and enjoyable. We will definitely be renting from here again!',
          imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100', // Replace with your image paths
        },
      ],
    };
  },
};
</script>
