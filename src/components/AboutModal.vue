<!-- AboutModal.vue -->
<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}

// Prevent body scroll when modal is open
watch(() => props.show, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleEscape)
  } else {
    document.body.style.overflow = ''
    document.removeEventListener('keydown', handleEscape)
  }
})

const handleEscape = (e) => {
  if (e.key === 'Escape') {
    closeModal()
  }
}

onUnmounted(() => {
  document.body.style.overflow = ''
  document.removeEventListener('keydown', handleEscape)
})

const values = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>`,
    title: 'Speed & Efficiency',
    description: 'Professional websites delivered in 7-14 days. We value your time and move fast without compromising quality.'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>`,
    title: 'Premium Quality',
    description: 'Every website is crafted with attention to detail, optimized for performance, and built to convert visitors into customers.'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>`,
    title: 'Mobile-First Design',
    description: 'Beautiful, responsive websites that work flawlessly on every device. Your customers deserve the best experience.'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>`,
    title: 'Results-Driven',
    description: 'We focus on what matters: growing your business. SEO-optimized, fast-loading sites that actually generate leads.'
  }
]

const achievements = [
  { number: '20+', label: 'Projects Completed' },
  { number: '15+', label: 'Happy Clients' },
  { number: '7-14', label: 'Days Delivery' },
  { number: '98%', label: 'Satisfaction Rate' }
]
</script>

<template>
  <!-- Modal Overlay -->
  <Transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="show"
      class="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999] overflow-y-auto"
      @click.self="closeModal"
    >
      <!-- Modal Container -->
      <div class="min-h-screen px-4 py-8 sm:py-16 flex items-start sm:items-center justify-center">
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="scale-95 opacity-0 translate-y-8"
          enter-to-class="scale-100 opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="scale-100 opacity-100 translate-y-0"
          leave-to-class="scale-95 opacity-0 translate-y-8"
        >
          <div
            v-if="show"
            class="bg-white rounded-2xl sm:rounded-3xl w-full max-w-4xl relative overflow-hidden"
            @click.stop
          >
            <!-- Header Section -->
            <div class="relative bg-secondary-900 px-6 sm:px-12 pt-8 sm:pt-12 pb-16 sm:pb-20">
              <!-- Close Button -->
              <button
                @click="closeModal"
                class="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center 
                justify-center w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm 
                rounded-full text-white transition-all duration-200 group"
                aria-label="Close modal"
              >
                <i class="pi pi-times text-lg group-hover:rotate-90 transition-transform duration-200"></i>
              </button>

              <!-- Header Content -->
              <div class="relative z-10">
                <h2 class="text-3xl sm:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">
                  Building Digital Excellence<br />
                  For Ghanaian Businesses
                </h2>
                
                <p class="text-lg sm:text-xl text-secondary-300 leading-relaxed max-w-2xl">
                  We transform businesses through exceptional web design and development, delivering professional websites that drive real results.
                </p>
              </div>
            </div>

            <!-- Content Section -->
            <div class="px-6 sm:px-12 py-8 sm:py-12 -mt-8 relative z-20">
              
              <!-- Story Card -->
              <div class="bg-white rounded-2xl p-6 sm:p-8 mb-8 border border-secondary-100">
                <h3 class="text-2xl sm:text-3xl font-bold text-secondary-900 mb-4 sm:mb-6">Our Mission</h3>
                <div class="space-y-4 text-secondary-600 leading-relaxed text-base sm:text-lg">
                  <p>
                    At BoltWeb, we believe every Ghanaian business deserves a world-class online presence. We started this journey after witnessing too many businesses held back by expensive, slow, and overcomplicated web services.
                  </p>
                  <p>
                    Today, we've partnered with 20+ businesses across Ghana, helping them establish powerful digital foundations. We combine speed, quality, and affordability to deliver websites that don't just look good—they perform.
                  </p>
                  <p class="font-semibold text-secondary-800">
                    Every website we create is mobile-responsive, SEO-optimized, and delivered within 7-14 days. No compromises. No delays. Just professional results.
                  </p>
                </div>
              </div>

              <!-- Values Grid -->
              <div class="mb-8">
                <h3 class="text-2xl sm:text-3xl font-bold text-secondary-900 mb-6">Why Choose BoltWeb</h3>
                <div class="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div
                    v-for="value in values"
                    :key="value.title"
                    class="group bg-white hover:bg-gradient-to-br hover:from-primary-50
                     hover:to-accent-50 rounded-xl p-6 border-2 border-secondary-100 hover:border-primary-200 
                     transition-all duration-300 hover:shadow-lg"
                  >
                    <div class="flex items-start gap-4">
                      <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                        <div class="w-8 h-8 text-secondary-700" v-html="value.icon"></div>
                      </div>
                      <div class="flex-1 min-w-0">
                        <h4 class="text-lg font-bold text-secondary-900 mb-2">{{ value.title }}</h4>
                        <p class="text-secondary-600 text-sm leading-relaxed">{{ value.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Achievement Stats -->
              <div class="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-2xl p-6 sm:p-8 border border-secondary-100">
                <h3 class="text-xl sm:text-2xl font-bold text-secondary-900 mb-6 text-center">Our Track Record</h3>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div
                    v-for="achievement in achievements"
                    :key="achievement.label"
                    class="text-center"
                  >
                    <div class="text-3xl sm:text-4xl font-black text-secondary-900 mb-2">
                      {{ achievement.number }}
                    </div>
                    <div class="text-xs sm:text-sm text-secondary-600 font-semibold">
                      {{ achievement.label }}
                    </div>
                  </div>
                </div>
                <div class="mt-6 pt-6 border-t border-secondary-200 text-center">
                  <p class="text-secondary-600 text-sm sm:text-base">
                    <span class="font-semibold text-secondary-800">Trusted by businesses across Ghana</span> to deliver exceptional web solutions that drive growth and success.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </Transition>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Smooth scrolling */
.overflow-y-auto {
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

/* Ensure modal content is visible */
@media (max-width: 640px) {
  .min-h-screen {
    min-height: -webkit-fill-available;
  }
}
</style>