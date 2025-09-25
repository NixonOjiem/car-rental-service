<!-- src/components/marketplace/CarCard.vue -->
<template>
  <article
    class="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
  >
    <div class="aspect-[16/10] overflow-hidden bg-gray-100">
      <img
        :src="car.image"
        :alt="`${car.brand} ${car.model}`"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <span
        class="absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-medium"
        :class="car.isAvailable ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'"
      >
        {{ car.isAvailable ? 'Available' : 'Unavailable' }}
      </span>
    </div>

    <div class="p-4 space-y-3">
      <div class="flex items-start justify-between gap-3">
        <div>
          <h3 class="text-base font-semibold text-gray-900">
            {{ car.brand }} {{ car.model }}
          </h3>
          <p class="text-xs text-gray-500">
            {{ car.type }} • {{ car.seats }} seats • {{ car.transmission }}
          </p>
        </div>
        <div class="text-right">
          <p class="text-lg font-bold text-indigo-600">
            {{ currency(car.pricePerDay) }}
          </p>
          <p class="text-xs text-gray-500">per day</p>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-2 text-xs text-gray-600">
        <span class="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1">
          ⛽ {{ car.fuel }}
        </span>
        <span class="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1">
          📍 {{ car.location }}
        </span>
        <span v-if="car.rating" class="inline-flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-1 text-yellow-800">
          ⭐ {{ car.rating.toFixed(1) }}
        </span>
      </div>

      <div class="flex gap-2">
        <button
          class="flex-1 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 disabled:opacity-50"
          :disabled="!car.isAvailable"
          @click="$emit('book', car)"
        >
          Book now
        </button>
        <button
          class="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          @click="$emit('view', car)"
        >
          Details
        </button>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { Car } from '../../types/Marketplace'

export default defineComponent({
  name: 'CarCard',
  props: {
    car: {
      type: Object as () => Car,
      required: true,
    },
  },
  emits: ['book', 'view'],
  methods: {
    currency(value: number): string {
      return new Intl.NumberFormat('en-KE', {
        style: 'currency',
        currency: 'KES',
        maximumFractionDigits: 0,
      }).format(value)
    },
    handleBook() {
      this.$emit('book', this.car)
    },
    handleView() {
      this.$emit('view', this.car)
    },
  },
})
</script>
