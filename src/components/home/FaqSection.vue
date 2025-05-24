<template>
  <section class="py-16 bg-white">
    <div class="max-w-3xl mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      <div class="divide-y divide-gray-200 border rounded-lg bg-white shadow">
        <div v-for="(faq, idx) in faqs" :key="faq.q" class="">
          <button
            class="w-full flex justify-between items-center py-4 px-6 text-left focus:outline-none focus:bg-gray-50 transition"
            @click="openIdx = openIdx === idx ? null : idx"
          >
            <span class="font-medium text-gray-900">{{ faq.q }}</span>
            <svg :class="[openIdx === idx ? 'rotate-180' : '', 'w-5 h-5 text-gray-500 transition-transform']" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          <div v-if="openIdx === idx" class="px-6 pb-4 text-gray-700 animate-fade-in">
            {{ faq.a }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const faqs = [
  { q: "Is Banabiome easy to customize?", a: "Yes! Banabiome can be added to a variety of foods and drinks with ease." },
  { q: "Is Banabiome optimized for gut health?", a: "Absolutely. Banabiome is formulated to support gut health with prebiotic fiber." },
  { q: "How does Banabiome compare to other prebiotics?", a: "Banabiome uses whole green banana, providing unique resistant starch and polyphenols." },
  { q: "Is Banabiome suitable for special diets?", a: "Yes, it is vegan, gluten-free, and non-GMO." },
  { q: "Can I get a refund if I don't like it?", a: "Please contact our support for our satisfaction guarantee and refund policy." },
  { q: "What features will be added in the future?", a: "We are always working on new ways to enjoy Banabiome—stay tuned!" },
]

const openIdx = ref(null)
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: none; }
}
.animate-fade-in {
  animation: fade-in 0.2s ease;
}
</style> 