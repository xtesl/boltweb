<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const router = useRouter()
const route = useRoute()
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const isServicesOpen = ref(false)
const isLanguageOpen = ref(false)

const languages = [
  { code: 'en', label: 'English', flag: 'gb' },
  { code: 'fr', label: 'Français', flag: 'fr' },
  { code: 'es', label: 'Español', flag: 'es' }
]

// Get current language object
const currentLanguage = computed(() => {
  return languages.find(lang => lang.code === locale.value) || languages[0]
})

const toggleLanguage = () => {
  isLanguageOpen.value = !isLanguageOpen.value
}

const selectLanguage = (lang) => {
  locale.value = lang.code
  isLanguageOpen.value = false
}

const emit = defineEmits(['open-about', 'open-contact', 'open-services'])

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const openContact = () => {
   closeMenu()
   emit('open-contact')
}

const openAbout = () => {
  closeMenu()
  emit('open-about')
}

const openServices = () => {
  closeMenu()
  emit('open-services')
}

const navigateTo = (path) => {
  router.push(path)
  closeMenu()
}

// Check if route is active
const isActive = (path) => {
  return route.path === path
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
        
        <!-- Logo with Tagline -->
        <div class="flex-shrink-0 flex items-center cursor-pointer group" @click="navigateTo('/')">
          <div class="relative">
            <img
              src="/images/boltweb_logo.png"
              alt="BoltWeb Logo"
              class="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div class="absolute -top-1 -right-1 w-3 h-3 bg-primary-600 rounded-full animate-pulse"></div>
          </div>
          <div class="ml-3">
            <span class="text-2xl font-black text-secondary-800 tracking-tight">
              Bolt<span class="text-accent-500">Web</span>
            </span>
            <div class="text-xs text-secondary-500 font-medium -mt-1">Lightning Fast Websites</div>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-1">
          <!-- Services Dropdown -->
          <router-link
            :to="'/services'"
            class="group px-5 py-2.5 rounded-lg text-secondary-800 hover:text-primary-600 hover:bg-primary-50 font-semibold text-base transition-all duration-200 flex items-center gap-2"
          >
            <span>Services</span>
        </router-link>

          <router-link 
            to="/portfolio" 
            :class="[
              'group px-5 py-2.5 rounded-lg font-semibold text-base transition-all duration-200',
              isActive('/portfolio') 
                ? 'bg-primary-600 text-white' 
                : 'text-secondary-800 hover:text-primary-600 hover:bg-primary-50'
            ]"
          >
            Portfolio
          </router-link>

          <router-link 
            to="/pricing" 
            :class="[
              'group px-5 py-2.5 rounded-lg font-semibold text-base transition-all duration-200',
              isActive('/pricing') 
                ? 'bg-primary-600 text-white' 
                : 'text-secondary-800 hover:text-primary-600 hover:bg-primary-50'
            ]"
          >
            Pricing
          </router-link>

          <!-- About Dropdown -->
          <button 
            @click="openAbout"
            class="group px-5 py-2.5 rounded-lg text-secondary-800 hover:text-primary-600 hover:bg-primary-50 font-semibold text-base transition-all duration-200 flex items-center gap-2"
          >
            <span>About</span>
            <i class="pi pi-chevron-down text-xs group-hover:translate-y-0.5 transition-transform"></i>
          </button>

          <!-- Contact Dropdown -->
          <button 
            @click="openContact"
            class="group px-5 py-2.5 rounded-lg text-secondary-800 hover:text-primary-600 hover:bg-primary-50 font-semibold text-base transition-all duration-200 flex items-center gap-2"
          >
            <span>Contact</span>
            <i class="pi pi-chevron-down text-xs group-hover:translate-y-0.5 transition-transform"></i>
          </button>
        </div>

        <!-- Right Side - Language Selector Only -->
        <div class="hidden lg:flex items-center">
          <!-- Language Selector Dropdown -->
          <div class="relative">
            <button 
              @click="toggleLanguage"
              class="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border-2 border-secondary-200 hover:border-primary-400 hover:bg-primary-50 font-semibold text-sm transition-all duration-200 shadow hover:shadow-md"
            >
              <img 
                :src="`https://flagcdn.com/w40/${currentLanguage.flag}.png`" 
                :alt="currentLanguage.label" 
                class="w-6 h-4 object-cover rounded shadow-sm"
              />
              <span class="text-secondary-800">{{ currentLanguage.label }}</span>
              <i :class="[
                'pi pi-chevron-down text-xs text-secondary-600 transition-transform duration-200',
                isLanguageOpen ? 'rotate-180' : ''
              ]"></i>
            </button>

            <!-- Language Dropdown Menu -->
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div 
                v-if="isLanguageOpen"
                class="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-secondary-200 py-2 z-50"
              >
                <button
                  v-for="lang in languages"
                  :key="lang.code"
                  @click="selectLanguage(lang)"
                  :class="[
                    'w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors duration-150',
                    locale === lang.code 
                      ? 'bg-primary-50 text-primary-600' 
                      : 'text-secondary-700 hover:bg-secondary-50'
                  ]"
                >
                  <img 
                    :src="`https://flagcdn.com/w40/${lang.flag}.png`" 
                    :alt="lang.label" 
                    class="w-6 h-4 object-cover rounded shadow-sm"
                  />
                  <span>{{ lang.label }}</span>
                  <i v-if="locale === lang.code" class="pi pi-check text-primary-600 ml-auto text-sm"></i>
                </button>
              </div>
            </transition>
          </div>
        </div>

        <!-- Mobile Menu Button -->
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
        <!-- Services -->
        <router-link
          :to="'/services'"
          class="group flex items-center gap-3 px-4 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 transform text-secondary-800 hover:bg-primary-600 hover:text-white hover:translate-x-2 w-full"
        >
          <div class="w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-primary-50 group-hover:bg-white/20">
            <i class="pi pi-wrench text-xl text-primary-600 group-hover:text-white"></i>
          </div>
          <span class="flex-1 text-left">Services</span>
        </router-link>
        
        <router-link
          to="/portfolio" 
          @click="closeMenu"
          :class="[
            'group flex items-center gap-3 px-4 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 transform',
            isActive('/portfolio') 
              ? 'bg-primary-600 text-white translate-x-2' 
              : 'text-secondary-800 hover:bg-primary-600 hover:text-white hover:translate-x-2'
          ]"
        >
          <div :class="[
            'w-10 h-10 rounded-lg flex items-center justify-center transition-colors',
            isActive('/portfolio') 
              ? 'bg-white/20' 
              : 'bg-primary-50 group-hover:bg-white/20'
          ]">
            <i :class="[
              'pi pi-images text-xl',
              isActive('/portfolio') 
                ? 'text-white' 
                : 'text-primary-600 group-hover:text-white'
            ]"></i>
          </div>
          <span>Portfolio</span>
        </router-link>
        
        <router-link
          to="/pricing" 
          @click="closeMenu"
          :class="[
            'group flex items-center gap-3 px-4 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 transform',
            isActive('/pricing') 
              ? 'bg-primary-600 text-white translate-x-2' 
              : 'text-secondary-800 hover:bg-primary-600 hover:text-white hover:translate-x-2'
          ]"
        >
          <div :class="[
            'w-10 h-10 rounded-lg flex items-center justify-center transition-colors',
            isActive('/pricing') 
              ? 'bg-white/20' 
              : 'bg-primary-50 group-hover:bg-white/20'
          ]">
            <i :class="[
              'pi pi-tag text-xl',
              isActive('/pricing') 
                ? 'text-white' 
                : 'text-primary-600 group-hover:text-white'
            ]"></i>
          </div>
          <span>Pricing</span>
        </router-link>
        
        <!-- About -->
        <button
          @click="openAbout"
          class="group flex items-center gap-3 px-4 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 transform text-secondary-800 hover:bg-primary-600 hover:text-white hover:translate-x-2 w-full"
        >
          <div class="w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-primary-50 group-hover:bg-white/20">
            <i class="pi pi-info-circle text-xl text-primary-600 group-hover:text-white"></i>
          </div>
          <span class="flex-1 text-left">About</span>
          <i class="pi pi-chevron-down text-sm"></i>
        </button>
  
        <!-- Contact -->
        <button
          @click="openContact"
          class="group flex items-center gap-3 px-4 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 transform text-secondary-800 hover:bg-primary-600 hover:text-white hover:translate-x-2 w-full"
        >
          <div class="w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-primary-50 group-hover:bg-white/20">
            <i class="pi pi-envelope text-xl text-primary-600 group-hover:text-white"></i>
          </div>
          <span class="flex-1 text-left">Contact</span>
          <i class="pi pi-chevron-down text-sm"></i>
        </button>
        
        <!-- Mobile Language Selector -->
        <div class="pt-4 mt-4 border-t border-secondary-200">
          <div class="relative">
            <button 
              @click="toggleLanguage"
              class="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white border-2 border-secondary-200 hover:border-primary-400 hover:bg-primary-50 font-semibold text-sm transition-all shadow"
            >
              <img 
                :src="`https://flagcdn.com/w40/${currentLanguage.flag}.png`" 
                :alt="currentLanguage.label" 
                class="w-6 h-4 object-cover rounded shadow-sm"
              />
              <span class="flex-1 text-left text-secondary-800">{{ currentLanguage.label }}</span>
              <i :class="[
                'pi pi-chevron-down text-xs text-secondary-600 transition-transform duration-200',
                isLanguageOpen ? 'rotate-180' : ''
              ]"></i>
            </button>

            <!-- Mobile Language Dropdown -->
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 -translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-1"
            >
              <div 
                v-if="isLanguageOpen"
                class="mt-2 bg-white rounded-xl shadow-lg border border-secondary-200 py-2"
              >
                <button
                  v-for="lang in languages"
                  :key="lang.code"
                  @click="selectLanguage(lang)"
                  :class="[
                    'w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors duration-150',
                    locale === lang.code 
                      ? 'bg-primary-50 text-primary-600' 
                      : 'text-secondary-700 hover:bg-secondary-50'
                  ]"
                >
                  <img 
                    :src="`https://flagcdn.com/w40/${lang.flag}.png`" 
                    :alt="lang.label" 
                    class="w-6 h-4 object-cover rounded shadow-sm"
                  />
                  <span class="flex-1 text-left">{{ lang.label }}</span>
                  <i v-if="locale === lang.code" class="pi pi-check text-primary-600 text-sm"></i>
                </button>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>