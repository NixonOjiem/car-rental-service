<template>
  <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
    <CarCard v-for="car in cars" :key="car.id" :car="car" />
  </div>
</template>

<script setup lang="ts">
import CarCard from './CarCard.vue'
const cars = [/* mock or fetched rental data */]
</script>
