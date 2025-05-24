<template>
  <nav class="sticky top-0 z-50" :class="{ '': isScrolled }">
     <div
    :class="[
      'container bg-accent rounded-md mx-auto h-24 flex items-center px-4 sm:px-6 lg:px-8 relative',
      isScrolled ? 'md:mb-4' : 'md:my-8'
    ]"
  >
      <!-- Flex container for logo and nav -->
      <div class="flex justify-between items-center w-full h-16">
        <!-- Logo (left) -->
        <div class="flex items-center">
          <img class="h-14 w-auto" src="@/assets/Banabiome-logo.png" alt="Banabiome" />
          <h1 class="text-2xl font-bold text-gray-800 ml-2 hidden md:block">Banabiome</h1>
        </div>

        <!-- Desktop Links + Order Now -->
        <div class="hidden md:flex items-center">
          <div class="space-x-14">
            <router-link
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="text-gray-700 hover:text-green-700 font-medium transition-colors duration-150"
            >
              {{ link.label }}
            </router-link>
          </div>
          <button class="ml-16 bg-primary hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-md shadow transition-colors duration-150">
            Order Now
          </button>
        </div>

        <!-- Mobile Hamburger -->
        <button
          class="md:hidden p-2 text-gray-700"
          @click="drawerOpen = true"
          aria-label="Open menu"
        >
          <Bars3Icon class="w-7 h-7" />
        </button>
      </div>

      <!-- Mobile Drawer -->
      <transition name="slide">
        <div
          v-if="drawerOpen"
          class="fixed inset-0 z-50 bg-white p-6 flex flex-col"
        >
          <!-- Close button -->
          <div class="self-end mb-8">
            <button @click="drawerOpen = false" aria-label="Close menu">
              <XMarkIcon class="w-8 h-8 text-gray-700" />
            </button>
          </div>

          <!-- Links -->
          <nav class="flex-1 flex flex-col gap-6">
            <router-link
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="text-gray-800 text-lg font-medium"
              @click="drawerOpen = false"
            >
              {{ link.label }}
            </router-link>
          </nav>

          <!-- Order Now -->
          <button
            class="mt-8 bg-primary hover:bg-green-700 text-white font-semibold px-5 py-3 rounded-md shadow transition-colors duration-150"
            @click="drawerOpen = false"
          >
            Order Now
          </button>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const links = [
  { label: 'Home', to: '/' },
  { label: 'How It Works', to: '#' },
  { label: 'Benefits', to: '#' },
  { label: 'FAQ', to: '#' },
  { label: 'Contact Us', to: '/contact' },
]

const drawerOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Slide-in from right */
.slide-enter-active, .slide-leave-active {
  transition: transform .3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-leave-from {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>
