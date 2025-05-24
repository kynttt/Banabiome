<template>
  <section class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4">
      <p class="text-green-500 text-sm font-semibold mb-2 tracking-wide">SCIENCE-BACKED BENEFITS</p>
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8">What Banabiome Can Do For You</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BenefitCard
          icon="gut"
          title="Healthy Gut Microbiome"
          description="Feeds beneficial gut bacteria with RS2 resistant starch and prebiotic fiber, building a stronger digestive ecosystem."
        />
        <BenefitCard
          icon="bulb"
          title="Boosts Mood & Focus"
          description="Enhances short-chain fatty acid production (like butyrate) which may help improve mood, mental clarity, and resilience to stress."
        />
        <BenefitCard
          icon="blood"
          title="Regulates Blood Sugar"
          description="RS2 supports insulin sensitivity and healthy glucose metabolism, making Banabiome ideal for daily balance."
        />
        <BenefitCard
          icon="heart"
          title="Soothes Digestion"
          description="Packed with natural banana polyphenols, it's gentle on the gut—helping with bloating, bowel regularity, and recovery."
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BenefitCard from './BenefitCard.vue'
</script> 