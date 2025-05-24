<template>
  <div class="min-h-screen bg-white flex flex-col">
    <TopBar />
    <Navbar />
    <main class="flex-1">
      <router-view />
    </main>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import TopBar from '@/components/TopBar.vue'
import Navbar from '@/components/Navbar.vue'
import FooterSection from '@/components/FooterSection.vue'
</script> 