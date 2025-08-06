<template>
  <header class="fixed-header px-4 lg:mt-6 sm:mt-4">
    <nav
      class="w-full max-w-5xl mx-auto flex items-center justify-between md:justify-center md:space-x-12 bg-black text-white px-4 py-2 shadow-md font-sans rounded-lg"
    >
      <!-- Logo -->
      <div class="nav-logo flex items-center space-x-2">
        <img class="h-10 w-10 object-cover" src="@/assets/logo.svg" alt="Logo" />
        <span class="font-bold text-xl">CarGo Rental</span>
      </div>

      <!-- Nav Links (hidden on mobile) -->
      <div class="nav-links hidden md:flex">
        <ul class="flex lg:space-x-8 md:space-x-5 text-base">
          <li class="hover:text-[#00b4d8] transition-colors"><a href="#">Home</a></li>
          <li class="hover:text-[#00b4d8] transition-colors"><a href="#">Rent a car</a></li>
          <li class="hover:text-[#00b4d8] transition-colors">
            <a href="#">Business Consulting</a>
          </li>
          <li class="hover:text-[#00b4d8] transition-colors"><a href="#">About Us</a></li>
          <li class="hover:text-[#00b4d8] transition-colors"><a href="#">Blog</a></li>
        </ul>
      </div>

      <!-- CTAs + Hamburger -->
      <div class="flex items-center space-x-4">
        <router-link
          to="/login"
          class="hidden md:inline-block border border-[#00b4d8] text-[#00b4d8] hover:bg-[#00b4d8] hover:text-black px-4 py-2 rounded-sm text-base transition-colors"
          >Sign In</router-link
        >

        <router-link
          to="/register"
          class="hidden md:inline-block bg-[#00b4d8] text-black px-4 py-2 rounded-sm font-semibold text-base"
          >Get Started</router-link
        >

        <button class="md:hidden text-white focus:outline-none">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: top 0.3s;
}

@media (max-width: 1024px) {
  .fixed-header {
    top: 1.25rem; /* 20px */
  }
}
</style>

<script>
// The asset import is not needed in the script block for Vite/Vue CLI to work with an <img> src.
// import '@/assets/logo.svg'
export default {
  name: 'Navbar',
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
