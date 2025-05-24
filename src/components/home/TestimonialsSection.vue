<template>
  <div v-scroll-reveal>
    <section class="md:py-16 bg-white">
      <div class="max-w-5xl mx-auto px-4">
        <div class="grid grid-cols-[auto,1fr,auto] items-center gap-0 relative">
          <!-- Previous Arrow -->
          <button
            @click="prev"
            class="flex justify-center items-center bg-white border rounded-full p-2 shadow hover:bg-gray-50 transition"
            aria-label="Previous testimonial"
          >
            <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <!-- Center: Testimonial (image + content, side by side, each 50%) -->
          <div class="flex flex-col md:flex-row items-center w-full gap-0 md:gap-10 transition-all duration-300">
            <!-- Left: Customer Image Floating on Yellow BG -->
            <div class="flex-1 flex justify-center items-center relative min-h-[260px]">
              <!-- Yellow bg card, behind -->
              <div class="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 bg-secondary rounded-2xl w-72 h-[108px] z-0"></div>
              <!-- Floating image, above -->
              <img
    :src="testimonials[currentIndex].image"
    class="
      mx-auto                   
      object-cover rounded-xl
      w-72 h-72                 
      md:w-72 md:h-72          
      md:absolute md:left-1/2 md:top-1/2
      md:-translate-x-1/2 md:-translate-y-2/3
      drop-shadow-2xl z-10
    "
  />
            </div>
            <!-- Right: Testimonial Card -->
            <div class="flex-1 flex flex-col justify-center mt-8 md:mt-0">
              <div class="flex gap-1 mb-2">
                <svg v-for="n in 5" :key="n" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 0 0 .95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 0 0-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 0 0-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 0 0-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 0 0 .95-.69l1.286-3.967z"/>
                </svg>
              </div>
              <p class="text-lg text-gray-900 font-medium mb-4">
                {{ testimonials[currentIndex].quote }}
              </p>
              <div class="text-gray-800 font-semibold">{{ testimonials[currentIndex].name }}</div>
              <div class="text-gray-500 text-sm">{{ testimonials[currentIndex].title }}</div>
            </div>
          </div>

          <!-- Next Arrow -->
          <button
            @click="next"
            class="flex justify-center items-center bg-white border rounded-full p-2 shadow hover:bg-gray-50 transition"
            aria-label="Next testimonial"
          >
            <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <!-- Dots (optional, for direct navigation) -->
        <div class="flex justify-center gap-2 mt-6">
          <button
            v-for="(t, i) in testimonials"
            :key="i"
            @click="currentIndex = i"
            :aria-label="`Go to testimonial ${i + 1}`"
            :class="[
              'w-3 h-3 rounded-full focus:outline-none',
              i === currentIndex ? 'bg-primary' : 'bg-gray-300'
            ]"
          ></button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const testimonials = [
  {
    image: new URL('@/assets/testimonial1.png', import.meta.url).href,
    quote: "Banabiome has made such a difference in my daily routine—my digestion feels so much lighter, and I have way more energy throughout the day!",
    name: "Mr. Williams",
    title: "Wellness Enthusiast"
  },
  {
    image: new URL('@/assets/testimonial2.png', import.meta.url).href,
    quote: "I've tried many supplements, but Banabiome is the only one that's truly made me feel better every single day.",
    name: "Mr. Santos",
    title: "Fitness Coach"
  },
  {
    image: new URL('@/assets/testimonial3.png', import.meta.url).href,
    quote: "Even my kids love it! We all feel healthier, and it's so easy to mix in their breakfast.",
    name: "Mrs. Lee",
    title: "Mom of Two"
  }
]

const currentIndex = ref(0)

function prev() {
  currentIndex.value = (currentIndex.value + testimonials.length - 1) % testimonials.length
}

function next() {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}
</script>
