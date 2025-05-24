<template>
  <div class="bg-benCard rounded-xl p-6 shadow-sm relative grid grid-cols-[auto,1fr] gap-4 items-center min-h-32">
    <!-- Icon column -->
    <div class="flex flex-col items-center justify-start h-full">
      <span class="inline-block" v-html="iconSvg"></span>
    </div>
    <!-- Text column -->
    <div class="flex  flex-col justify-center h-full">
      <h3 class="font-semibold text-lg mb-1">{{ title }}</h3>
      <p class="text-gray-600 text-sm">{{ description }}</p>
    </div>
    <!-- Button (placed at bottom right of card) -->
    <button class="absolute bottom-0 right-0 bg-gray-300 hover:bg-gray-200 px-4 py-2 transition-colors rounded-br-xl">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  icon: string
  title: string
  description: string
}>()

const icons: Record<string, string> = {
  gut: `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' class='w-7 h-7 text-blue-400'><circle cx='12' cy='12' r='10' stroke-width='2' /><circle cx='12' cy='12' r='4' stroke-width='2' /></svg>`,
  bulb: `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' class='w-7 h-7 text-pink-400'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 3v2m0 14v2m6.364-6.364l1.414 1.414M4.222 4.222l1.414 1.414M21 12h2M1 12H3m16.364-6.364l1.414-1.414M4.222 19.778l1.414-1.414' /></svg>`,
  blood: `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' class='w-7 h-7 text-purple-400'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 3C12 3 7 8.5 7 12a5 5 0 0010 0c0-3.5-5-9-5-9z' /></svg>`,
  heart: `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' class='w-7 h-7 text-yellow-400'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 21C12 21 4 13.5 4 8.5A4.5 4.5 0 0112 4a4.5 4.5 0 018 4.5C20 13.5 12 21 12 21z' /></svg>`,
}

const iconSvg = computed(() => icons[props.icon] || icons.gut)
</script>
