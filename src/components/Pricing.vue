<script setup>
import { ref } from 'vue'

const scrollContainer = ref(null)

const emit = defineEmits(['open-contact'])

const openContact = () => {
   emit('open-contact')
}

const packages = [
  {
    name: 'Starter',
    price: '2,500',
    description: 'Perfect for small businesses just getting online',
    features: [
      '1-3 Pages',
      'Mobile Responsive',
   
      'Contact Form',
      'Social Media Links',
      'Basic SEO Setup',
      '7-10 Days Delivery',
      '2 Revision Rounds'
    ],
    popular: false,
    color: 'primary',
    icon: 'pi-bolt'
  },
  {
    name: 'Professional',
    price: '5,500',
    description: 'For growing businesses that need more',
    features: [
      '5-8 Pages',
      'Custom Design',
      'Blog Section',
      'Advanced SEO',
      'WhatsApp Integration',
      'Google Business Setup',
      '10-14 Days Delivery',
      '3 Revision Rounds',
      '1 Month Free Support'
    ],
    popular: true,
    color: 'accent',
    icon: 'pi-star'
  },
  {
    name: 'E-commerce',
    price: '8,000',
    description: 'Complete online store ready to sell',
    features: [
      '10-20 Pages',
      'Full E-commerce',
      'Mobile Money Integration',
      '50 Product Uploads',
      'Payment Gateway Setup',
      'Inventory Management',
      'Order Tracking',
      '14-21 Days Delivery',
      '4 Revision Rounds',
      '2 Months Support'
    ],
    popular: false,
    color: 'green',
    icon: 'pi-shopping-cart'
  },
  {
    name: 'Custom',
    price: 'Let\'s Talk',
    description: 'Tailored solution for unique needs',
    features: [
      'Unlimited Pages',
      'Custom Features',
      'Advanced Integrations',
      'Membership Portals',
      'Booking Systems',
      'Custom CMS',
      'API Development',
      'Priority Support',
      'Dedicated Manager',
      'Flexible Timeline'
    ],
    popular: false,
    color: 'purple',
    icon: 'pi-cog',
    isCustom: true
  }
]

const colorClasses = {
  primary: {
    bg: 'from-primary-500 to-primary-600',
    border: 'border-primary-300',
    text: 'text-primary-600',
    badge: 'bg-primary-600'
  },
  accent: {
    bg: 'from-accent-400 to-accent-500',
    border: 'border-accent-300',
    text: 'text-accent-600',
    badge: 'bg-accent-500'
  },
  green: {
    bg: 'from-green-500 to-green-600',
    border: 'border-green-300',
    text: 'text-green-600',
    badge: 'bg-green-600'
  },
  purple: {
    bg: 'from-purple-500 to-purple-600',
    border: 'border-purple-300',
    text: 'text-purple-600',
    badge: 'bg-purple-600'
  }
}

