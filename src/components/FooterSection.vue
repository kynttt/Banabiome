<template>
  <footer class="bg-primary text-white pt-12 pb-6">
    <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-start gap-10">
      <!-- Left: Logo & Buttons -->
      <div class="flex-1 min-w-[200px] mb-8 md:mb-0">
        <div class="font-bold text-xl mb-6">Banabiome</div>
        <div class="flex flex-col gap-3">
          <button class="flex items-center gap-2 border border-white rounded-md px-4 py-2 font-semibold hover:bg-white hover:text-green-700 transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M3 14h18" /></svg>
            Order Banabiome
          </button>
          <button class="flex items-center gap-2 border border-white rounded-md px-4 py-2 font-semibold hover:bg-white hover:text-green-700 transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16.72 11.06a11.05 11.05 0 01-4.17 4.17l-2.2-.73a1 1 0 00-1.04.24l-1.1 1.1a9 9 0 0012.73-12.73l-1.1 1.1a1 1 0 00-.24 1.04l.73 2.2z" /></svg>
            Connect on Whatsapp
          </button>
        </div>
      </div>
      <!-- Center/Right: Links -->
      <div class="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div class="font-semibold mb-3">SHOP</div>
          <ul class="space-y-1 text-sm">
            <li><a href="#" class="hover:underline">How to Use</a></li>
            <li><a href="#" class="hover:underline">Buy Now</a></li>
            <li><a href="#" class="hover:underline">Recipes</a></li>
            <li><a href="#" class="hover:underline">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div class="font-semibold mb-3">ABOUT</div>
          <ul class="space-y-1 text-sm">
            <li><a href="#" class="hover:underline">Our Story</a></li>
            <li><a href="#" class="hover:underline">Science & Benefits</a></li>
            <li><a href="#" class="hover:underline">Sourcing & Quality</a></li>
            <li><a href="#" class="hover:underline">Sustainability</a></li>
          </ul>
        </div>
        <div>
          <div class="font-semibold mb-3">SUPPORT</div>
          <ul class="space-y-1 text-sm">
            <li><a href="#" class="hover:underline">Contact Us</a></li>
            <li><a href="#" class="hover:underline">Shipping & Returns</a></li>
            <li><a href="#" class="hover:underline">Wholesale & Distributor</a></li>
            <li><a href="#" class="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <div class="font-semibold mb-3">QUICK LINKS</div>
          <ul class="space-y-1 text-sm">
            <li><a href="#" class="hover:underline">License</a></li>
            <li><a href="#" class="hover:underline">Changelog</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Social Icons -->
    <div class="max-w-7xl mx-auto px-4 mt-8 flex justify-end gap-4">
      <a href="#" class="hover:text-gray-200" aria-label="Facebook"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg></a>
      <a href="#" class="hover:text-gray-200" aria-label="Twitter"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.155 11.675-11.49 0-.175 0-.349-.012-.522A8.18 8.18 0 0022 5.92a8.19 8.19 0 01-2.357.637A4.118 4.118 0 0021.448 4.1a8.224 8.224 0 01-2.605.977A4.107 4.107 0 0015.448 3c-2.266 0-4.102 1.818-4.102 4.063 0 .319.036.63.106.927C7.728 7.87 4.1 6.13 1.671 3.149a4.025 4.025 0 00-.555 2.044c0 1.41.724 2.655 1.825 3.384A4.093 4.093 0 01.8 7.575v.051c0 1.97 1.407 3.617 3.292 3.991a4.1 4.1 0 01-1.085.144c-.265 0-.522-.026-.772-.073.523 1.614 2.037 2.792 3.833 2.825A8.233 8.233 0 012 19.54a11.616 11.616 0 006.29 1.84" /></svg></a>
      <a href="#" class="hover:text-gray-200" aria-label="Pinterest"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 3.134 8.09 7.25 8.09 1.01 0 1.96-.276 2.77-.755-.038-.18-.073-.457.015-.654.08-.186.52-1.186.68-1.703.06-.186.31-.76.18-.92-.13-.16-.31-.18-.46-.18-.16 0-.34.02-.52.03-.18.01-.37.02-.54.02-1.01 0-1.86-.276-2.36-.755-.5-.48-.8-1.16-.8-2.01 0-.85.32-1.56.8-2.01.48-.45 1.13-.73 1.87-.73.74 0 1.39.28 1.87.73.48.45.8 1.16.8 2.01 0 .85-.32 1.56-.8 2.01-.5.48-1.35.755-2.36.755-.17 0-.36-.01-.54-.02-.18-.01-.36-.03-.52-.03-.15 0-.33.02-.46.18-.13.16.12.73.18.92.16.517.6 1.517.68 1.703.088.197.053.474.015.654.81.479 1.76.755 2.77.755C20.866 20.09 24 16.418 24 12c0-5.523-4.477-10-10-10z" /></svg></a>
      <a href="#" class="hover:text-gray-200" aria-label="Instagram"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 2.25a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm5.25 1.25a1 1 0 110 2 1 1 0 010-2z" /></svg></a>
    </div>
  </footer>
</template>

<script setup lang="ts">
// All links/buttons can be made props for further reusability
</script> 