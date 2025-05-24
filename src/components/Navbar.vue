<template>
  <nav class="sticky top-0 z-50">
    <div
      :class="[
        'container bg-accent rounded-md mx-auto flex items-center px-4 sm:px-6 lg:px-8 relative transition-all duration-300 ease-in-out',
        isScrolled
          ? 'h-16 md:mb-4'   /* smaller + bottom margin */
          : 'h-24 md:my-8'   /* original height + vertical margin */
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
              class="font-medium transition-colors duration-150 text-gray-700 hover:text-green-700"
              :class="{ 'text-primary': isActiveSection(link.to) }"
              @click="handleNavigation(link.to)"
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
          <div class="self-end mb-8">
            <button @click="drawerOpen = false" aria-label="Close menu">
              <XMarkIcon class="w-8 h-8 text-gray-700" />
            </button>
          </div>

          <nav class="flex-1 flex flex-col gap-6">
            <router-link
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="text-lg font-medium transition-colors duration-150 text-gray-800 hover:text-green-700"
              :class="{ 'text-primary': isActiveSection(link.to) }"
              @click="handleNavigation(link.to)"
            >
              {{ link.label }}
            </router-link>
          </nav>

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
import { useRouter } from 'vue-router'

const router = useRouter()
const drawerOpen = ref(false)
const isScrolled = ref(false)

const links = [
  { label: 'Home', to: '/' },
  { label: 'How It Works', to: '#how-it-works' },
  { label: 'Benefits', to: '#benefits' },
  { label: 'FAQ', to: '#faq' },
  { label: 'Contact Us', to: '/contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const isActiveSection = (to: string) => {
  if (to === '/') {
    return router.currentRoute.value.path === '/'
  }
  if (to.startsWith('#')) {
    const section = to.substring(1)
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      return rect.top <= 100 && rect.bottom >= 100
    }
  }
  return router.currentRoute.value.path === to
}

const handleNavigation = (to: string) => {
  if (to.startsWith('#')) {
    const section = to.substring(1)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  drawerOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('scroll', () => {
    // Force re-evaluation of active section on scroll
    links.forEach(link => isActiveSection(link.to))
  }, { passive: true })
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
