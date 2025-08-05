<template>
  <header>
    <nav class="navbar flex items-center justify-between bg-black text-white p-4 mx-4 my-2 shadow-md font-sans rounded-lg">
      <div class="nav-logo flex items-center space-x-2">
        <img class="h-10 w-10 object-cover" src="@/assets/logo.svg" alt="Logo" />
        <span class="font-bold text-xl">Car Rental Kenya</span>
      </div>

      <div class="nav-links">
        <ul class="flex space-x-8 text-base">
          <li class="px-4 py-2"><a href="#">Home</a></li>
          <li class="px-4 py-2"><a href="#">Rent a car</a></li>
          <li class="px-4 py-2"><a href="#">Business Consulting</a></li>
          <li class="px-4 py-2"><a href="#">About Us</a></li>
          <li class="px-4 py-2"><a href="#">Blog</a></li>
        </ul>
      </div>

      <div class="nav-cta flex items-center space-x-8">
        <button class="btn btn-primary border border-[#FFC300] text-[#FFC300] hover:border hover:border-[#FFC300] hover:text-[#FFC300] px-4 py-2 rounded-sm bg-transparent">
          Sign In
        </button>
        <button class="btn btn-secondary bg-[#FFC300] px-4 py-2 text-white rounded-sm">
          Get Started
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import '@/assets/logo.svg'
export default {
  name: 'Navbar'
}
</script>

<style></style>
