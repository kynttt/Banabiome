<template>
  <section class="relative w-full h-[400px] md:h-[60vh] flex items-center justify-center overflow-hidden">
    <!-- Background image -->
    <img
      src="@/assets/contact-hero.jpg"
      alt="Contact Us Background"
      class="absolute inset-0 w-full h-full object-cover"
      draggable="false"
    />
    <!-- White overlay for faded effect -->
    <div class="absolute inset-0 bg-white/80"></div>
    <!-- Centered Content -->
    <div class="relative z-10 flex flex-col items-center justify-center w-full">
      <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-2 text-center drop-shadow">
        Contact Us
      </h1>
      <div class="flex items-center justify-center gap-1 text-base md:text-lg">
        <router-link to="/" class="text-primary font-medium hover:underline">
          Home
        </router-link>
        <ChevronRightIcon class="w-5 h-5 text-gray-500" />
        <span class="text-gray-700">Contact Us</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/20/solid'
</script>
