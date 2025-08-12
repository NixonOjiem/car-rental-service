<!-- src/components/marketplace/CarGrid.vue -->
<template>
  <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
    <CarCard
      v-for="car in cars"
      :key="car.id"
      :car="car"
      @book="onBook"
      @view="onView"
    />
  </div>
</template>

<script setup lang="ts">
import CarCard from './CarCard.vue'
import type { Car } from '../../types/Marketplace'

const cars: Car[] = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Corolla',
    type: 'Sedan',
    image: '/images/cars/corolla.jpg',
    pricePerDay: 5500,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    location: 'Nairobi',
    isAvailable: true,
    rating: 4.6,
  },
  {
    id: 2,
    brand: 'Tesla',
    model: 'Model Y',
    type: 'Electric',
    image: '/images/cars/model-y.jpg',
    pricePerDay: 12500,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Electric',
    location: 'Nairobi',
    isAvailable: false,
    rating: 4.9,
  },
  {
    id: 3,
    brand: 'Subaru',
    model: 'Forester',
    type: 'SUV',
    image: '/images/cars/forester.jpg',
    pricePerDay: 8000,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    location: 'Mombasa',
    isAvailable: true,
    rating: 4.4,
  },
  {
    id: 4,
    brand: 'Nissan',
    model: 'Note',
    type: 'Hatchback',
    image: '/images/cars/note.jpg',
    pricePerDay: 4500,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Hybrid',
    location: 'Kisumu',
    isAvailable: true,
    rating: 4.2,
  },
]

function onBook(car: Car) {
  // Replace with your booking flow (e.g., open modal, route, or emit upwards)
  console.log('Book:', car.id, car.brand, car.model)
}

function onView(car: Car) {
  // Replace with opening a detail modal/drawer
  console.log('View details:', car.id)
}
</script>
