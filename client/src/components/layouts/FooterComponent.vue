<template>
  <footer class="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-700/50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">

        <!-- Logo & About -->
        <div>
          <h2 class="text-white text-xl font-bold mb-4">CarGo Rentals</h2>
          <p class="text-sm">
            Your journey begins with the perfect ride. Explore luxury, power, and style from our fleet of premium vehicles.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-white font-semibold text-sm uppercase mb-4">Company</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-white transition">About Us</a></li>
            <li><a href="#" class="hover:text-white transition">Fleet</a></li>
            <li><a href="#" class="hover:text-white transition">FAQs</a></li>
            <li><a href="#" class="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-white font-semibold text-sm uppercase mb-4">Services</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-white transition">Daily Rentals</a></li>
            <li><a href="#" class="hover:text-white transition">Long-Term Deals</a></li>
            <li><a href="#" class="hover:text-white transition">Luxury Packages</a></li>
            <li><a href="#" class="hover:text-white transition">Roadside Assistance</a></li>
          </ul>
        </div>

        <!-- Newsletter & Social -->
        <div>
          <h3 class="text-white font-semibold text-sm uppercase mb-4">Stay Updated</h3>
          <form @submit.prevent class="flex flex-col space-y-3">
            <input type="email" placeholder="Enter your email" class="px-4 py-2 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-sky-500" />
            <button class="px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-500 transition font-semibold text-sm">
              Subscribe
            </button>
          </form>

          <div class="mt-6 flex space-x-4">
            <a href="#" class="text-slate-400 hover:text-white">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C..." />
              </svg>
            </a>
            <a href="#" class="text-slate-400 hover:text-white">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c..." />
              </svg>
            </a>
            <a href="#" class="text-slate-400 hover:text-white">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184..." />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Strip -->
      <div class="mt-12 border-t border-slate-700/30 pt-6 text-center text-xs text-slate-500">
        &copy; {{ new Date().getFullYear() }} CarGo Rentals. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'FooterComponent',
}
</script>
