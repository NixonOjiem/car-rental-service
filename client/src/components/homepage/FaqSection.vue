<template>
  <section class="bg-slate-900 py-20 text-white">
    <div class="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600">
          Frequently Asked Questions
        </h2>
        <p class="mt-4 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
          Have questions? We've got answers. Here are some of the most common inquiries we receive.
        </p>
      </div>

      <div class="space-y-4">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-300"
          :class="{ 'border-sky-500/50': activeIndex === index }"
        >
          <button
            @click="toggleAccordion(index)"
            class="w-full flex justify-between items-center p-6 text-left"
          >
            <span class="text-xl font-semibold text-white">{{ item.question }}</span>
            <span class="transform transition-transform duration-300" :class="{ 'rotate-180': activeIndex === index }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          <div
            class="overflow-hidden transition-all duration-500 ease-in-out"
            :style="{ 'max-height': activeIndex === index ? '500px' : '0' }"
          >
            <div class="p-6 pt-0 text-slate-300">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
interface FaqItem {
  question: string;
  answer: string;
}

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FaqSection',
  data() {
    return {
      activeIndex: null as number | null, // Start with no item open
      faqItems: [
        {
          question: 'What do I need to rent a car?',
          answer: 'You will need a valid driver\'s license, a major credit card in your name, and to be at least 25 years of age. Some locations may have additional requirements, so please check with the specific rental branch.',
        },
        {
          question: 'Can I add an additional driver?',
          answer: 'Yes, you can add an additional driver to your rental. The additional driver must be present at the time of rental, meet the same age and license requirements as the primary renter, and an additional driver fee may apply.',
        },
        {
          question: 'What is your cancellation policy?',
          answer: 'You can cancel your reservation for free up to 24 hours before your scheduled pick-up time. For cancellations made within 24 hours, a cancellation fee may be charged. Please refer to your reservation confirmation for full details.',
        },
        {
          question: 'Do I need to purchase insurance?',
          answer: 'While we offer various protection products, you may be covered by your personal auto insurance or credit card. We recommend checking your existing coverage before renting. Our rental agents can help you understand the options available.',
        },
      ] as FaqItem[],
    };
  },
  methods: {
    toggleAccordion(index: number) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
});
</script>
