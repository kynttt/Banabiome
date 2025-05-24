<template>
  <section class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
      <!-- Left: Product Image -->
      <div class="flex-1 flex justify-center">
        <div class="bg-yellow-200 rounded-2xl p-4">
          <img src="@/assets/whychoose-product-placeholder.png" alt="Banabiome Product" class="w-72 h-auto mx-auto drop-shadow-xl" />
        </div>
      </div>
      <!-- Right: Content -->
      <div class="flex-1">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Choose Banabiome?</h2>
        <ul class="mb-8 space-y-2">
          <li v-for="item in items" :key="item" class="flex items-start gap-2 text-base text-gray-800">
            <span class="mt-1">
              <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd" /></svg>
            </span>
            <span>{{ item }}</span>
          </li>
        </ul>
        <h3 class="text-xl font-semibold text-gray-900 mb-1">Gut Wellness. Science. Simplicity.</h3>
        <p class="text-gray-700 text-base">From Australian farms to your table, Banabiome delivers pure prebiotic nutrition for a healthier gut and a happier you.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  '100% Natural. Whole Green Banana',
  'Science-Backed Prebiotic RS2',
  'Clean-Label: No Preservatives, No Additives',
  'Vegan, Gluten-Free, Non-GMO',
  'Easy to Use: Stir, Sprinkle, Blend',
  'Made in Australia, Rigorously Tested',
]
</script> 