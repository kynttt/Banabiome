<template>
  <div class="hidden md:flex bg-primary flex text-white text-sm py-2 px-4 h-16 items-center">
    <div class="container mx-auto flex items-center justify-between text-lg">
      <div class="flex items-center gap-8">
        <span class="flex items-center gap-2 ">
          <MapPinIcon class="w-5 h-5" />
          Cairns Queensland, Australia
        </span>
        <span class="flex items-center gap-2">
          <EnvelopeIcon class="w-5 h-5" />
          banabiome@health.care
        </span>
      </div>
      <a
  href="https://wa.me/<your-number-here>"
  target="_blank"
  rel="noopener noreferrer"
  class="flex items-center gap-2 underline underline-offset-2 px-3 py-1 font-medium hover:text-green-300 transition"
>
  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#25D366"/>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z" fill="white"/>
  </svg>
  Connect on Whatsapp
</a>
    </div>
  </div>
</template>


<script setup lang="ts">
import { MapPinIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
</script> 