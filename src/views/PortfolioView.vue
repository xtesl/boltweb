<script setup>
import { ref, computed } from 'vue'
import PortfolioHero from '../components/PortfolioHero.vue'

// REAL WEBSITE CASE STUDIES - These are actual live websites we're featuring
const projects = [
  {
    id: 1,
    title: "Stripe",
    client: "Payment Processing Platform",
    category: "E-commerce",
    year: "2023",
    duration: "8-10 weeks",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    mockups: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80",
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80"
    ],
    shortDesc: "A masterclass in minimalist design and smooth user experience. Clean gradients, micro-interactions, and developer-focused content.",
    challenge: "Creating a payment platform that feels trustworthy, secure, and easy to integrate for developers while appealing to business decision-makers.",
    solution: "Bold gradients, clear documentation structure, interactive code examples, and a focus on developer experience with beautiful UI components.",
    services: ["UI/UX Design", "Frontend Development", "API Integration", "Payment Gateway"],
    tags: ["Next.js", "TypeScript", "Stripe API", "Tailwind CSS", "React"],
    results: [
      { metric: "99.9%", label: "Uptime" },
      { metric: "50M+", label: "Transactions" },
      { metric: "4.8/5", label: "User Rating" },
      { metric: "120+", label: "Countries" }
    ],
    liveUrl: "https://stripe.com",
    testimonial: {
      text: "The design is intuitive and the developer experience is outstanding. Integration was seamless.",
      author: "Tech Startup CEO",
      role: "E-commerce Platform"
    }
  },
  {
    id: 2,
    title: "Linear",
    client: "Project Management Tool",
    category: "Productivity",
    year: "2023",
    duration: "6-8 weeks",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    mockups: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
    ],
    shortDesc: "Sleek, fast, and keyboard-first interface. Dark mode perfection with subtle animations and exceptional attention to detail.",
    challenge: "Building a project management tool that's faster and more intuitive than existing solutions, designed for modern software teams.",
    solution: "Keyboard shortcuts, instant search, dark-first design, smooth animations, and a focus on speed with optimistic UI updates.",
    services: ["Product Design", "Full-Stack Development", "Real-time Features", "Performance Optimization"],
    tags: ["React", "GraphQL", "WebSocket", "Prisma", "PostgreSQL"],
    results: [
      { metric: "<50ms", label: "Response Time" },
      { metric: "10K+", label: "Teams" },
      { metric: "95%", label: "Retention Rate" },
      { metric: "4.9/5", label: "User Score" }
    ],
    liveUrl: "https://linear.app"
  },
  {
    id: 3,
    title: "Airbnb",
    client: "Travel & Hospitality",
    category: "Hospitality",
    year: "2023",
    duration: "12-14 weeks",
    thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    mockups: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80"
    ],
    shortDesc: "Beautiful imagery, seamless booking experience, and trust-building design elements. Perfect balance of visual appeal and functionality.",
    challenge: "Creating a platform that connects travelers with hosts while building trust and ensuring smooth booking experiences.",
    solution: "High-quality imagery, verified reviews system, secure payment processing, interactive maps, and mobile-first responsive design.",
    services: ["Platform Development", "Booking System", "Payment Integration", "Mobile App"],
    tags: ["Ruby on Rails", "React Native", "Maps API", "AWS", "Redis"],
    results: [
      { metric: "150M+", label: "Users" },
      { metric: "4M+", label: "Hosts" },
      { metric: "85%", label: "Booking Rate" },
      { metric: "220+", label: "Countries" }
    ],
    liveUrl: "https://airbnb.com"
  },
  {
    id: 4,
    title: "Notion",
    client: "Productivity Suite",
    category: "Productivity",
    year: "2023",
    duration: "10-12 weeks",
    thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    mockups: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80",
      "https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=1200&q=80"
    ],
    shortDesc: "All-in-one workspace with block-based editing. Clean interface, powerful features, and exceptional flexibility for teams.",
    challenge: "Building a flexible workspace that replaces multiple tools while remaining simple and intuitive for non-technical users.",
    solution: "Block-based editing, template library, real-time collaboration, database views, and seamless integration with other tools.",
    services: ["Product Design", "Backend Development", "Collaboration Features", "Database Architecture"],
    tags: ["Next.js", "Node.js", "MongoDB", "WebSocket", "Electron"],
    results: [
      { metric: "30M+", label: "Users" },
      { metric: "1M+", label: "Teams" },
      { metric: "90%", label: "Daily Active" },
      { metric: "4.7/5", label: "Rating" }
    ],
    liveUrl: "https://notion.so"
  },
  {
    id: 5,
    title: "Shopify",
    client: "E-commerce Platform",
    category: "E-commerce",
    year: "2023",
    duration: "14-16 weeks",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    mockups: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80"
    ],
    shortDesc: "Powerful e-commerce platform with merchant-focused design. Easy setup, extensive customization, and robust admin dashboard.",
    challenge: "Empowering entrepreneurs to start online stores without technical knowledge while providing advanced features for growth.",
    solution: "Drag-and-drop store builder, theme marketplace, app ecosystem, integrated payments, and comprehensive analytics dashboard.",
    services: ["E-commerce Platform", "Theme Development", "App Marketplace", "Payment Gateway"],
    tags: ["Ruby on Rails", "React", "GraphQL", "Liquid", "MySQL"],
    results: [
      { metric: "2M+", label: "Merchants" },
      { metric: "$200B+", label: "Sales Volume" },
      { metric: "175+", label: "Countries" },
      { metric: "8K+", label: "Apps" }
    ],
    liveUrl: "https://shopify.com"
  },
  {
    id: 6,
    title: "Duolingo",
    client: "Language Learning App",
    category: "Education",
    year: "2023",
    duration: "8-10 weeks",
    thumbnail: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",
    mockups: [
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80"
    ],
    shortDesc: "Gamified learning experience with engaging UI. Bright colors, streak mechanics, and bite-sized lessons that keep users coming back.",
    challenge: "Making language learning fun, engaging, and habit-forming while ensuring educational effectiveness.",
    solution: "Gamification elements, daily streak system, bite-sized lessons, progress tracking, and social features for motivation.",
    services: ["App Development", "Gamification Design", "Learning Analytics", "Content Management"],
    tags: ["React Native", "Python", "TensorFlow", "AWS", "PostgreSQL"],
    results: [
      { metric: "500M+", label: "Downloads" },
      { metric: "40+", label: "Languages" },
      { metric: "70%", label: "Daily Return" },
      { metric: "4.7/5", label: "App Rating" }
    ],
    liveUrl: "https://duolingo.com"
  }
]

