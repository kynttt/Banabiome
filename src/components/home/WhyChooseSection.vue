<template>
  <section class="bg-white py-16">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 items-start md:gap-8 lg:gap-20">
        <!-- Left: Floating Product Image Over Colored Box -->
        <div class="flex justify-center items-start relative min-h-[240px] mb-8 md:mb-0">
          <!-- Yellow rectangle bg -->
          <div class="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-[30%] bg-secondary rounded-xl w-[300px] h-[100px] z-0"></div>
          <!-- Product image (floating above bg) -->
          <img
            src="@/assets/whychoose-product.png"
            alt="Banabiome Product"
            class="relative z-10 w-[450px] h-auto object-contain"
          />
        </div>
        <!-- Right: Content -->
        <div class="flex flex-col justify-center">
          <!-- Headline and Features -->
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Choose Banabiome?</h2>
          <ul class="mb-8">
            <li v-for="item in items" :key="item"
                class="flex items-start gap-3 text-base text-gray-800 mb-2">
              <span class="mt-2 w-3 h-3 rounded-full bg-green-600 inline-block flex-shrink-0"></span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- Subtitle and Description BELOW both columns -->
      <div class="mt-12 md:max-w-3xl mx-auto">
        <h3 class="text-xl font-semibold text-gray-900 mb-1">Gut Wellness. Science. Simplicity.</h3>
        <p class="text-gray-700 text-base ">
          From Australian farms to your table, Banabiome delivers pure prebiotic nutrition for a healthier gut and a happier you.
        </p>
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
