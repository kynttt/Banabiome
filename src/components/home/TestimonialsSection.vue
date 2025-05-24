<template>
  <section class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
      <!-- Left: Customer Image -->
      <div class="flex-1 flex justify-center items-center">
        <div class="bg-yellow-200 rounded-2xl p-4 flex items-center justify-center">
          <img src="@/assets/testimonial1-placeholder.png" alt="Testimonial" class="w-40 h-40 object-cover rounded-xl" />
        </div>
      </div>
      <!-- Right: Testimonial Card -->
      <div class="flex-1 flex flex-col justify-center">
        <div class="flex items-center gap-2 mb-2">
          <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 8A5.001 5.001 0 0 1 12 3h2a5 5 0 0 1 5 5v2a5 5 0 0 1-5 5h-1v2a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1h2a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0V8z"/></svg>
          <div class="flex gap-1">
            <svg v-for="n in 5" :key="n" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 0 0 .95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 0 0-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 0 0-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 0 0-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 0 0 .95-.69l1.286-3.967z"/></svg>
          </div>
        </div>
        <p class="text-lg text-gray-900 font-medium mb-4">Banabiome has made such a difference in my daily routine—my digestion feels so much lighter, and I have way more energy throughout the day!</p>
        <div class="text-gray-800 font-semibold">Mr. Williams</div>
        <div class="text-gray-500 text-sm">Wellness Enthusiast</div>
      </div>
      <!-- Navigation Arrows -->
      <button class="absolute left-4 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-50 transition md:static md:translate-y-0 md:mr-4">
        <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button class="absolute right-4 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-50 transition md:static md:translate-y-0 md:ml-4">
        <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
// Static content for now. Add carousel logic later if needed.
</script> 