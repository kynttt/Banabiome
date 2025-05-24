<template>
  <section class="w-full bg-white py-16">
    <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0">
      <!-- Left: Title and Subtitle -->
      <div class="mb-6 md:mb-0">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Get in Touch with us</h2>
        <p class="text-gray-700 text-sm">We're here to answer your questions and assist you.</p>
      </div>
      <!-- Contact Options -->
      <div class="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
        <!-- Call Us -->
        <div class="flex items-center gap-3">
          <span class="bg-greenAccent rounded-full p-3 flex items-center justify-center">
            <PhoneIcon class="w-6 h-6 text-white" />
          </span>
          <div>
            <div class="font-semibold text-gray-900 text-base">Call Us</div>
            <div class="text-gray-700 text-sm">1005-346-272</div>
          </div>
        </div>
        <!-- Send us a mail -->
        <div class="flex items-center gap-3">
          <span class="bg-greenAccent rounded-full p-3 flex items-center justify-center">
            <EnvelopeIcon class="w-6 h-6 text-white" />
          </span>
          <div>
            <div class="font-semibold text-gray-900 text-base">Send us a mail</div>
            <div class="text-gray-700 text-sm">banabiome@health.care</div>
          </div>
        </div>
        <!-- Opening hours -->
        <div class="flex items-center gap-3">
          <span class="bg-greenAccent rounded-full p-3 flex items-center justify-center">
            <ClockIcon class="w-6 h-6 text-white" />
          </span>
          <div>
            <div class="font-semibold text-gray-900 text-base">Opening hours</div>
            <div class="text-gray-700 text-sm">Mon - Sat 7:00 - 17:00</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/vue/24/outline'
</script>
