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

const stats = [
  { number: '2024', label: 'Founded' },
  { number: '20+', label: 'Projects' },
  { number: '15+', label: 'Clients' },
  { number: '7-14', label: 'Days' }
]

const values = [
  {
    icon: 'pi-bolt',
    title: 'Lightning Fast',
    description: 'Websites delivered in 7-14 days, not months'
  },
  {
    icon: 'pi-shield',
    title: 'Quality First',
    description: 'Every site is built to perform and last'
  },
  {
    icon: 'pi-users',
    title: 'Always Here',
    description: 'Support that doesn\'t disappear after launch'
  },
  {
    icon: 'pi-heart',
    title: 'Client Love',
    description: 'Your success is our success'
  }
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
      class="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] overflow-y-auto"
      @click.self="closeModal"
    >
      <!-- Modal Container - Mobile optimized -->
      <div class="min-h-screen px-4 py-8 sm:py-12 flex items-start sm:items-center justify-center">
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="scale-95 opacity-0 translate-y-4"
          enter-to-class="scale-100 opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="scale-100 opacity-100 translate-y-0"
          leave-to-class="scale-95 opacity-0 translate-y-4"
        >
          <div
            v-if="show"
            class="bg-white rounded-3xl shadow-2xl w-full max-w-3xl relative"
            @click.stop
          >
            <!-- Close Button - Sticky on mobile -->
            <div class="sticky top-0 z-20 bg-white rounded-t-3xl pt-6 px-6 pb-4 border-b border-secondary-100">
              <button
                @click="closeModal"
                class="ml-auto flex items-center justify-center w-10 h-10 bg-secondary-100 hover:bg-secondary-200 rounded-full text-secondary-600 hover:text-secondary-900 transition-all duration-200"
                aria-label="Close modal"
              >
                <i class="pi pi-times text-lg"></i>
              </button>
            </div>

            <!-- Scrollable Content -->
            <div class="px-6 sm:px-10 pb-10">
              
              <!-- Header -->
              <div class="text-center mb-8">
                <div class="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  <i class="pi pi-info-circle"></i>
                  <span>About BoltWeb</span>
                </div>
                
                <h2 class="text-3xl sm:text-4xl font-black text-secondary-900 mb-3">
                  We Build Websites That
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500"> Actually Work</span>
                </h2>
                
                <p class="text-base sm:text-lg text-secondary-600 leading-relaxed">
                  Helping Ghanaian businesses succeed online with fast, professional websites since 2024.
                </p>
              </div>

              <!-- Stats - Mobile optimized -->
              <div class="grid grid-cols-4 gap-3 sm:gap-4 mb-8">
                <div
                  v-for="stat in stats"
                  :key="stat.label"
                  class="text-center"
                >
                  <div class="text-2xl sm:text-3xl font-black text-primary-600 mb-1">{{ stat.number }}</div>
                  <div class="text-xs sm:text-sm text-secondary-600 font-medium">{{ stat.label }}</div>
                </div>
              </div>

              <!-- Story -->
              <div class="mb-8">
                <h3 class="text-xl sm:text-2xl font-bold text-secondary-900 mb-4">Our Story</h3>
                <div class="space-y-3 text-secondary-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    We started BoltWeb because we saw too many Ghanaian businesses struggling with expensive, slow, and complicated website services. We knew there had to be a better way.
                  </p>
                  <p>
                    Today, we've built 20+ websites for businesses across Ghana. Our secret? We keep things simple, work fast, and always put our clients first.
                  </p>
                  <p>
                    Every website we build is mobile-responsive, SEO-optimized, and delivered in 7-14 days. No delays. No excuses. Just results.
                  </p>
                </div>
              </div>

              <!-- Values - Compact on mobile -->
              <div class="mb-8">
                <h3 class="text-xl sm:text-2xl font-bold text-secondary-900 mb-4">What We Stand For</h3>
                <div class="space-y-3">
                  <div
                    v-for="value in values"
                    :key="value.title"
                    class="flex items-start gap-4 p-4 bg-secondary-50 rounded-xl border border-secondary-100"
                  >
                    <div class="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                      <i :class="['pi text-white text-lg', value.icon]"></i>
                    </div>
                    <div class="flex-1 min-w-0">
                      <h4 class="text-base sm:text-lg font-bold text-secondary-900 mb-1">{{ value.title }}</h4>
                      <p class="text-secondary-600 text-sm leading-relaxed">{{ value.description }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- CTA - Stack on mobile -->
              <div class="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-6 sm:p-8 text-center">
                <h3 class="text-xl sm:text-2xl font-bold text-white mb-3">
                  Ready to Get Started?
                </h3>
                <p class="text-primary-100 mb-6 text-sm sm:text-base">
                  Let's build something amazing together
                </p>
                <div class="flex flex-col gap-3">
                  <button 
                    @click="closeModal"
                    class="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <i class="pi pi-bolt"></i>
                    <span>Get Free Quote</span>
                  </button>
                  <button 
                    @click="closeModal"
                    class="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 font-bold px-6 py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <i class="pi pi-phone"></i>
                    <span>Contact Us</span>
                  </button>
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
}
</style>