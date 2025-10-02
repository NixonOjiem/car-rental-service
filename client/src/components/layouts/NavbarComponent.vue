<template>
  <header class="fixed-header px-4 lg:mt-6 sm:mt-4">
    <nav
      class="w-full max-w-5xl mx-auto flex items-center justify-between md:justify-center md:space-x-12 bg-black text-white px-4 py-2 shadow-md font-sans rounded-lg">
      <!-- Logo -->
      <div class="nav-logo flex items-center space-x-2 cursor-pointer" @click="goHome">
        <img class="h-10 w-10 object-cover" src="@/assets/logo.svg" alt="Logo" />
        <span class="font-bold text-xl">CarGo Rental</span>
      </div>

      <!-- Nav Links (hidden on mobile) -->
      <div class="nav-links hidden md:flex">
        <ul class="flex lg:space-x-8 md:space-x-5 text-base">
          <!-- Use router-link for internal navigation -->
          <li class="hover:text-[#00b4d8] transition-colors">
            <router-link to="/">Home</router-link>
          </li>
          <li class="hover:text-[#00b4d8] transition-colors">
            <router-link to="/rent">Rent a car</router-link>
          </li>
          <li class="hover:text-[#00b4d8] transition-colors">
            <router-link to="#">Business Consulting</router-link>
          </li>
          <li class="hover:text-[#00b4d8] transition-colors">
            <router-link to="#">About Us</router-link>
          </li>
          <li class="hover:text-[#00b4d8] transition-colors">
            <router-link to="#">Blog</router-link>
          </li>
        </ul>
      </div>

      <!-- CTAs + Hamburger -->
      <div class="flex items-center space-x-4">
        <!-- Show user info and logout if authenticated -->
        <div v-if="authStore.isAuthenticated" class="hidden md:flex items-center space-x-4">
          <span class="text-sm">Welcome, {{ authStore.user?.email }}</span>
          <button @click="authStore.logout()"
            class="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-3 py-1 rounded-sm text-sm transition-colors">
            Logout
          </button>
        </div>

        <!-- Show Login/Register buttons if not authenticated -->
        <div v-else class="hidden md:flex items-center space-x-2">
          <router-link to="/login"
            class="border border-[#00b4d8] text-[#00b4d8] hover:bg-[#00b4d8] hover:text-black px-4 py-2 rounded-sm text-base transition-colors">
            Sign In
          </router-link>
          <router-link to="/register" class="bg-[#00b4d8] text-black px-4 py-2 rounded-sm font-semibold text-base">
            Get Started
          </router-link>
        </div>

        <!-- Hamburger Menu Button -->
        <button class="md:hidden text-white focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { useAuthStore } from '../../stores/auth'

export default {
  name: 'NavbarComponent',
  setup() {
    const authStore = useAuthStore()
    return {
      authStore
    }
  },
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: top 0.3s;
}

/* bump the header down a bit on smaller desktops/tablets if you want space above */
@media (max-width: 1024px) {
  .fixed-header {
    top: 1.25rem;
    /* 20px */
  }
}
</style>