const scroll = (direction) => {
  if (scrollContainer.value) {
    const scrollAmount = 350
    scrollContainer.value.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-secondary-50 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      
      <!-- Header -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
          <i class="pi pi-tag"></i>
          <span>Simple, Transparent Pricing</span>
        </div>
        
        <h2 class="text-4xl sm:text-5xl font-black text-secondary-900 mb-4">
          Choose Your Perfect
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500"> Package</span>
        </h2>
        
        <p class="text-xl text-secondary-600 max-w-2xl mx-auto mb-8">
          No hidden fees. No surprises. Just honest pricing for quality websites.
        </p>

        <!-- Scroll Hint (Mobile) -->
        <div class="flex items-center justify-center gap-2 text-sm text-secondary-500 mb-4 sm:hidden">
          <i class="pi pi-arrow-right animate-pulse"></i>
          <span>Swipe to see all packages</span>
        </div>
      </div>

      <!-- Scroll Buttons (Desktop) -->
      <div class="hidden lg:flex justify-end gap-2 mb-4">
        <button
          @click="scroll('left')"
          class="w-10 h-10 rounded-full bg-white border-2 border-secondary-200 hover:border-primary-500 flex items-center justify-center text-secondary-600 hover:text-primary-600 transition-all duration-200 shadow-md"
        >
          <i class="pi pi-chevron-left"></i>
        </button>
        <button
          @click="scroll('right')"
          class="w-10 h-10 rounded-full bg-white border-2 border-secondary-200 hover:border-primary-500 flex items-center justify-center text-secondary-600 hover:text-primary-600 transition-all duration-200 shadow-md"
        >
          <i class="pi pi-chevron-right"></i>
        </button>
      </div>

      <!-- Pricing Cards - Horizontal Scroll -->
      <div
        ref="scrollContainer"
        class="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
        style="-webkit-overflow-scrolling: touch;"
      >
        <div
          v-for="pkg in packages"
          :key="pkg.name"
          class="flex-shrink-0 w-[320px] sm:w-[340px] snap-start"
        >
          <!-- Card -->
          <div
            :class="[
              'relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 h-full flex flex-col',
              pkg.popular 
                ? 'border-accent-500 shadow-2xl transform scale-105' 
                : 'border-secondary-200 hover:border-primary-300 hover:shadow-xl'
            ]"
          >
            <!-- Popular Badge -->
            <div
              v-if="pkg.popular"
              class="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-500 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg"
            >
              MOST POPULAR
            </div>

            <!-- Icon -->
            <div :class="[
              'w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 shadow-lg',
              colorClasses[pkg.color].bg
            ]">
              <i :class="['pi text-white text-2xl', pkg.icon]"></i>
            </div>

            <!-- Package Info -->
            <h3 class="text-2xl font-black text-secondary-900 mb-2">
              {{ pkg.name }}
            </h3>
            
            <p class="text-secondary-600 text-sm mb-6 leading-relaxed">
              {{ pkg.description }}
            </p>

            <!-- Price -->
            <div class="mb-6">
              <div v-if="!pkg.isCustom" class="flex items-baseline gap-2">
                <span class="text-secondary-600 text-lg">GH₵</span>
                <span class="text-5xl font-black text-secondary-900">{{ pkg.price }}</span>
              </div>
              <div v-else class="text-4xl font-black text-secondary-900">
                {{ pkg.price }}
              </div>
              <div class="text-secondary-500 text-sm mt-2">
                {{ pkg.isCustom ? 'Custom quote based on needs' : 'One-time payment' }}
              </div>
            </div>

            <!-- Features -->
            <ul class="space-y-3 mb-8 flex-grow">
              <li
                v-for="feature in pkg.features"
                :key="feature"
                class="flex items-start gap-3 text-secondary-700"
              >
                <i class="pi pi-check-circle text-green-600 mt-0.5 flex-shrink-0"></i>
                <span class="text-sm">{{ feature }}</span>
              </li>
            </ul>

            <!-- CTA Button -->
            <button
             @click="openContact"
              v-if="!pkg.isCustom"
              :class="[
                'w-full font-bold py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg',
                pkg.popular 
                  ? 'bg-accent-500 hover:bg-accent-600 text-white' 
                  : 'bg-secondary-900 hover:bg-secondary-800 text-white'
              ]"
            >
              Get Started
            </button>
            <button
             @click="openContact"
              v-else
              class="w-full font-bold py-4 rounded-xl transition-all duration-200 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom Info -->
      <div class="mt-12 text-center">
        <div class="flex flex-wrap items-center justify-center gap-6 text-sm text-secondary-600 mb-6">
          <div class="flex items-center gap-2">
            <i class="pi pi-check-circle text-green-600"></i>
            <span>No Hidden Fees</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="pi pi-check-circle text-green-600"></i>
            <span>Money Back Guarantee</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="pi pi-check-circle text-green-600"></i>
            <span>Mobile Money Accepted</span>
          </div>
        </div>

        <p class="text-secondary-600 mb-4">
          Not sure which package fits? We're here to help!
        </p>
        <button
         @click="openContact"
         class="text-primary-600 hover:text-primary-700 font-bold inline-flex items-center gap-2 group">
          <span>Chat with us to find your perfect package</span>
          <i class="pi pi-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
        </button>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Hide scrollbar but keep functionality */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Smooth iOS scroll */
.overflow-x-auto {
  -webkit-overflow-scrolling: touch;
}
</style>