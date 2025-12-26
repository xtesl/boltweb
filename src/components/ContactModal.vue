<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { useToast } from '../composables/useToast'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])
const { success, error } = useToast()

const formData = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
  timeline: ''
})

const isSubmitting = ref(false)

const services = [
  'Website Design',
  'E-commerce Store',
  'SEO Services',
  'Website Maintenance',
  'Logo & Branding',
  'Not Sure Yet'
]

const budgets = [
  'GH₵ 2,000 - 3,000',
  'GH₵ 3,000 - 5,000',
  'GH₵ 5,000 - 10,000',
  'GH₵ 10,000+'
]

const timelines = [
  'As soon as possible',
  'Within 2 weeks',
  'Within 1 month',
  'Just exploring'
]

const contactMethods = [
  {
    icon: 'pi-whatsapp',
    title: 'WhatsApp',
    value: '+233 59 844 3133',
    action: 'Chat Now',
    color: 'green',
    link: 'https://wa.me/233598443133'
  },
  {
    icon: 'pi-phone',
    title: 'Call Us',
    value: '+233 59 844 3133',
    action: 'Call Now',
    color: 'primary',
    link: 'tel:+233598443133'
  },
  {
    icon: 'pi-envelope',
    title: 'Email',
    value: 'aimmanuel925@gmail.com',
    action: 'Send Email',
    color: 'accent',
    link: 'mailto:aimmanuel925@gmail.com'
  }
]

const closeModal = () => {
  emit('close')
}

const resetForm = () => {
  formData.value = {
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    timeline: ''
  }
}

