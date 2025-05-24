<template>
  <section class="bg-white py-12">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 px-4">
      <!-- Left: Product Image (bag + bananas as one image) -->
      <div class="relative flex-1 flex flex-col items-center">
        <!-- Floating "Loved by" badge -->
        <div class="hidden md:flex absolute -left-2 top-1/3 -translate-y-1/2 bg-white rounded-md shadow px-3 py-2 flex items-center text-sm font-medium text-gray-700 z-30">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  class="w-8 h-8 mr-2 text-primary">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

          Loved by 10,000+ <br/>Happy Guts
        </div>
        <!-- Background card -->
        <div class="bg-secondary rounded-2xl p-4 relative z-10 w-[24rem] h-[24rem] md:w-96 md:h-96 flex items-center justify-center">
        
        </div>
       
        <img
          src="@/assets/product-bag.png"
          alt="Green Banana Supplement"
          class="w-[24rem] h-auto md:w-[450px] absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 drop-shadow-xl pointer-events-none"
        />
      </div>
      <!-- Right: Text -->
      <div class="flex-1 flex flex-col items-start lg:items-start mt-8 lg:mt-0">
        <p class="text-primary font-medium mb-2 md:my-4">Welcome to Banabiome</p>
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
  <span class="block">A Happier Gut</span>
  <span class="block mt-4">Starts With Nature</span>
</h1>
        <button class="bg-primary md:w-1/2 w-full hover:bg-green-700 text-white font-semibold px-8  mt-8 py-3 rounded-md shadow transition-colors duration-150 text-lg">
          Discover Banabiome
        </button>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">

</script> 