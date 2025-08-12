<template>
  <header class="flex items-center justify-between px-4 py-3 bg-white shadow-sm sticky top-0 z-30">
    <h1 class="text-xl font-bold tracking-tight text-indigo-600">CarGo Rentals</h1>

    <div class="flex items-center gap-4">
      <input
        type="search"
        placeholder="Search cars..."
        class="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200 text-sm w-40 sm:w-64"
      />
      <button class="bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600 transition">
        Logout
      </button>
    </div>
  </header>
</template>
