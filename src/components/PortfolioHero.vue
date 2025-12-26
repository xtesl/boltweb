<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80',
    badge: 'AI AGENTS',
    title: 'DeleAI',
    subtitle: 'AI Agent Platform',
    description: 'Building intelligent AI agents that automate workflows and boost productivity',
    tilt: '-1.5deg'
  },
  {
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80',
    badge: 'SOCIAL COMMERCE',
    title: 'Tendo',
    subtitle: 'Ghana Social Commerce',
    description: 'Empowering African entrepreneurs with social commerce tools and logistics',
    tilt: '2deg'
  },
  {
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=80',
    badge: 'E-COMMERCE',
    title: 'Hubtel',
    subtitle: 'Ghana Fintech & Commerce',
    description: 'Digital payment solutions and e-commerce platform for African businesses',
    tilt: '-2deg'
  },
  {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80',
    badge: 'REVIEWS & MARKETING',
    title: 'Kudobuzz',
    subtitle: 'Ghana Marketing SaaS',
    description: 'Helping African SMEs generate reviews and drive sales through social proof',
    tilt: '1.5deg'
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80',
    badge: 'B2B MARKETPLACE',
    title: 'Cokodeal',
    subtitle: 'Pan-African B2B',
    description: 'Connecting African traders globally with digital storefronts and export solutions',
    tilt: '-1deg'
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
    badge: 'RETAIL TECH',
    title: 'Shopa',
    subtitle: 'Ghana Retail Solutions',
    description: 'Supply chain platform helping retailers order and receive supplies in 24 hours',
    tilt: '2.5deg'
  }
]

const currentSlide = ref(0)
let intervalId = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.length
}

onMounted(() => {
  intervalId = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Slides -->
    <TransitionGroup name="slide">
      <div
        v-for="(slide, index) in heroSlides"
        v-show="currentSlide === index"
        :key="index"
        class="absolute inset-0"
      >
        <!-- Image -->
        <img 
          :src="slide.image" 
          :alt="slide.title"
          class="w-full h-full object-cover"
        />
        
        <!-- Dark overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/75"></div>
        
        <!-- Animated glow -->
        <div class="absolute inset-0">
          <div class="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
          <div class="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style="animation-delay: 2s;"></div>
        </div>

        <!-- Content ON the image -->
        <div class="absolute inset-0 flex items-center justify-center px-6 sm:px-8 lg:px-12">
          <div 
            class="max-w-6xl w-full text-center slide-content"
            :style="{ transform: `rotate(${slide.tilt})` }"
          >
           
            
            
            <!-- Title -->
            <h1 class="text-8xl sm:text-9xl lg:text-[12rem] font-black text-white mb-6 leading-[0.85] tracking-tighter">
              {{ slide.title }}
            </h1>
            
            <!-- Subtitle -->
            <p class="text-3xl sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 font-bold mb-8">
              {{ slide.subtitle }}
            </p>
            
            <!-- Description -->
            <p class="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto mb-12 font-light">
              {{ slide.description }}
            </p>

           
          </div>
        </div>
      </div>
    </TransitionGroup>

    <!-- Navigation Dots -->
    <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
      <button
        v-for="(slide, index) in heroSlides"
        :key="index"
        @click="currentSlide = index"
        :class="[
          'w-3 h-3 rounded-full transition-all duration-300',
          currentSlide === index 
            ? 'bg-white w-12' 
            : 'bg-white/30 hover:bg-white/50'
        ]"
      ></button>
    </div>
  </section>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from {
  opacity: 0;
  transform: scale(1.1);
}

.slide-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.slide-content {
  animation: slideContentIn 1s ease-out;
}

@keyframes slideContentIn {
  from {
    opacity: 0;
    transform: translateY(30px) rotate(0deg);
  }
  to {
    opacity: 1;
  }
}
</style>