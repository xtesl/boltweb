<script setup>
import { ref, onMounted } from 'vue'

const typedText = ref('')
const words = ['Websites', 'Success', 'Results', 'Growth']
let wordIndex = 0
let charIndex = 0
let isDeleting = false

onMounted(() => {
  typeEffect()
})

const typeEffect = () => {
  const currentWord = words[wordIndex]
  
  if (isDeleting) {
    typedText.value = currentWord.substring(0, charIndex - 1)
    charIndex--
  } else {
    typedText.value = currentWord.substring(0, charIndex + 1)
    charIndex++
  }
  
  if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => isDeleting = true, 2000)
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    wordIndex = (wordIndex + 1) % words.length
  }
  
  const speed = isDeleting ? 50 : 100
  setTimeout(typeEffect, speed)
}

const features = [
  { icon: 'pi-bolt', text: '7-14 Days Delivery' },
  { icon: 'pi-shield', text: '100% Guarantee' },
  { icon: 'pi-mobile', text: 'Mobile Money' }
]
</script>

<template>
  <section class="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-secondary-50 to-primary-50">
    
    <!-- Animated Mesh Gradient Background -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-0 -left-4 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div class="absolute top-0 -right-4 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-20 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
    </div>

    <!-- Dot Pattern Overlay -->
    <div class="absolute inset-0 bg-dot-pattern opacity-20"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        
        <!-- Left Content -->
        <div class="text-left">
          
          <!-- Launch Badge -->
          <div class="inline-flex items-center gap-2 bg-gradient-to-r from-accent-100 to-primary-100 border border-accent-200 text-accent-700 px-4 py-2 
          rounded-md text-sm font-bold mb-6">
            <i class="pi pi-sparkles"></i>
            <span>New Launch • Special Offer Inside</span>
          </div>

          <!-- Main Headline with Typing Effect -->
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black text-secondary-900 mb-6 leading-tight">
            Build Fast.
            <br />
            Launch <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">{{ typedText }}</span>
            <span class="inline-block w-1 h-16 bg-accent-500 ml-1 animate-pulse"></span>
          </h1>

          <!-- Subheading -->
          <p class="text-xl text-secondary-600 mb-8 leading-relaxed max-w-xl">
            Professional websites for Ghanaian businesses delivered in <span class="font-bold text-primary-600">7-14 days</span>. No hidden fees. No hassle. Just results.
          </p>

          <!-- Feature Pills -->
          <div class="flex flex-wrap gap-3 mb-8">
            <div 
              v-for="feature in features" 
              :key="feature.text"
              class="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded text-sm font-semibold text-secondary-700 border border-secondary-200"
            >
              <i :class="['pi text-primary-600', feature.icon]"></i>
              <span>{{ feature.text }}</span>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <button class="group relative overflow-hidden bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-2">
              <i class="pi pi-bolt text-xl"></i>
              <span>Get Your Free Quote</span>
              <i class="pi pi-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </button>
            
            <button class="bg-white hover:bg-secondary-50 text-secondary-800 font-bold px-8 py-4 rounded-xl transition-all duration-300 border-2 border-secondary-200 hover:border-primary-300 flex items-center justify-center gap-2 shadow hover:shadow-lg">
              <i class="pi pi-whatsapp text-green-600 text-xl"></i>
              <span>WhatsApp Us</span>
            </button>
          </div>

          <!-- Trust Bar -->
          <div class="flex items-center gap-8 text-sm text-secondary-600">
            <div class="flex items-center gap-2">
              <div class="flex -space-x-2">
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white"></div>
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 border-2 border-white"></div>
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 border-2 border-white"></div>
              </div>
              <span class="font-semibold">Join 20+ businesses</span>
            </div>
            <div class="flex items-center gap-1">
              <i class="pi pi-star-fill text-accent-500"></i>
              <i class="pi pi-star-fill text-accent-500"></i>
              <i class="pi pi-star-fill text-accent-500"></i>
              <i class="pi pi-star-fill text-accent-500"></i>
              <i class="pi pi-star-fill text-accent-500"></i>
              <span class="ml-1 font-semibold">5.0 Rating</span>
            </div>
          </div>

        </div>

        <!-- Right Visual -->
        <div class="relative hidden lg:block">
          <!-- Floating Cards Stack -->
          <div class="relative h-[600px]">
            
            <!-- Card 3 (Back) -->
            <div class="absolute top-20 right-0 w-80 bg-white rounded-2xl shadow-2xl p-6 transform rotate-6 hover:rotate-3 transition-transform duration-500 border border-secondary-100">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center">
                  <i class="pi pi-shopping-cart text-white text-xl"></i>
                </div>
                <div>
                  <h3 class="font-bold text-secondary-900">E-commerce</h3>
                  <p class="text-sm text-secondary-600">From GH₵6,000</p>
                </div>
              </div>
              <div class="space-y-2">
                <div class="flex items-center gap-2 text-sm text-secondary-700">
                  <i class="pi pi-check-circle text-green-600"></i>
                  <span>Payment Integration</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-secondary-700">
                  <i class="pi pi-check-circle text-green-600"></i>
                  <span>Product Management</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-secondary-700">
                  <i class="pi pi-check-circle text-green-600"></i>
                  <span>Mobile Money</span>
                </div>
              </div>
            </div>

            <!-- Card 2 (Middle) -->
            <div class="absolute top-10 right-10 w-80 bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-1 transition-transform duration-500 border border-secondary-100">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                  <i class="pi pi-briefcase text-white text-xl"></i>
                </div>
                <div>
                  <h3 class="font-bold text-secondary-900">Professional</h3>
                  <p class="text-sm text-secondary-600">From GH₵4,500</p>
                </div>
              </div>
              <div class="space-y-2">
                <div class="flex items-center gap-2 text-sm text-secondary-700">
                  <i class="pi pi-check-circle text-green-600"></i>
                  <span>5-8 Pages</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-secondary-700">
                  <i class="pi pi-check-circle text-green-600"></i>
                  <span>SEO Optimized</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-secondary-700">
                  <i class="pi pi-check-circle text-green-600"></i>
                  <span>Free Hosting</span>
                </div>
              </div>
            </div>

            <!-- Card 1 (Front) - Most Popular -->
            <div class="absolute top-0 right-20 w-80 bg-gradient-to-br from-white to-primary-50 rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-500 border-2 border-primary-300">
              <div class="absolute -top-3 -right-3 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center">
                  <i class="pi pi-bolt text-white text-xl"></i>
                </div>
                <div>
                  <h3 class="font-bold text-secondary-900">Starter</h3>
                  <p class="text-sm text-secondary-600">From GH₵2,500</p>
                </div>
              </div>
              <div class="space-y-2">
                <div class="flex items-center gap-2 text-sm text-secondary-700">
                  <i class="pi pi-check-circle text-green-600"></i>
                  <span>1-3 Pages</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-secondary-700">
                  <i class="pi pi-check-circle text-green-600"></i>
                  <span>Mobile Responsive</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-secondary-700">
                  <i class="pi pi-check-circle text-green-600"></i>
                  <span>7-10 Days</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Dot pattern background */
.bg-dot-pattern {
  background-image: radial-gradient(circle, rgb(37 99 235 / 0.15) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Blob animations */
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>