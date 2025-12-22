<template>
  <div class="min-h-screen bg-gray-900">
    <SEO 
      title="BoltWeb - Fast & Affordable Websites"
      description="Get your business online quickly with BoltWeb's fast and affordable website solutions."
      image="https://boltweb.onrender.com/images/boltweb_logo.png"
      url="https://boltweb.onrender.com"
    />
    <!-- Content -->
    <HeroSection />
    <FAQsSection />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import FAQsSection from '../components/FAQs.vue'
import SEO from '../components/SEO.vue'
</script>