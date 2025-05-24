<template>
  <div class="min-h-screen flex flex-col bg-white">
   

    <!-- Hero Section -->
    <ContactHeroSection />

    <!-- Main Contact Form and Info Section -->
    <main class="flex-1">
      <!-- Place your contact form and info here, or import another component -->
      <ContactInfoAndForm />
      <CairnsMap />
      <ContactInfoBar />
      <!-- Or inline your contact section as needed -->
    </main>

   
  </div>
</template>

<script setup lang="ts">
import ContactHeroSection from '@/components/contact/ContactHero.vue'

// If you have your contact form/info as another component:
import ContactInfoAndForm from '@/components/home/ContactSection.vue'
import CairnsMap from '@/components/contact/CairnsMap.vue'
import ContactInfoBar from '@/components/contact/ContactInfoBar.vue'
</script>
