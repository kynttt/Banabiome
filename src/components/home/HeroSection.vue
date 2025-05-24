<template>
  <section class="bg-white py-12">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 px-4">
      <!-- Left: Product Image (bag + bananas as one image) -->
      <div class="relative flex-1 flex flex-col items-center">
        <div class="absolute -left-8 top-1/2 -translate-y-1/2 bg-white rounded-full shadow px-3 py-2 flex items-center text-sm font-medium text-gray-700">
          <svg class="w-5 h-5 mr-1 text-green-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
          Loved by 10,000+ Happy Guts
        </div>
        <div class="bg-secondary rounded-2xl p-4 relative z-10">
          <!-- Placeholder image, replace with your actual asset later -->
          <img src="@/assets/product-bag.png" alt="Green Banana Supplement" class="w-72 h-auto mx-auto drop-shadow-xl" />
        </div>
      </div>
      <!-- Right: Text -->
      <div class="flex-1 flex flex-col items-start lg:items-start mt-8 lg:mt-0">
        <p class="text-primary font-semibold mb-2">Welcome to Banabiome<sup class="text-xs align-super">™</sup></p>
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">A Happier Gut<br />Starts With Nature</h1>
        <button class="bg-primary hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-md shadow transition-colors duration-150 text-lg">
          Discover Banabiome
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Accept props for text/images if needed in the future
</script> 