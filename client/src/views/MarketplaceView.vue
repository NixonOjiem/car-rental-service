<template>
  <div class="min-h-screen flex flex-col bg-white text-gray-900">
    <!-- Top Header -->
    <MarketplaceHeader />

    <!-- Main Content Area -->
    <div class="flex flex-1">
      <!-- Sidebar (Filters) for desktop -->
      <FilterSidebar class="hidden lg:block lg:w-72 xl:w-80 border-r border-gray-200" />

      <!-- Grid + Stats -->
      <main class="flex-1 p-4 sm:p-6 lg:p-8 space-y-6">
        <RentalStatsBar />
        <CarGrid />
      </main>
    </div>

    <!-- Mobile Bottom Navigation -->
    <MobileBottomNav class="lg:hidden" />
  </div>
</template>

<script setup lang="ts">
import MarketplaceHeader from '../components/marketplace/layouts/MarketplaceHeader.vue'
import MobileBottomNav from '../components/marketplace/layouts/MobileBottomNav.vue'
import FilterSidebar from '../components/marketplace/FilterSidebar.vue'
import CarGrid from '../components/marketplace/CarGrid.vue'
import RentalStatsBar from '../components/marketplace/RentalStatsBar.vue'
</script>

<style scoped>
main {
  /* Optional tactile polish */
  backdrop-filter: blur(12px);
}
</style>