const handleSubmit = async () => {
  // Validation
  if (!formData.value.name) {
    error('Please enter your name')
    return
  }
  
  if (!formData.value.email) {
    error('Please enter your email')
    return
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.value.email)) {
    error('Please enter a valid email address')
    return
  }
  
  if (!formData.value.message) {
    error('Please tell us about your project')
    return
  }

  isSubmitting.value = true

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: '4adcbc36-1793-42d4-9e25-bf29c31d9f1e', // Get free from web3forms.com
        name: formData.value.name,
        email: formData.value.email,
        phone: formData.value.phone,
        service: formData.value.service,
        budget: formData.value.budget,
        timeline: formData.value.timeline,
        message: formData.value.message,
        subject: `New Request from ${formData.value.name}`
      })
    })

    if (response.ok) {
      success('Message sent! We\'ll get back to you within 24 hours.')
      resetForm()
      setTimeout(() => closeModal(), 2000)
    } else {
      throw new Error('Failed to send')
    }
  } catch (err) {
    error('Failed to send message. Please try WhatsApp or email.')
  } finally {
    isSubmitting.value = false
  }
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
      <!-- Modal Container -->
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
            class="bg-white rounded-3xl shadow-2xl w-full max-w-4xl relative"
            @click.stop
          >
            <!-- Close Button - Sticky -->
            <div class="sticky top-0 z-20 bg-white rounded-t-3xl pt-6 px-6 pb-4 border-b border-secondary-100">
              <button
                @click="closeModal"
                class="ml-auto flex items-center justify-center w-10 h-10 bg-secondary-100 hover:bg-secondary-200 rounded-full text-secondary-600 hover:text-secondary-900 transition-all duration-200"
                aria-label="Close modal"
              >
                <i class="pi pi-times text-lg"></i>
              </button>
            </div>

            <!-- Content -->
            <div class="px-6 sm:px-10 pb-10">
              
              <!-- Header -->
              <div class="text-center mb-8">
                <!-- <div class="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  <i class="pi pi-send"></i>
                  <span>Get In Touch</span>
                </div> -->
                
                <h2 class="text-3xl sm:text-4xl font-black text-secondary-900 mb-3">
                  Let's Build Something
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500"> Amazing Together</span>
                </h2>
                
                <p class="text-base sm:text-lg text-secondary-600 leading-relaxed">
                  Fill out the form below or reach us directly. We typically respond within 2 hours during business hours.
                </p>
              </div>

              <!-- Quick Contact Methods -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <a
                  v-for="method in contactMethods"
                  :key="method.title"
                  :href="method.link"
                  target="_blank"
                  class="flex flex-col items-center gap-3 p-4 bg-secondary-50 rounded-xl border-2 border-secondary-100 hover:border-primary-300 transition-all duration-200 group"
                >
                  <div :class="[
                    'w-12 h-12 rounded-lg flex items-center justify-center',
                    method.color === 'green' ? 'bg-green-600' : method.color === 'primary' ? 'bg-primary-600' : 'bg-accent-500'
                  ]">
                    <i :class="['pi text-white text-xl', method.icon]"></i>
                  </div>
                  <div class="text-center">
                    <div class="text-sm font-bold text-secondary-900 mb-1">{{ method.title }}</div>
                    <div class="text-xs text-secondary-600 mb-2">{{ method.value }}</div>
                    <div class="text-xs text-primary-600 font-semibold group-hover:underline">
                      {{ method.action }} →
                    </div>
                  </div>
                </a>
              </div>

              <!-- Divider -->
              <div class="relative mb-8">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-secondary-200"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-4 bg-white text-secondary-500 font-medium">Or send us a message</span>
                </div>
              </div>

              <!-- Contact Form -->
              <form @submit.prevent="handleSubmit" class="space-y-5">
                
                <!-- Name & Email -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-bold text-secondary-900 mb-2">
                      Your Name <span class="text-red-500">*</span>
                    </label>
                    <input
                      v-model="formData.name"
                      type="text"
                      placeholder="Kwame Asante"
                      required
                      class="w-full px-4 py-3 rounded-xl border-2 border-secondary-200 focus:border-primary-500 focus:outline-none transition-colors text-secondary-900"
                    />
                  </div>
                  
                  <div>
                    <label class="block text-sm font-bold text-secondary-900 mb-2">
                      Email Address <span class="text-red-500">*</span>
                    </label>
                    <input
                      v-model="formData.email"
                      type="email"
                      placeholder="kwame@example.com"
                      required
                      class="w-full px-4 py-3 rounded-xl border-2 border-secondary-200 focus:border-primary-500 focus:outline-none transition-colors text-secondary-900"
                    />
                  </div>
                </div>

                <!-- Phone & Service -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-bold text-secondary-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      v-model="formData.phone"
                      type="tel"
                      placeholder="+233 XX XXX XXXX"
                      class="w-full px-4 py-3 rounded-xl border-2 border-secondary-200 focus:border-primary-500 focus:outline-none transition-colors text-secondary-900"
                    />
                  </div>
                  
                  <div>
                    <label class="block text-sm font-bold text-secondary-900 mb-2">
                      Service Needed
                    </label>
                    <select
                      v-model="formData.service"
                      class="w-full px-4 py-3 rounded-xl border-2 border-secondary-200 focus:border-primary-500 focus:outline-none transition-colors text-secondary-900"
                    >
                      <option value="">Select a service</option>
                      <option v-for="service in services" :key="service" :value="service">
                        {{ service }}
                      </option>
                    </select>
                  </div>
                </div>

                <!-- Budget & Timeline -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-bold text-secondary-900 mb-2">
                      Budget Range
                    </label>
                    <select
                      v-model="formData.budget"
                      class="w-full px-4 py-3 rounded-xl border-2 border-secondary-200 focus:border-primary-500 focus:outline-none transition-colors text-secondary-900"
                    >
                      <option value="">Select budget</option>
                      <option v-for="budget in budgets" :key="budget" :value="budget">
                        {{ budget }}
                      </option>
                    </select>
                  </div>
                  
                  <div>
                    <label class="block text-sm font-bold text-secondary-900 mb-2">
                      Timeline
                    </label>
                    <select
                      v-model="formData.timeline"
                      class="w-full px-4 py-3 rounded-xl border-2 border-secondary-200 focus:border-primary-500 focus:outline-none transition-colors text-secondary-900"
                    >
                      <option value="">When do you need it?</option>
                      <option v-for="timeline in timelines" :key="timeline" :value="timeline">
                        {{ timeline }}
                      </option>
                    </select>
                  </div>
                </div>

                <!-- Message -->
                <div>
                  <label class="block text-sm font-bold text-secondary-900 mb-2">
                    Tell Us About Your Project <span class="text-red-500">*</span>
                  </label>
                  <textarea
                    v-model="formData.message"
                    rows="5"
                    placeholder="Describe your project, goals, and any specific requirements..."
                    required
                    class="w-full px-4 py-3 rounded-xl border-2 border-secondary-200 focus:border-primary-500 focus:outline-none transition-colors text-secondary-900 resize-none"
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  :class="[
                    'w-full font-bold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg',
                    isSubmitting 
                      ? 'bg-secondary-400 cursor-not-allowed' 
                      : 'bg-accent-500 hover:bg-accent-600 text-white'
                  ]"
                >
                  <i :class="['pi text-lg', isSubmitting ? 'pi-spin pi-spinner' : 'pi-send']"></i>
                  <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                </button>

                <!-- Privacy Note -->
                <p class="text-xs text-center text-secondary-500">
                  <i class="pi pi-shield text-green-600"></i>
                  Your information is secure. We'll never share it with third parties.
                </p>
              </form>

            </div>
          </div>
        </Transition>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.overflow-y-auto {
  -webkit-overflow-scrolling: touch;
}

/* Custom select arrow */
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  appearance: none;
}
</style>