<script setup>
import { ref } from 'vue'

const emit = defineEmits(['open-contact'])

const services = [
  {
    id: 1,
    icon: 'pi-bolt',
    title: 'Website Design',
    description: 'Professional websites that attract and convert customers. Built fast, built right.',
    features: ['Mobile-First Design', 'SEO Optimized', '7-14 Days Delivery'],
    price: 'GH₵2,500',
    color: 'primary'
  },
  {
    id: 2,
    icon: 'pi-shopping-cart',
    title: 'E-commerce',
    description: 'Start selling online with payment integration and full store management.',
    features: ['Mobile Money Ready', 'Product Management', 'Secure Checkout'],
    price: 'GH₵6,000',
    color: 'accent'
  },
  {
    id: 3,
    icon: 'pi-search',
    title: 'SEO Services',
    description: 'Get found on Google and attract more customers organically.',
    features: ['Keyword Research', 'Page Optimization', 'Monthly Reports'],
    price: 'GH₵800/mo',
    color: 'green'
  },
  {
    id: 4,
    icon: 'pi-wrench',
    title: 'Maintenance',
    description: 'Keep your site secure, updated, and running smoothly 24/7.',
    features: ['Monthly Backups', 'Security Updates', 'Priority Support'],
    price: 'GH₵200/mo',
    color: 'secondary'
  },
  {
    id: 5,
    icon: 'pi-palette',
    title: 'Branding',
    description: 'Professional logo and brand identity that makes you memorable.',
    features: ['Custom Logo', 'Brand Kit', 'Social Graphics'],
    price: 'GH₵800',
    color: 'purple'
  },
  {
    id: 6,
    icon: 'pi-mobile',
    title: 'Optimization',
    description: 'Lightning-fast websites that work perfectly on all devices.',
    features: ['Speed Boost', 'Mobile Testing', 'Performance Fix'],
    price: 'GH₵1,500',
    color: 'blue'
  }
]

const colorClasses = {
  primary: {
    icon: 'bg-primary-600',
    border: 'border-primary-200 hover:border-primary-400',
    text: 'text-primary-600',
    button: 'bg-primary-600 hover:bg-primary-700'
  },
  accent: {
    icon: 'bg-accent-500',
    border: 'border-accent-200 hover:border-accent-400',
    text: 'text-accent-600',
    button: 'bg-accent-500 hover:bg-accent-600'
  },
  green: {
    icon: 'bg-green-600',
    border: 'border-green-200 hover:border-green-400',
    text: 'text-green-600',
    button: 'bg-green-600 hover:bg-green-700'
  },
  secondary: {
    icon: 'bg-secondary-700',
    border: 'border-secondary-200 hover:border-secondary-400',
    text: 'text-secondary-700',
    button: 'bg-secondary-700 hover:bg-secondary-800'
  },
  purple: {
    icon: 'bg-purple-600',
    border: 'border-purple-200 hover:border-purple-400',
    text: 'text-purple-600',
    button: 'bg-purple-600 hover:bg-purple-700'
  },
  blue: {
    icon: 'bg-blue-600',
    border: 'border-blue-200 hover:border-blue-400',
    text: 'text-blue-600',
    button: 'bg-blue-600 hover:bg-blue-700'
  }
}
</script>

<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="max-w-7xl mx-auto">
      
      <!-- Section Header -->
      <div class="text-center mb-16">
        <!-- <div class="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
          <i class="pi pi-wrench"></i>
          <span>Our Services</span>
        </div> -->
        
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-secondary-900 mb-6">
          What We Do Best
        </h2>
        
        <p class="text-xl text-secondary-600 max-w-2xl mx-auto">
          Complete digital solutions to help your business grow online
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.id"
          :class="[
            'group bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl',
            colorClasses[service.color].border
          ]"
        >
          <!-- Icon -->
          <div :class="['w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110', colorClasses[service.color].icon]">
            <i :class="['pi text-white text-2xl', service.icon]"></i>
          </div>

          <!-- Title & Description -->
          <h3 class="text-2xl font-bold text-secondary-900 mb-3">
            {{ service.title }}
          </h3>
          
          <p class="text-secondary-600 mb-6 leading-relaxed">
            {{ service.description }}
          </p>

          <!-- Features -->
          <ul class="space-y-2 mb-8">
            <li 
              v-for="feature in service.features"
              :key="feature"
              class="flex items-center gap-2 text-sm text-secondary-700"
            >
              <i class="pi pi-check text-green-600 text-xs"></i>
              <span>{{ feature }}</span>
            </li>
          </ul>

          <!-- Price & Button -->
          <div class="pt-6 border-t border-secondary-100">
            <div class="flex items-center justify-between mb-4">
              <div>
                <div class="text-xs text-secondary-500 font-medium uppercase">Starting at</div>
                <div class="text-3xl font-black text-secondary-900">{{ service.price }}</div>
              </div>
            </div>
            
            <!-- <button :class="['w-full text-white font-bold py-3 px-6 rounded-lg transition-all duration-200', colorClasses[service.color].button]">
              Learn More
            </button> -->
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-20 bg-gradient-to-br from-secondary-900 to-secondary-800 rounded-3xl p-8 sm:p-12 text-center">
        <h3 class="text-3xl sm:text-4xl font-black text-white mb-4">
          Need Something Custom?
        </h3>
        
        <p class="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
          Let's discuss your project and create a tailored solution for your business
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
          @click="emit('open-contact')"
          class="bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2">
            <i class="pi pi-envelope"></i>
            <span>Get Free Consultation</span>
          </button>
          <!-- <a 
          herf="https://wa.me/233598443133"
          class="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 font-bold px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2">
            <i class="pi pi-whatsapp"></i>
            <span>WhatsApp Us</span>
        </a> -->
        </div>
      </div>

    </div>
  </section>
</template>