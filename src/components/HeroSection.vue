<script setup>
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const typedText = ref('')

// Make words reactive to language changes
const words = computed(() => [
  t('hero.words.professional'),
  t('hero.words.stunning'),
  t('hero.words.modern'),
  t('hero.words.impactful')
])

let wordIndex = 0
let charIndex = 0
let isDeleting = false

onMounted(() => {
  typeEffect()
})

const typeEffect = () => {
  const currentWord = words.value[wordIndex]
  
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
    wordIndex = (wordIndex + 1) % words.value.length
  }
  
  const speed = isDeleting ? 50 : 100
  setTimeout(typeEffect, speed)
}
</script>

<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
    
    <!-- Subtle Grid Pattern Background -->
    <div class="absolute inset-0 opacity-[0.03]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" stroke-width="0.5" class="text-slate-900"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <!-- Animated Gradient Orbs - Subtle -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div class="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-amber-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
    </div>

    <!-- Floating Geometric Shapes -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Top Left Square -->
      <div class="absolute top-20 left-10 w-20 h-20 border-2 border-blue-200/40 rounded-lg rotate-12 animate-float"></div>
      
      <!-- Top Right Circle -->
      <div class="absolute top-32 right-20 w-16 h-16 border-2 border-amber-200/40 rounded-full animate-float-delayed"></div>
      
      <!-- Bottom Right Triangle -->
      <div class="absolute bottom-40 right-40 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-blue-200/30 animate-float"></div>
      
      <!-- Bottom Left Diamond -->
      <div class="absolute bottom-20 left-32 w-12 h-12 border-2 border-purple-200/40 rotate-45 animate-float-delayed"></div>
    </div>

    <!-- Subtle Dot Pattern -->
    <div class="absolute inset-0 opacity-[0.015]">
      <svg width="100%" height="100%">
        <defs>
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="currentColor" class="text-slate-900"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)"/>
      </svg>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        
        <!-- Left Content -->
        <div class="text-left space-y-8">
          
          <!-- Main Headline -->
          <div class="space-y-6">
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-tight">
              We create
              <br />
              <span class="relative inline-block">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
                  {{ typedText }}
                </span>
                <span class="inline-block w-1 h-14 lg:h-16 bg-amber-500 ml-1 animate-pulse"></span>
              </span>
              <br />
              websites
            </h1>

            <p class="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-xl">
              Transform your business online with websites that drive real results. Built for Ghana, designed for growth.
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg rounded-2xl shadow hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <span>Start your project</span>
              <!-- <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg> -->
            </button>

            <button class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-slate-300 hover:border-blue-500 text-slate-800 hover:text-blue-600 font-semibold text-lg rounded-2xl transition-all duration-300 shadow hover:shadow-lg">
              <span>View our work</span>
            </button>
          </div>

          <!-- Trust Indicators -->
          <div class="flex items-center gap-8 pt-4">
            <div class="flex items-center gap-2 text-slate-600">
              <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="font-semibold">Fast delivery</span>
            </div>
            <div class="flex items-center gap-2 text-slate-600">
              <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="font-semibold">Transparent pricing</span>
            </div>
          </div>

        </div>

        <!-- Right Visual - Bento Grid Style Cards -->
        <div class="relative hidden lg:block">
          <div class="grid grid-cols-2 gap-4 h-[600px]">
            
            <!-- Top Left Card -->
            <div class="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-slate-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div class="space-y-3">
                <div class="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center shadow-sm">
                  <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-slate-900">{{ t('hero.packages.starter') }}</h3>
                <p class="text-slate-600 text-sm leading-relaxed">{{ t('hero.packages.starterDesc') }}</p>
                <div class="pt-1">
                  <span class="text-slate-500 text-xs mr-1">{{ t('hero.packages.from') }}</span>
                  <span class="text-2xl font-black text-blue-600">GH₵2,500</span>
                </div>
              </div>
            </div>

            <!-- Top Right Card - Tall -->
            <div class="relative row-span-2 bg-gradient-to-br from-white/90 via-blue-50/40 to-white/90 backdrop-blur-md rounded-3xl p-6 border-2 border-blue-200/50 hover:shadow-xl transition-all duration-300">
              <div class="absolute -top-3 -right-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                {{ t('hero.packages.popular') }}
              </div>
              <div class="space-y-4 h-full flex flex-col justify-between">
                <div>
                  <div class="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center shadow-sm mb-4">
                    <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  <h3 class="text-2xl font-bold text-slate-900 mb-2">{{ t('hero.packages.business') }}</h3>
                  <p class="text-slate-600 leading-relaxed mb-4">{{ t('hero.packages.businessDesc') }}</p>
                </div>
                <div>
                  <span class="text-slate-500 text-sm mr-2">{{ t('hero.packages.startingFrom') }}</span>
                  <span class="text-3xl font-black text-blue-600">GH₵4,500</span>
                </div>
              </div>
            </div>

            <!-- Bottom Left Card -->
            <div class="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-slate-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div class="space-y-3">
                <div class="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl flex items-center justify-center shadow">
                  <svg class="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-slate-900">{{ t('hero.packages.ecommerce') }}</h3>
                <p class="text-slate-600 text-sm leading-relaxed">{{ t('hero.packages.ecommerceDesc') }}</p>
                <div class="pt-1">
                  <span class="text-slate-500 text-xs mr-1">{{ t('hero.packages.from') }}</span>
                  <span class="text-2xl font-black text-blue-600">GH₵6,000</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Mobile Card View -->
        <div class="lg:hidden">
          <div class="bg-gradient-to-br from-white/90 via-blue-50/30 to-white/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-blue-200/50">
            <div class="flex items-center justify-between mb-4">
              <div class="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center p-3 shadow">
                <svg class="w-full h-full text-emerald-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              </div>
              <span class="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                {{ t('hero.packages.popular') }}
              </span>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">{{ t('hero.packages.starter') }}</h3>
            <p class="text-slate-600 mb-4 leading-relaxed">{{ t('hero.packages.starterDesc') }}</p>
            <div>
              <span class="text-slate-500 text-sm mr-2">{{ t('hero.packages.startingFrom') }}</span>
              <span class="text-4xl font-black text-blue-600">GH₵2,500</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
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

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

.animate-blob {
  animation: blob 15s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 8s ease-in-out infinite;
  animation-delay: 1s;
}
</style>