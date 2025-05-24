<template>
  <section class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-start">
      <!-- Left: Info -->
      <div class="flex-1 mb-8 md:mb-0">
        <p class="text-green-500 text-xs font-semibold mb-2 uppercase tracking-wide">Appointment</p>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Get in Touch to Order<br />Banabiome or Ask a Question</h2>
        <p class="text-gray-700 mb-6">Whether you have questions about Banabiome, want to place an order, or are interested in wholesale opportunities, we're happy to help. Fill out the form and our team will get back to you soon!</p>
        <div class="flex items-center gap-2 mb-2">
          <span class="bg-primary rounded-full p-2">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10l1.553 1.553a16.978 16.978 0 0011.894 4.947c.512 0 1.02-.02 1.523-.06l1.53 1.53A2 2 0 0021 17V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h.01z" /></svg>
          </span>
          <span class="text-gray-800">(123) 456-7890</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="bg-primary rounded-full p-2">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          </span>
          <span class="text-gray-800">banabiome@health.care</span>
        </div>
      </div>
      <!-- Right: Form -->
      <form class="flex-1 bg-white rounded-lg shadow p-8 space-y-4 w-full max-w-md mx-auto">
        <input type="text" placeholder="Name" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none" />
        <input type="text" placeholder="Phone" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none" />
        <input type="email" placeholder="Email" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none" />
        <select class="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none">
          <option value="">Select appointment Type</option>
          <option value="order">Order</option>
          <option value="wholesale">Wholesale Inquiry</option>
          <option value="question">General Question</option>
        </select>
        <textarea placeholder="Message" rows="4" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"></textarea>
        <button type="submit" class="w-full bg-primary hover:bg-green-700 text-white font-semibold py-3 rounded-md transition-colors">Submit Now</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
// Ready for validation and backend integration
</script> 