const categories = ['All', 'E-commerce', 'Productivity', 'Hospitality', 'Education']
const activeCategory = ref('All')
const selectedProject = ref(null)
const currentMockupIndex = ref(0)

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects
  }
  return projects.filter(p => p.category === activeCategory.value)
})

const filterProjects = (category) => {
  activeCategory.value = category
}

const openProject = (project) => {
  selectedProject.value = project
  currentMockupIndex.value = 0
  document.body.style.overflow = 'hidden'
}

const closeProject = () => {
  selectedProject.value = null
  document.body.style.overflow = 'auto'
}

const nextMockup = () => {
  if (selectedProject.value && currentMockupIndex.value < selectedProject.value.mockups.length - 1) {
    currentMockupIndex.value++
  }
}

const prevMockup = () => {
  if (currentMockupIndex.value > 0) {
    currentMockupIndex.value--
  }
}

const emit = defineEmits(['open-contact'])

</script>

<template>
  <div class="min-h-screen bg-gray-50">
    
      <PortfolioHero />

    <!-- Category Filter -->
    <section class="sticky top-0 z-40 bg-white border border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          <button
            v-for="category in categories"
            :key="category"
            @click="filterProjects(category)"
            :class="[
              'px-5 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-all duration-200 flex-shrink-0',
              activeCategory === category
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        
        <!-- Featured Projects -->
        <div v-if="activeCategory === 'All'" class="mb-16">
          <h2 class="text-3xl font-black text-gray-900 mb-8">Featured Case Studies</h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              v-for="project in projects.filter(p => p.featured)"
              :key="project.id"
              @click="openProject(project)"
              class="group cursor-pointer"
            >
              <div class="bg-white rounded-3xl overflow-hidden hover:shadow transition-all duration-500 border border-gray-100">
                
                <div class="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img 
                    :src="project.thumbnail" 
                    :alt="project.title"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  <div class="absolute top-4 left-4 flex gap-2">
                    <span class="bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      {{ project.category }}
                    </span>
                    <span class="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                      <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      Featured
                    </span>
                  </div>

                  <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div class="text-white">
                      <div class="text-xs font-medium text-gray-200 mb-1">{{ project.client }}</div>
                      <h3 class="text-2xl font-black">{{ project.title }}</h3>
                    </div>
                    <div class="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                      <div class="bg-white text-gray-900 p-3 rounded-full shadow-lg">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="p-6">
                  <p class="text-gray-600 mb-4 leading-relaxed">{{ project.shortDesc }}</p>

                  <div class="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div class="flex items-center gap-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      {{ project.duration }}
                    </div>
                    <div class="flex items-center gap-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      {{ project.year }}
                    </div>
                  </div>

                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tag in project.tags.slice(0, 3)"
                      :key="tag"
                      class="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg font-medium"
                    >
                      {{ tag }}
                    </span>
                    <span v-if="project.tags.length > 3" class="text-xs text-gray-500 px-2 py-1.5 font-medium">
                      +{{ project.tags.length - 3 }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- All Projects Grid -->
        <div>
          <h2 class="text-3xl font-black text-gray-900 mb-8">
            {{ activeCategory === 'All' ? 'All Case Studies' : activeCategory }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="project in filteredProjects.filter(p => activeCategory === 'All' ? !p.featured : true)"
              :key="project.id"
              @click="openProject(project)"
              class="group cursor-pointer"
            >
              <div class="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
                
                <div class="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img 
                    :src="project.thumbnail" 
                    :alt="project.title"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div class="absolute top-3 left-3">
                    <span class="bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                      {{ project.category }}
                    </span>
                  </div>

                  <div class="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <div class="bg-white text-gray-900 p-2 rounded-lg shadow-lg">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="p-5">
                  <div class="flex items-start justify-between mb-2">
                    <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {{ project.title }}
                    </h3>
                  </div>
                  
                  <p class="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                    {{ project.shortDesc }}
                  </p>

                  <div class="flex items-center gap-1 text-xs text-gray-500 mb-3">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    {{ project.duration }}
                  </div>

                  <div class="flex flex-wrap gap-1.5">
                    <span
                      v-for="tag in project.tags.slice(0, 2)"
                      :key="tag"
                      class="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md font-medium"
                    >
                      {{ tag }}
                    </span>
                    <span v-if="project.tags.length > 2" class="text-xs text-gray-400 px-1.5 py-1 font-medium">
                      +{{ project.tags.length - 2 }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredProjects.length === 0" class="text-center py-20">
          <div class="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-2">No case studies yet</h3>
          <p class="text-gray-600">We're adding more projects in this category. Check back soon!</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 2px, transparent 0); background-size: 50px 50px;"></div>
      </div>
      
      <div class="max-w-4xl mx-auto text-center relative z-10">
        <h2 class="text-4xl sm:text-5xl font-black text-white mb-6">
          Ready to Build Something Amazing?
        </h2>
        <p class="text-xl text-blue-100 mb-10 leading-relaxed">
          Let's create a website as stunning as these. Fast delivery, world-class design, real results.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
              @click="emit('open-contact')"
          class="group bg-white hover:bg-gray-50 text-gray-900 font-bold px-8 py-4 rounded-xl 
          transition-all duration-200 inline-flex items-center justify-center gap-2 hover:shadow-2xl hover:scale-105">
            <!-- <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg> -->
             <i class="pi pi-envelope"></i>
            <span>Start Your Project</span>
            
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
        class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] overflow-y-auto"
        @click.self="closeProject"
      >
        <div class="min-h-screen px-4 py-8 flex items-start justify-center">
          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="scale-95 opacity-0 translate-y-8"
            enter-to-class="scale-100 opacity-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="scale-100 opacity-100"
            leave-to-class="scale-95 opacity-0"
          >
            <div
              v-if="selectedProject"
              class="bg-white rounded-3xl shadow-2xl w-full max-w-6xl relative my-8"
              @click.stop
            >
              <!-- Close Button -->
              <button
                @click="closeProject"
                class="sticky top-4 left-full -ml-12 z-50 flex items-center justify-center w-12 h-12 bg-white hover:bg-gray-100 rounded-full text-gray-600 hover:text-gray-900 transition-all duration-200 shadow-lg"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>

              <!-- Modal Content -->
              <div class="p-8 sm:p-12">
                
                <!-- Header -->
                <div class="mb-8">
                  <div class="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div class="flex items-center gap-3 mb-3">
                        <span class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-xl font-bold text-sm">
                          {{ selectedProject.category }}
                        </span>
                        <span v-if="selectedProject.featured" class="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-1">
                          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                          Featured
                        </span>
                      </div>
                      <h2 class="text-4xl sm:text-5xl font-black text-gray-900 mb-3">
                        {{ selectedProject.title }}
                      </h2>
                      <p class="text-lg text-gray-600">
                        {{ selectedProject.client }} • {{ selectedProject.year }}
                      </p>
                    </div>
                    <a 
                      :href="selectedProject.liveUrl" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                      Visit Live Site
                    </a>
                  </div>

                  <p class="text-xl text-gray-700 leading-relaxed">
                    {{ selectedProject.shortDesc }}
                  </p>
                </div>

                <!-- Image Gallery with Navigation -->
                <div class="mb-10">
                  <div class="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
                    <img 
                      :src="selectedProject.mockups[currentMockupIndex]" 
                      :alt="`${selectedProject.title} mockup ${currentMockupIndex + 1}`" 
                      class="w-full h-full object-cover"
                    />
                    
                    <!-- Navigation Arrows -->
                    <button
                      v-if="currentMockupIndex > 0"
                      @click="prevMockup"
                      class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                    >
                      <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                      </svg>
                    </button>
                    
                    <button
                      v-if="currentMockupIndex < selectedProject.mockups.length - 1"
                      @click="nextMockup"
                      class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                    >
                      <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>

                    <!-- Image Counter -->
                    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {{ currentMockupIndex + 1 }} / {{ selectedProject.mockups.length }}
                    </div>
                  </div>

                  <!-- Thumbnail Navigation -->
                  <div class="flex gap-3 mt-4 overflow-x-auto pb-2">
                    <button
                      v-for="(mockup, index) in selectedProject.mockups"
                      :key="index"
                      @click="currentMockupIndex = index"
                      :class="[
                        'flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200',
                        currentMockupIndex === index 
                          ? 'border-blue-600 shadow-lg scale-105' 
                          : 'border-gray-200 hover:border-gray-300 opacity-60 hover:opacity-100'
                      ]"
                    >
                      <img :src="mockup" :alt="`Thumbnail ${index + 1}`" class="w-full h-full object-cover" />
                    </button>
                  </div>
                </div>

                <!-- Challenge & Solution -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border-2 border-red-100">
                    <div class="flex items-center gap-3 mb-4">
                      <div class="bg-red-500 text-white p-2.5 rounded-xl">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                        </svg>
                      </div>
                      <h3 class="text-xl font-black text-gray-900">The Challenge</h3>
                    </div>
                    <p class="text-gray-700 leading-relaxed">{{ selectedProject.challenge }}</p>
                  </div>

                  <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-100">
                    <div class="flex items-center gap-3 mb-4">
                      <div class="bg-green-500 text-white p-2.5 rounded-xl">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                        </svg>
                      </div>
                      <h3 class="text-xl font-black text-gray-900">The Solution</h3>
                    </div>
                    <p class="text-gray-700 leading-relaxed">{{ selectedProject.solution }}</p>
                  </div>
                </div>

                <!-- Services Provided -->
                <div class="mb-10">
                  <h3 class="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    Key Features
                  </h3>
                  <div class="flex flex-wrap gap-3">
                    <span
                      v-for="service in selectedProject.services"
                      :key="service"
                      class="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl font-semibold text-sm border border-blue-100"
                    >
                      {{ service }}
                    </span>
                  </div>
                </div>

                <!-- Results Grid -->
                <div class="mb-10">
                  <h3 class="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                    Key Metrics
                  </h3>
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div
                      v-for="result in selectedProject.results"
                      :key="result.label"
                      class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center border-2 border-gray-200"
                    >
                      <div class="text-3xl sm:text-4xl font-black text-gray-900 mb-2">
                        {{ result.metric }}
                      </div>
                      <div class="text-sm text-gray-600 font-medium">
                        {{ result.label }}
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Testimonial (if exists) -->
                <div v-if="selectedProject.testimonial" class="mb-10">
                  <div class="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white relative overflow-hidden">
                    <div class="absolute top-0 right-0 opacity-10">
                      <svg class="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>
                    <div class="relative z-10">
                      <p class="text-xl sm:text-2xl font-medium mb-6 leading-relaxed">
                        "{{ selectedProject.testimonial.text }}"
                      </p>
                      <div class="flex items-center gap-3">
                        <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {{ selectedProject.testimonial.author.charAt(0) }}
                        </div>
                        <div>
                          <div class="font-bold">{{ selectedProject.testimonial.author }}</div>
                          <div class="text-blue-100 text-sm">{{ selectedProject.testimonial.role }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Technologies Used -->
                <div class="mb-10">
                  <h3 class="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
                    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    </svg>
                    Technologies & Tools
                  </h3>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tag in selectedProject.tags"
                      :key="tag"
                      class="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium text-sm"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>

                <!-- CTA -->
                <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center">
                  <h4 class="text-2xl sm:text-3xl font-black text-white mb-3">Inspired by This Design?</h4>
                  <p class="text-gray-300 mb-6 text-lg">Let's create something equally amazing for your business</p>
                  <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      @click="emit('open-contact')"
                     class="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 
                     hover:to-cyan-700 text-white font-bold px-8 py-4 rounded-xl transition-all 
                     duration-200 inline-flex items-center justify-center gap-2 hover:shadow-xl">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                     
                      <span>Start Your Project</span>
                    </button>
                  </div>
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
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(1deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}
</style>