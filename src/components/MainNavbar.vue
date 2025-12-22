<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const navigateTo = (path) => {
  router.push(path)
  closeMenu()
}

// Add scroll effect
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20
  })
}
</script>

<template>
  <nav 
    :class="[
      'sticky top-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        
        <!-- Logo with Animation -->
        <div class="flex-shrink-0 flex items-center cursor-pointer group" @click="navigateTo('/')">
          <div class="relative">
            <!-- <div class="w-12 h-12 bg-gradient-to-br from-accent-400 via-accent-500 to-accent-600 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
              <i class="pi pi-bolt text-white text-2xl"></i>
            </div> -->
            <img
          src="/images/boltweb_logo.png"
          alt="DeleAI Logo"
          class="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
       
        />
            <div class="absolute -top-1 -right-1 w-3 h-3 bg-primary-600 rounded-full animate-pulse"></div>
          </div>
          <div class="ml-3">
            <span class="text-3xl font-black text-secondary-800 tracking-tight">
              Bolt<span class="text-accent-500">Web</span>
            </span>
            <div class="text-xs text-secondary-500 font-medium -mt-1">Lightning Fast Websites</div>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-1">
          <a href="/" class="group px-4 py-2 rounded-lg text-secondary-700 hover:text-primary-600 hover:bg-primary-50 font-semibold transition-all duration-200 flex items-center gap-2">
            <i class="pi pi-home text-lg group-hover:scale-110 transition-transform"></i>
            Home
          </a>
          <a href="/services" class="group px-4 py-2 rounded-lg text-secondary-700 hover:text-primary-600 hover:bg-primary-50 font-semibold transition-all duration-200 flex items-center gap-2">
            <i class="pi pi-wrench text-lg group-hover:scale-110 transition-transform"></i>
            Services
          </a>
          <a href="#portfolio" class="group px-4 py-2 rounded-lg text-secondary-700 hover:text-primary-600 hover:bg-primary-50 font-semibold transition-all duration-200 flex items-center gap-2">
            <i class="pi pi-images text-lg group-hover:scale-110 transition-transform"></i>
            Portfolio
          </a>
          <a href="#pricing" class="group px-4 py-2 rounded-lg text-secondary-700 hover:text-primary-600 hover:bg-primary-50 font-semibold transition-all duration-200 flex items-center gap-2">
            <i class="pi pi-tag text-lg group-hover:scale-110 transition-transform"></i>
            Pricing
          </a>
          <a href="#about" class="group px-4 py-2 rounded-lg text-secondary-700 hover:text-primary-600 hover:bg-primary-50 font-semibold transition-all duration-200 flex items-center gap-2">
            <i class="pi pi-info-circle text-lg group-hover:scale-110 transition-transform"></i>
            About
          </a>
          <a href="#contact" class="group px-4 py-2 rounded-lg text-secondary-700 hover:text-primary-600 hover:bg-primary-50 font-semibold transition-all duration-200 flex items-center gap-2">
            <i class="pi pi-envelope text-lg group-hover:scale-110 transition-transform"></i>
            Contact
          </a>
        </div>

        <!-- CTA Button (Desktop) -->
        <div class="hidden lg:flex items-center gap-3">
          <button class="group relative overflow-hidden bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2">
            <i class="pi pi-bolt text-lg"></i>
            <span>Get Free Quote</span>
            <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>

        <!-- Modern Mobile Menu Button (Panel Style) -->
        <div class="lg:hidden">
          <button 
            @click="toggleMenu"
            class="relative w-12 h-12 rounded-xl bg-primary-50 text-primary-600 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200 flex items-center justify-center group"
          >
            <!-- Panel Icon (Closed State) -->
            <div 
              :class="[
                'absolute transition-all duration-300',
                isMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
              ]"
            >
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="9" y1="3" x2="9" y2="21" />
              </svg>
            </div>
            
            <!-- X Icon (Open State) -->
            <div 
              :class="[
                'absolute transition-all duration-300',
                isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
              ]"
            >
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu with Icons -->
    <div 
      :class="[
        'lg:hidden transition-all duration-300 overflow-hidden',
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      ]"
    >
      <div class="bg-gradient-to-b from-secondary-50 to-white border-t border-secondary-200 px-4 py-6 space-y-2">
        <a 
          href="#home" 
          @click="closeMenu"
          class="group flex items-center gap-3 px-4 py-3.5 rounded-xl text-secondary-700 hover:bg-primary-600 hover:text-white font-semibold transition-all duration-200 transform hover:translate-x-2"
        >
          <div class="w-10 h-10 rounded-lg bg-primary-50 group-hover:bg-white/20 flex items-center justify-center transition-colors">
            <i class="pi pi-home text-xl text-primary-600 group-hover:text-white"></i>
          </div>
          <span>Home</span>
        </a>
        
        <a 
          href="#services" 
          @click="closeMenu"
          class="group flex items-center gap-3 px-4 py-3.5 rounded-xl text-secondary-700 hover:bg-primary-600 hover:text-white font-semibold transition-all duration-200 transform hover:translate-x-2"
        >
          <div class="w-10 h-10 rounded-lg bg-primary-50 group-hover:bg-white/20 flex items-center justify-center transition-colors">
            <i class="pi pi-wrench text-xl text-primary-600 group-hover:text-white"></i>
          </div>
          <span>Services</span>
        </a>
        
        <a 
          href="#portfolio" 
          @click="closeMenu"
          class="group flex items-center gap-3 px-4 py-3.5 rounded-xl text-secondary-700 hover:bg-primary-600 hover:text-white font-semibold transition-all duration-200 transform hover:translate-x-2"
        >
          <div class="w-10 h-10 rounded-lg bg-primary-50 group-hover:bg-white/20 flex items-center justify-center transition-colors">
            <i class="pi pi-images text-xl text-primary-600 group-hover:text-white"></i>
          </div>
          <span>Portfolio</span>
        </a>
        
        <a 
          href="#pricing" 
          @click="closeMenu"
          class="group flex items-center gap-3 px-4 py-3.5 rounded-xl text-secondary-700 hover:bg-primary-600 hover:text-white font-semibold transition-all duration-200 transform hover:translate-x-2"
        >
          <div class="w-10 h-10 rounded-lg bg-primary-50 group-hover:bg-white/20 flex items-center justify-center transition-colors">
            <i class="pi pi-tag text-xl text-primary-600 group-hover:text-white"></i>
          </div>
          <span>Pricing</span>
        </a>
        
        <a 
          href="#about" 
          @click="closeMenu"
          class="group flex items-center gap-3 px-4 py-3.5 rounded-xl text-secondary-700 hover:bg-primary-600 hover:text-white font-semibold transition-all duration-200 transform hover:translate-x-2"
        >
          <div class="w-10 h-10 rounded-lg bg-primary-50 group-hover:bg-white/20 flex items-center justify-center transition-colors">
            <i class="pi pi-info-circle text-xl text-primary-600 group-hover:text-white"></i>
          </div>
          <span>About</span>
        </a>
        
        <a 
          href="#contact" 
          @click="closeMenu"
          class="group flex items-center gap-3 px-4 py-3.5 rounded-xl text-secondary-700 hover:bg-primary-600 hover:text-white font-semibold transition-all duration-200 transform hover:translate-x-2"
        >
          <div class="w-10 h-10 rounded-lg bg-primary-50 group-hover:bg-white/20 flex items-center justify-center transition-colors">
            <i class="pi pi-envelope text-xl text-primary-600 group-hover:text-white"></i>
          </div>
          <span>Contact</span>
        </a>
        
        <!-- Mobile CTA Button -->
        <div class="pt-4">
          <button class="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold px-6 py-4 rounded-xl transition-all duration-200 shadow-lg flex items-center justify-center gap-2">
            <i class="pi pi-bolt text-xl"></i>
            <span>Get Free Quote</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>