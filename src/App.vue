<template>
    <MainNavbar />
 <main>
    <RouterView />
      <Footer />
  </main>
</template>

<script setup>
import MainNavbar from "./components/MainNavbar.vue"
import Footer from './components/Footer.vue'
</script>


