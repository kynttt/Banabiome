<template>
  <nav class="shadow-sm">
    <div class="container bg-accent rounded-md md:my-8 mx-auto h-24 flex items-center px-4 sm:px-6 lg:px-8">
      <!-- Flex container for logo and nav -->
      <div class="flex justify-between items-center w-full h-16">
        <!-- Logo (left) -->
        <div class="flex items-center">
          <img class="h-14 w-auto" src="@/assets/Banabiome-logo.png" alt="Banabiome" />
          <h1 class="text-2xl font-bold text-gray-800 ml-2 hidden md:block">Banabiome</h1>
        </div>
        <!-- Nav Links + Order Now (right) -->
        <div class="flex items-center">
          <div class="hidden md:flex space-x-14">
            <router-link v-for="link in links" :key="link.to" :to="link.to" class="text-gray-700 hover:text-green-700 font-medium transition-colors duration-150">
              {{ link.label }}
            </router-link>
          </div>
          <div class="ml-16">
            <button class="bg-primary hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-md shadow transition-colors duration-150">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>


<script setup lang="ts">
const links = [
  { label: 'Home', to: '/' },
  { label: 'How It Works', to: '#' },
  { label: 'Benefits', to: '#' },
  { label: 'Ingredients', to: '#' },
  { label: 'FAQ', to: '#' },
]
</script> 