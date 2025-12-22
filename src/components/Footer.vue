<script setup>
import { ref } from 'vue'
import { useToast } from '../composables/useToast'

const { success, error, warning, info } = useToast()

const currentYear = new Date().getFullYear()
const email = ref('')

const handleSubscribe = () => {
  if (email.value) {
    success('Thank you for subscribing! Check your email.')
    email.value = ''
  }
}

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact', href: '#contact' }
]

const services = [
  { name: 'Website Design', href: '#' },
  { name: 'E-commerce Development', href: '#' },
  { name: 'SEO Services', href: '#' },
  { name: 'Website Maintenance', href: '#' },
  { name: 'Logo & Branding', href: '#' }
]

const socialLinks = [
  { icon: 'pi-facebook', href: '#', label: 'Facebook' },
  { icon: 'pi-twitter', href: '#', label: 'Twitter' },
  { icon: 'pi-instagram', href: '#', label: 'Instagram' },
  { icon: 'pi-linkedin', href: '#', label: 'LinkedIn' },
  { icon: 'pi-whatsapp', href: '#', label: 'WhatsApp' }
]
</script>

<template>
  <!-- CTA Section Above Footer -->
  <section class="bg-gradient-to-r from-primary-600 to-primary-700 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-3xl sm:text-4xl font-black text-white mb-4">
        Ready to Launch Your Website?
      </h2>
      <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
        Get a professional website in 7-14 days. No hidden fees. Just results.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button class="bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:scale-105">
          <i class="pi pi-bolt"></i>
          <span>Get Free Quote Now</span>
        </button>
        <button class="bg-white hover:bg-secondary-50 text-primary-600 font-bold px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg">
          <i class="pi pi-phone"></i>
          <span>Call: +233 XX XXX XXXX</span>
        </button>
      </div>
    </div>
  </section>

  <!-- Main Footer -->
  <footer class="bg-secondary-900 text-secondary-300">
    
    <!-- Top Footer Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        <!-- Company Info Column -->
        <div class="lg:col-span-1">
          <!-- Logo -->
          <div class="flex items-center gap-3 mb-6">
            <!-- <div class="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center shadow-lg">
              <i class="pi pi-bolt text-white text-2xl"></i>
            </div> -->

              <img
          src="/images/boltweb_logo.png"
          alt="DeleAI Logo"
          class="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
       
        />
            <span class="text-2xl font-black text-white">
              Bolt<span class="text-accent-500">Web</span>
            </span>
          </div>
          
          <p class="text-secondary-400 mb-6 leading-relaxed">
            Ghana's fastest web design agency. Building professional websites that help businesses grow online.
          </p>

          <!-- Social Links -->
          <div class="flex gap-3">
            <a 
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              class="w-10 h-10 bg-secondary-800 hover:bg-accent-500 rounded-lg flex items-center justify-center transition-all duration-200 group"
            >
              <i :class="['pi text-secondary-300 group-hover:text-white transition-colors', social.icon]"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links Column -->
        <div>
          <h3 class="text-white font-bold text-lg mb-6 flex items-center gap-2">
            <i class="pi pi-bars text-accent-500"></i>
            Quick Links
          </h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <a 
                :href="link.href" 
                class="text-secondary-400 hover:text-accent-500 transition-colors duration-200 flex items-center gap-2 group"
              >
                <i class="pi pi-angle-right text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
                <span>{{ link.name }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Services Column -->
        <div>
          <h3 class="text-white font-bold text-lg mb-6 flex items-center gap-2">
            <i class="pi pi-wrench text-accent-500"></i>
            Our Services
          </h3>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service.name">
              <a 
                :href="service.href" 
                class="text-secondary-400 hover:text-accent-500 transition-colors duration-200 flex items-center gap-2 group"
              >
                <i class="pi pi-angle-right text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
                <span>{{ service.name }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Newsletter Column -->
        <div>
          <h3 class="text-white font-bold text-lg mb-6 flex items-center gap-2">
            <i class="pi pi-envelope text-accent-500"></i>
            Stay Updated
          </h3>
          <p class="text-secondary-400 mb-4 text-sm">
            Subscribe to get web design tips, special offers, and Ghana business insights.
          </p>
          
          <form @submit.prevent="handleSubscribe" class="space-y-3">
            <div class="relative">
              <input 
                v-model="email"
                type="email" 
                placeholder="Enter your email"
                required
                class="w-full bg-secondary-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all placeholder-secondary-500"
              />
            </div>
            <button 
              type="submit"
              class="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              <i class="pi pi-send"></i>
              <span>Subscribe</span>
            </button>
          </form>

          <!-- Trust Badge -->
          <div class="mt-6 flex items-center gap-2 text-sm">
            <i class="pi pi-shield text-green-500"></i>
            <span class="text-secondary-400">100% Privacy. No spam.</span>
          </div>
        </div>

      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-secondary-800"></div>

    <!-- Bottom Footer -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        
        <!-- Copyright -->
        <div class="text-secondary-400 text-sm text-center md:text-left">
          © {{ currentYear }} <span class="font-bold text-white">BoltWeb</span>. All rights reserved. 
          <span class="hidden sm:inline">Made with</span>
          <i class="pi pi-heart-fill text-red-500 mx-1"></i>
          <span class="hidden sm:inline">in Ghana</span>
        </div>

        <!-- Legal Links -->
        <div class="flex gap-6 text-sm">
          <a href="#" class="text-secondary-400 hover:text-accent-500 transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="#" class="text-secondary-400 hover:text-accent-500 transition-colors duration-200">
            Terms of Service
          </a>
          <a href="#" class="text-secondary-400 hover:text-accent-500 transition-colors duration-200">
            Sitemap
          </a>
        </div>

      </div>
    </div>

  </footer>
</template>