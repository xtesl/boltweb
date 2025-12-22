<template>
    <MainNavbar  @open-about="openAboutModal" />
 <main>
    <RouterView />
      <Footer />

      <ToastNotification
      :show="toastState.show"
      :type="toastState.type"
      :message="toastState.message"
      :duration="toastState.duration"
      @close="close"
    />
    <AboutModal 
      :show="showAboutModal" 
      @close="closeAboutModal" 
    />
  </main>
  <WhatsAppButton 
      phone-number="233552510654"
      message="Hello! I'd like to know more"
      :show-pulse="true"
    />
</template>

<script setup>
import { ref } from 'vue'
import MainNavbar from "./components/MainNavbar.vue"
import Footer from './components/Footer.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
import ToastNotification from './components/ToastNotification.vue'
import AboutModal from './components/AboutModal.vue'
import { useToast } from './composables/useToast'

const { toastState, close } = useToast()

const showAboutModal = ref(false)
const openAboutModal = () => {
  showAboutModal.value = true
}

const closeAboutModal = () => {
  showAboutModal.value = false
}
// provide('openAboutModal', openAboutModal)
</script>


