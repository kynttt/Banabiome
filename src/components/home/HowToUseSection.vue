<template>
  <section class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
        Easy Ways to Add Banabiome To Your Day
      </h2>
      <p class="text-gray-600 text-lg text-center mb-8 max-w-2xl mx-auto">
        Effortlessly upgrade your daily routine. Banabiome's mild taste and fine texture blend into any meal—morning, noon, or night.
      </p>
      <!-- Tabs -->
      <div class="flex justify-center gap-4 mb-10">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          @click="activeTab = tab.key"
          :class="[
            'font-semibold px-6 py-2 rounded-md transition-colors duration-150',
            activeTab === tab.key ? 'bg-primary text-white shadow' : 'bg-gray-100 text-gray-700'
          ]"
        >
          {{ tab.label }}
        </button>
      </div>
      <!-- Two Column Grid Below Tabs -->
      <div class="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10">
        <!-- Left: Content -->
        <div class="flex flex-col justify-center ">
          <div class="flex items-center gap-2 mb-4">
        
            <span class="text-green-700 font-semibold text-lg">{{ currentContent.heading }}</span>
          </div>
          <p class="text-gray-700 mb-4">{{ currentContent.description }}</p>
          <ul class="mb-6 space-y-2">
            <li v-for="item in currentContent.list" :key="item" class="flex items-center gap-2 text-gray-700">
              <span class="w-2 h-2 bg-gray-700 rounded-full inline-block"></span>
              {{ item }}
            </li>
          </ul>
          <button class="bg-primary hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md shadow transition-colors duration-150">
            {{ currentContent.cta }}
          </button>
        </div>
        <!-- Right: Image (floating) -->
        <div class="flex justify-center items-center relative min-h-[240px]">
          
          <!-- Floating Image -->
          <img
            :src="currentContent.image"
            :alt="currentContent.heading"
            class="relative z-10 w-80 h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const tabs = [
  { key: 'breakfast', label: 'Breakfast' },
  { key: 'lunch', label: 'Lunch & Dinner' },
  { key: 'snacks', label: 'Snacks & Baking' },
]

const contents = {
  breakfast: {
    heading: 'Energize Your Morning',
    description: 'Start your day right—just one spoonful turns any breakfast into a gut-friendly meal.',
    list: [
      'Stir into yogurt, oats, or porridge',
      'Blend with your favorite smoothie',
      'Sprinkle on cereal or muesli',
    ],
    cta: 'Order Your Starter Pack',
    image: new URL('@/assets/howtouse.png', import.meta.url).href,
  },
  lunch: {
    heading: 'Power Up Lunch & Dinner',
    description: 'Add Banabiome to savory dishes for a fiber boost and gut support at any meal.',
    list: [
      'Mix into soups or stews',
      'Stir into sauces or curries',
      'Add to mashed potatoes or veggie sides',
    ],
    cta: 'Order Your Starter Pack',
    image: new URL('@/assets/howtouse.png', import.meta.url).href,
  },
  snacks: {
    heading: 'Snack & Bake the Gut-Friendly Way',
    description: 'Upgrade your snacks and baked goods with prebiotic power—delicious and nourishing.',
    list: [
      'Blend into protein balls or bars',
      'Add to pancake or waffle batter',
      'Mix into muffins, breads, or cookies',
    ],
    cta: 'Order Your Starter Pack',
    image: new URL('@/assets/howtouse.png', import.meta.url).href,
  },
}

const activeTab = ref('breakfast')
const currentContent = computed(() => contents[activeTab.value])
</script>
