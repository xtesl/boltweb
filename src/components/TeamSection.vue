<script setup>
import { ref } from 'vue'

const team = [
  {
    name: 'Kwame Asante',
    role: 'Founder & Lead Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    bio: '5+ years building websites for Ghanaian businesses. Passionate about fast, beautiful web solutions.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Ama Mensah',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    bio: 'Creates stunning designs that convert visitors into customers. Detail-oriented perfectionist.',
    social: {
      linkedin: '#',
      twitter: '#',
      behance: '#'
    }
  },
  {
    name: 'Kofi Adomako',
    role: 'SEO Specialist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    bio: 'Gets businesses on Google\'s first page. Data-driven approach to digital marketing.',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Akosua Boateng',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    bio: 'Keeps projects on track and clients happy. Communication expert with 4+ years experience.',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  }
]

const hoveredMember = ref(null)
</script>

<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-secondary-50">
    <div class="max-w-7xl mx-auto">
      
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
          <i class="pi pi-users"></i>
          <span>Our Team</span>
        </div>
        
        <h2 class="text-4xl sm:text-5xl font-black text-secondary-900 mb-4">
          Meet The People Behind
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500"> BoltWeb</span>
        </h2>
        
        <p class="text-xl text-secondary-600 max-w-2xl mx-auto">
          A passionate team of designers, developers, and digital experts committed to building exceptional websites for Ghanaian businesses
        </p>
      </div>

      <!-- Team Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(member, index) in team"
          :key="member.name"
          @mouseenter="hoveredMember = index"
          @mouseleave="hoveredMember = null"
          class="group"
        >
          <!-- Card -->
          <div class="bg-white rounded-2xl overflow-hidden border-2 border-secondary-100 hover:border-primary-300 transition-all duration-300 hover:shadow-xl">
            
            <!-- Image Container -->
            <div class="relative overflow-hidden aspect-square">
              <img 
                :src="member.image" 
                :alt="member.name"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <!-- Overlay on Hover -->
              <div 
                :class="[
                  'absolute inset-0 bg-gradient-to-t from-primary-600/90 to-transparent transition-opacity duration-300',
                  hoveredMember === index ? 'opacity-100' : 'opacity-0'
                ]"
              >
                <!-- Social Links -->
                <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                  <a 
                    v-if="member.social.linkedin"
                    :href="member.social.linkedin"
                    class="w-10 h-10 bg-white text-primary-600 rounded-lg flex items-center justify-center hover:bg-accent-500 hover:text-white transition-all duration-200 transform hover:scale-110"
                  >
                    <i class="pi pi-linkedin text-lg"></i>
                  </a>
                  <a 
                    v-if="member.social.twitter"
                    :href="member.social.twitter"
                    class="w-10 h-10 bg-white text-primary-600 rounded-lg flex items-center justify-center hover:bg-accent-500 hover:text-white transition-all duration-200 transform hover:scale-110"
                  >
                    <i class="pi pi-twitter text-lg"></i>
                  </a>
                  <a 
                    v-if="member.social.github"
                    :href="member.social.github"
                    class="w-10 h-10 bg-white text-primary-600 rounded-lg flex items-center justify-center hover:bg-accent-500 hover:text-white transition-all duration-200 transform hover:scale-110"
                  >
                    <i class="pi pi-github text-lg"></i>
                  </a>
                  <a 
                    v-if="member.social.behance"
                    :href="member.social.behance"
                    class="w-10 h-10 bg-white text-primary-600 rounded-lg flex items-center justify-center hover:bg-accent-500 hover:text-white transition-all duration-200 transform hover:scale-110"
                  >
                    <i class="pi pi-palette text-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-secondary-900 mb-1">
                {{ member.name }}
              </h3>
              <div class="text-primary-600 font-semibold text-sm mb-3">
                {{ member.role }}
              </div>
              <p class="text-secondary-600 text-sm leading-relaxed">
                {{ member.bio }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-16 text-center">
        <div class="bg-gradient-to-br from-secondary-900 to-secondary-800 rounded-3xl p-8 sm:p-12">
          <div class="max-w-3xl mx-auto">
            <h3 class="text-3xl sm:text-4xl font-black text-white mb-4">
              Want to Join Our Team?
            </h3>
            <p class="text-xl text-secondary-300 mb-8">
              We're always looking for talented designers, developers, and digital marketers who are passionate about helping businesses succeed online.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2">
                <i class="pi pi-briefcase"></i>
                <span>View Open Positions</span>
              </button>
              <button class="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 font-bold px-8 py-4 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2">
                <i class="pi pi-envelope"></i>
                <span>Send Your CV</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>