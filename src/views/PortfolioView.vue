<script setup>
import { ref } from 'vue'

// Real projects + concept work approach for new agencies
const projects = [
  {
    id: 1,
    title: 'Accra Fashion Boutique',
    category: 'E-commerce',
    client: 'Confidential Client',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    description: 'Complete online store with mobile money integration for a growing fashion brand in Accra.',
    challenge: 'Client needed to start selling online quickly with local payment options',
    solution: 'Built mobile-first e-commerce site with MTN/Vodafone Cash integration',
    results: [
      'Live in 12 days',
      '50+ products uploaded',
      'Mobile-optimized checkout',
      'Paystack integration'
    ],
    tags: ['E-commerce', 'Mobile Money', 'WooCommerce'],
    featured: true
  },
  {
    id: 2,
    title: 'Legal Services Website',
    category: 'Corporate',
    client: 'Law Firm, Kumasi',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
    description: 'Professional website for an established law firm looking to modernize their online presence.',
    challenge: 'Outdated website not reflecting their expertise and professionalism',
    solution: 'Clean, professional design with service pages and client testimonials',
    results: [
      'Completed in 9 days',
      'SEO optimized',
      'Contact inquiries up 40%',
      'Mobile responsive'
    ],
    tags: ['Corporate', 'SEO', 'Professional Services'],
    featured: true
  },
  {
    id: 3,
    title: 'Restaurant & Bar',
    category: 'Hospitality',
    client: 'Concept Project',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    description: 'Modern website concept for restaurants featuring online menu and reservation system.',
    challenge: 'Showcase how restaurants can attract customers with beautiful online presence',
    solution: 'Image-rich design with integrated menu and WhatsApp reservation',
    results: [
      'Interactive menu',
      'Location integration',
      'WhatsApp booking',
      'Image galleries'
    ],
    tags: ['Hospitality', 'Menu Design', 'Concept'],
    featured: false
  },
  {
    id: 4,
    title: 'Tech Startup Landing',
    category: 'SaaS',
    client: 'Concept Project',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    description: 'High-converting landing page design for tech startups and SaaS products.',
    challenge: 'Demonstrate modern landing page best practices for tech companies',
    solution: 'Conversion-focused design with clear CTAs and benefit-driven copy',
    results: [
      'Modern animations',
      'Clear value prop',
      'Mobile-first design',
      'Fast loading'
    ],
    tags: ['SaaS', 'Landing Page', 'Concept'],
    featured: false
  }
]

const categories = ['All', 'E-commerce', 'Corporate', 'Hospitality', 'SaaS']
const activeCategory = ref('All')
const selectedProject = ref(null)

const filteredProjects = ref(projects)

const filterProjects = (category) => {
  activeCategory.value = category
  if (category === 'All') {
    filteredProjects.value = projects
  } else {
    filteredProjects.value = projects.filter(p => p.category === category)
  }
}

const openProject = (project) => {
  selectedProject.value = project
}

const closeProject = () => {
  selectedProject.value = null
}
</script>

