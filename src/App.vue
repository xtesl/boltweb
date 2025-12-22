<template>
    <MainNavbar />
 <main>
    <RouterView />
      <Footer />
  </main>
  <WhatsAppButton 
      phone-number="233552510654"
      message="Hello! I'd like to know more"
      :show-pulse="true"
    />
</template>

<script setup>
import MainNavbar from "./components/MainNavbar.vue"
import Footer from './components/Footer.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
</script>


