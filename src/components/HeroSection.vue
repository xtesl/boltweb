<script setup>
import { ref, onMounted } from 'vue'

const typedText = ref('')
const words = ['professional', 'stunning', 'modern', 'impactful']
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
</script>

<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
    
    <!-- Geometric Background Shapes -->
    <div class="absolute inset-0 opacity-[0.03]">
      <svg class="absolute top-20 left-10 w-96 h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#2563eb" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,40.4,76.8C27,84.6,11.2,87.6,-4.3,85.6C-19.8,83.6,-35.1,76.6,-48.3,67.8C-61.5,59,-72.6,48.4,-79.8,35.3C-87,22.2,-90.3,6.6,-88.7,-8.5C-87.1,-23.6,-80.6,-38.2,-71.3,-51.3C-62,-64.4,-50,-76,-36.3,-82.6C-22.6,-89.2,-7.3,-90.8,6.5,-89.8C20.3,-88.8,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
      </svg>
      
      <svg class="absolute bottom-10 right-20 w-80 h-80" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#f59e0b" d="M39.5,-65.5C51.4,-58.2,61.3,-47.3,68.4,-34.8C75.5,-22.3,79.8,-8.2,79.9,6C80,20.2,75.9,34.5,68.3,46.8C60.7,59.1,49.6,69.4,36.8,75.8C24,82.2,9.5,84.7,-4.8,82.9C-19.1,81.1,-33.2,75,-45.8,66.8C-58.4,58.6,-69.5,48.3,-76.3,35.5C-83.1,22.7,-85.6,7.4,-83.8,-7.1C-82,-21.6,-75.9,-35.3,-66.8,-46.8C-57.7,-58.3,-45.6,-67.6,-32.5,-74.3C-19.4,-81,-6.5,-85.1,5.7,-84.3C17.9,-83.5,27.6,-72.8,39.5,-65.5Z" transform="translate(100 100)" />
      </svg>
    </div>
    
    <!-- Mesh Gradient Background with Reflection Effect -->
    <div class="absolute inset-0 opacity-[0.15]">
      <div class="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary-300 via-primary-200 to-transparent rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-accent-300 via-accent-200 to-transparent rounded-full blur-3xl"></div>
      <div class="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-gradient-to-br from-blue-200 via-blue-100 to-transparent rounded-full blur-3xl animate-float"></div>
    </div>
    
    <!-- Glass Reflection Effect -->
    <div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        
        <!-- Left Content -->
        <div class="text-left space-y-8">
          
          <!-- Main Headline -->
          <div class="space-y-6">
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black text-secondary-900 leading-tight">
              We create
              <br />
              <span class="relative inline-block">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                  {{ typedText }}
                </span>
                <span class="inline-block w-1 h-14 lg:h-16 bg-accent-500 ml-1 animate-pulse"></span>
              </span>
              <br />
              websites
            </h1>

            <p class="text-xl lg:text-2xl text-secondary-600 leading-relaxed max-w-xl">
              Transform your business online with websites that drive real results. Built for Ghana, designed for growth.
            </p>
          </div>

          <!-- Single CTA Button -->
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold text-lg rounded-2xl shadow hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <span>Start your project</span>
              
            </button>

            <router-link 
            :to="'/portfolio'"
            class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-secondary-300 hover:border-primary-500 text-secondary-800 hover:text-primary-600 font-semibold text-lg rounded-2xl transition-all duration-300 hover:shadow-lg">
              <span>View our work</span>
            </router-link>
          </div>

          <!-- Trust Indicators - Simple -->
          <div class="flex items-center gap-8 pt-4">
            <div class="flex items-center gap-2 text-secondary-900">
              <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="font-bold">Fast delivery</span>
            </div>
            <div class="flex items-center gap-2 text-secondary-900">
              <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="font-bold">Transparent pricing</span>
            </div>
          </div>

        </div>

        <!-- Right Visual - Pixelated Mosaic Pattern (Desktop) -->
        <div class="relative hidden lg:block h-[600px]">
          <div class="grid grid-cols-12 grid-rows-12 gap-2 h-full w-full max-w-lg ml-auto">
            <!-- Top Right Cluster -->
            <div class="col-start-9 col-span-4 row-start-1 row-span-3 bg-primary-500 rounded-lg "></div>
            <div class="col-start-9 col-span-2 row-start-4 row-span-1 bg-primary-600 rounded"></div>
            <div class="col-start-11 col-span-2 row-start-4 row-span-2 bg-accent-400 rounded"></div>
            <div class="col-start-10 col-span-3 row-start-6 row-span-1 bg-primary-400 rounded"></div>
            
            <!-- Middle Section -->
            <div class="col-start-7 col-span-3 row-start-5 row-span-4 bg-accent-500 rounded-lg "></div>
            <div class="col-start-10 col-span-2 row-start-7 row-span-2 bg-accent-600 rounded"></div>
            <div class="col-start-7 col-span-2 row-start-9 row-span-1 bg-primary-300 rounded"></div>
            <div class="col-start-9 col-span-1 row-start-9 row-span-2 bg-accent-400 rounded"></div>
            
            <!-- Bottom Right Cluster -->
            <div class="col-start-6 col-span-4 row-start-10 row-span-3 bg-primary-600 rounded-lg "></div>
            <div class="col-start-10 col-span-3 row-start-11 row-span-2 bg-accent-500 rounded-lg"></div>
            <div class="col-start-10 col-span-2 row-start-10 row-span-1 bg-primary-400 rounded"></div>
            
            <!-- Left Side Accents -->
            <div class="col-start-2 col-span-2 row-start-3 row-span-2 bg-accent-300 rounded"></div>
            <div class="col-start-4 col-span-1 row-start-4 row-span-3 bg-primary-400 rounded"></div>
            <div class="col-start-1 col-span-3 row-start-6 row-span-2 bg-primary-500 rounded-lg shadow-md"></div>
            <div class="col-start-3 col-span-2 row-start-8 row-span-1 bg-accent-400 rounded"></div>
            
            <!-- Middle Left -->
            <div class="col-start-1 col-span-2 row-start-9 row-span-3 bg-accent-500 rounded-lg"></div>
            <div class="col-start-3 col-span-3 row-start-10 row-span-2 bg-primary-600 rounded-lg"></div>
            <div class="col-start-4 col-span-1 row-start-9 row-span-1 bg-primary-300 rounded"></div>
            
            <!-- Scattered Small Squares -->
            <div class="col-start-6 col-span-1 row-start-2 row-span-1 bg-accent-400 rounded"></div>
            <div class="col-start-8 col-span-1 row-start-3 row-span-1 bg-primary-400 rounded"></div>
            <div class="col-start-5 col-span-1 row-start-7 row-span-1 bg-accent-300 rounded"></div>
            <div class="col-start-11 col-span-1 row-start-8 row-span-1 bg-primary-500 rounded"></div>
            
            <!-- Top Left Corner -->
            <div class="col-start-1 col-span-3 row-start-1 row-span-2 bg-primary-400 rounded-lg"></div>
            <div class="col-start-4 col-span-2 row-start-1 row-span-1 bg-accent-400 rounded"></div>
          </div>
        </div>

        <!-- Mobile Visual - Simplified Dotted Grid Pattern -->
        <div class="lg:hidden mt-12">
          <div class="grid grid-cols-8 grid-rows-8 gap-3 h-80 w-full">
            <!-- Random pattern using your colors -->
            <div class="col-start-1 col-span-2 row-start-1 row-span-2 bg-primary-500 rounded-lg"></div>
            <div class="col-start-3 col-span-1 row-start-2 row-span-1 bg-accent-400 rounded"></div>
            <div class="col-start-5 col-span-2 row-start-1 row-span-1 bg-primary-400 rounded"></div>
            <div class="col-start-7 col-span-2 row-start-2 row-span-2 bg-accent-500 rounded-lg"></div>
            
            <div class="col-start-2 col-span-1 row-start-3 row-span-1 bg-primary-300 rounded"></div>
            <div class="col-start-4 col-span-2 row-start-3 row-span-2 bg-accent-600 rounded-lg"></div>
            <div class="col-start-6 col-span-1 row-start-4 row-span-1 bg-primary-500 rounded"></div>
            
            <div class="col-start-1 col-span-1 row-start-4 row-span-2 bg-accent-400 rounded"></div>
            <div class="col-start-7 col-span-2 row-start-5 row-span-2 bg-primary-600 rounded-lg"></div>
            
            <div class="col-start-2 col-span-3 row-start-6 row-span-2 bg-primary-500 rounded-lg"></div>
            <div class="col-start-5 col-span-1 row-start-6 row-span-1 bg-accent-300 rounded"></div>
            <div class="col-start-6 col-span-2 row-start-7 row-span-2 bg-accent-500 rounded-lg"></div>
            
            <div class="col-start-1 col-span-2 row-start-8 row-span-1 bg-accent-400 rounded"></div>
            <div class="col-start-4 col-span-1 row-start-8 row-span-1 bg-primary-400 rounded"></div>
            <div class="col-start-8 col-span-1 row-start-8 row-span-1 bg-primary-500 rounded"></div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Floating animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>