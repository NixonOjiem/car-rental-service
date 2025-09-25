<template>
  <aside class="p-4 bg-gray-50 border-r border-gray-200 h-full">
    <h2 class="text-lg font-semibold mb-4">Filters</h2>
    <div class="space-y-4">
      <label class="block text-sm font-medium">Price Range</label>
      <input type="range" min="0" max="1000" class="w-full" />

      <label class="block text-sm font-medium">Type</label>
      <select class="w-full border rounded px-2 py-1 text-sm">
        <option>All</option>
        <option>SUV</option>
        <option>Sedan</option>
        <option>Electric</option>
      </select>
    </div>
  </aside>
</template>
