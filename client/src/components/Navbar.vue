<template>
  <header class="fixed-header">
    <nav class="navbar flex items-center justify-between bg-black text-white p-4 mx-4 my-2 shadow-md font-sans rounded-lg">
      <div class="nav-logo flex items-center space-x-2">
        <img class="h-10 w-10 object-cover" src="@/assets/logo.svg" alt="Logo" />
        <span class="font-bold text-xl">CarGo Rental </span>
      </div>

      <div class="nav-links hidden md:block">
        <ul class="flex space-x-8 text-base">
          <li class="hover:text-[#FFC300] transition-colors"><a href="#">Home</a></li>
          <li class="hover:text-[#FFC300] transition-colors"><a href="#">Rent a car</a></li>
          <li class="hover:text-[#FFC300] transition-colors"><a href="#">Business Consulting</a></li>
          <li class="hover:text-[#FFC300] transition-colors"><a href="#">About Us</a></li>
          <li class="hover:text-[#FFC300] transition-colors"><a href="#">Blog</a></li>
        </ul>
      </div>

      <div class="nav-cta hidden md:flex items-center space-x-8">
        <router-link to="/login" class="btn btn-primary border border-[#FFC300] text-[#FFC300] hover:bg-[#FFC300] hover:text-black px-4 py-2 rounded-sm transition-colors">
          Sign In
        </router-link>
        <router-link to="/register" class="btn btn-secondary bg-[#FFC300] px-4 py-2 text-black rounded-sm font-semibold">
          Get Started
        </router-link>
      </div>

      <div class="md:hidden">
        <button class="text-white focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
// The asset import is not needed in the script block for Vite/Vue CLI to work with an <img> src.
// import '@/assets/logo.svg'
export default {
  name: 'Navbar'
}
</script>

<style scoped>
/*
  This CSS makes the navbar float above all other content.
*/
.fixed-header {
  position: fixed; /* Fixes the header to the viewport */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Ensures it stays on top of other elements */
  transition: top 0.3s;
}

/* I've also added a simple 'hidden' class for the nav links and a burger icon
  for a better mobile experience, using Tailwind's responsive prefixes (md:block).
*/
</style>
