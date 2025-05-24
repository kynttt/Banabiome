<template>
  <div class="bg-blue-50 rounded-xl p-6 flex flex-col gap-3 shadow-sm relative">
    <span class="inline-block mb-2" v-html="iconSvg"></span>
    <h3 class="font-semibold text-lg mb-1">{{ title }}</h3>
    <p class="text-gray-600 text-sm flex-1">{{ description }}</p>
    <button class="absolute bottom-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-gray-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
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