<template>
  <div class="min-h-screen bg-white">
    
    <!-- Hero Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary-50 to-white">
      <div class="max-w-7xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
          <i class="pi pi-images"></i>
          <span>Our Work</span>
        </div>
        
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-secondary-900 mb-6">
          Websites That
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500"> Drive Results</span>
        </h1>
        
        <p class="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
          We're a new agency with a fresh approach. Every project showcases our commitment to speed, quality, and results. From real client work to concept designs, see what we can build for you.
        </p>

        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-3">
          <button
            v-for="category in categories"
            :key="category"
            @click="filterProjects(category)"
            :class="[
              'px-6 py-3 rounded-xl font-semibold transition-all duration-200',
              activeCategory === category
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white text-secondary-700 border-2 border-secondary-200 hover:border-primary-300'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            @click="openProject(project)"
            class="group cursor-pointer"
          >
            <!-- Project Card -->
            <div class="bg-white rounded-2xl overflow-hidden border-2 border-secondary-100 hover:border-primary-300 transition-all duration-300 hover:shadow-2xl">
              
              <!-- Image -->
              <div class="relative aspect-[4/3] overflow-hidden bg-secondary-100">
                <img 
                  :src="project.image" 
                  :alt="project.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <!-- Badges -->
                <div class="absolute top-4 left-4 flex gap-2">
                  <span class="bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {{ project.category }}
                  </span>
                  <span v-if="project.featured" class="bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Client Work
                  </span>
                </div>

                <!-- View Project -->
                <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div class="bg-white text-primary-600 px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2">
                    <span>View Project</span>
                    <i class="pi pi-arrow-right"></i>
                  </div>
                </div>
              </div>

              <!-- Content -->
              <div class="p-6">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-2xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                    {{ project.title }}
                  </h3>
                  <span class="text-sm text-secondary-500 font-medium">{{ project.year }}</span>
                </div>
                
                <p class="text-secondary-600 mb-4 leading-relaxed">
                  {{ project.description }}
                </p>

                <!-- Tags -->
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="text-xs bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full font-medium"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredProjects.length === 0" class="text-center py-20">
          <i class="pi pi-inbox text-6xl text-secondary-300 mb-4"></i>
          <p class="text-xl text-secondary-600">No projects in this category yet</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-900">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-black text-white mb-4">
          Ready to See Your Project Here?
        </h2>
        <p class="text-xl text-secondary-300 mb-8">
          We're taking on new clients. Let's build something amazing together.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-lg">
            <i class="pi pi-bolt"></i>
            <span>Start Your Project</span>
          </button>
          <button class="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 font-bold px-8 py-4 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2">
            <i class="pi pi-whatsapp"></i>
            <span>Chat With Us</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Project Detail Modal -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="selectedProject"
        class="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] overflow-y-auto"
        @click.self="closeProject"
      >
        <div class="min-h-screen px-4 py-8 sm:py-12 flex items-start sm:items-center justify-center">
          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="scale-95 opacity-0"
            enter-to-class="scale-100 opacity-100"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="scale-100 opacity-100"
            leave-to-class="scale-95 opacity-0"
          >
            <div
              v-if="selectedProject"
              class="bg-white rounded-3xl shadow-2xl w-full max-w-4xl relative"
              @click.stop
            >
              <!-- Close Button -->
              <div class="sticky top-0 z-20 bg-white rounded-t-3xl pt-6 px-6 pb-4 border-b border-secondary-100">
                <button
                  @click="closeProject"
                  class="ml-auto flex items-center justify-center w-10 h-10 bg-secondary-100 hover:bg-secondary-200 rounded-full text-secondary-600 hover:text-secondary-900 transition-all duration-200"
                >
                  <i class="pi pi-times text-lg"></i>
                </button>
              </div>

              <!-- Modal Content -->
              <div class="px-6 sm:px-10 pb-10">
                
                <!-- Project Image -->
                <div class="aspect-video rounded-2xl overflow-hidden mb-6">
                  <img :src="selectedProject.image" :alt="selectedProject.title" class="w-full h-full object-cover" />
                </div>

                <!-- Title & Meta -->
                <div class="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 class="text-3xl sm:text-4xl font-black text-secondary-900 mb-2">
                      {{ selectedProject.title }}
                    </h3>
                    <p class="text-secondary-600">
                      {{ selectedProject.client }} • {{ selectedProject.year }}
                    </p>
                  </div>
                  <span class="bg-primary-600 text-white px-4 py-2 rounded-lg font-bold">
                    {{ selectedProject.category }}
                  </span>
                </div>

                <!-- Description -->
                <p class="text-lg text-secondary-600 mb-8 leading-relaxed">
                  {{ selectedProject.description }}
                </p>

                <!-- Challenge & Solution -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div class="bg-secondary-50 rounded-2xl p-6 border border-secondary-100">
                    <h4 class="text-lg font-bold text-secondary-900 mb-3 flex items-center gap-2">
                      <i class="pi pi-exclamation-circle text-primary-600"></i>
                      The Challenge
                    </h4>
                    <p class="text-secondary-600 leading-relaxed">{{ selectedProject.challenge }}</p>
                  </div>

                  <div class="bg-primary-50 rounded-2xl p-6 border border-primary-100">
                    <h4 class="text-lg font-bold text-secondary-900 mb-3 flex items-center gap-2">
                      <i class="pi pi-lightbulb text-accent-500"></i>
                      Our Solution
                    </h4>
                    <p class="text-secondary-600 leading-relaxed">{{ selectedProject.solution }}</p>
                  </div>
                </div>

                <!-- Results -->
                <div class="mb-8">
                  <h4 class="text-xl font-bold text-secondary-900 mb-4">Key Features & Results</h4>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div
                      v-for="result in selectedProject.results"
                      :key="result"
                      class="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100"
                    >
                      <i class="pi pi-check-circle text-green-600 text-lg flex-shrink-0"></i>
                      <span class="text-secondary-700 font-medium">{{ result }}</span>
                    </div>
                  </div>
                </div>

                <!-- Tags -->
                <div class="mb-8">
                  <h4 class="text-sm font-bold text-secondary-500 uppercase mb-3">Technologies Used</h4>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tag in selectedProject.tags"
                      :key="tag"
                      class="bg-secondary-100 text-secondary-700 px-4 py-2 rounded-lg font-medium text-sm"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>

                <!-- CTA -->
                <div class="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-6 text-center">
                  <h4 class="text-xl font-bold text-white mb-3">Like What You See?</h4>
                  <p class="text-primary-100 mb-4">Let's build something similar for your business</p>
                  <button 
                    @click="closeProject"
                    class="bg-accent-500 hover:bg-accent-600 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 inline-flex items-center gap-2"
                  >
                    <i class="pi pi-bolt"></i>
                    <span>Get Started</span>
                  </button>
                </div>

              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
.overflow-y-auto {
  -webkit-overflow-scrolling: touch;
}
</style>