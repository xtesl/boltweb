<template>
    <section class="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
          How We Bring Your Vision to Life
        </h2>
        <p class="text-xl text-slate-600 max-w-2xl mx-auto">
          From first conversation to launch day, we make it simple
        </p>
      </div>

      <!-- Illustrated Journey -->
      <div class="relative">
        <!-- Connecting Line -->
        <div class="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 transform -translate-y-1/2 z-0"></div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
          
          <!-- Step 1: Consultation -->
          <div class="relative group">
            <div class="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-400 transform hover:-translate-y-2">
              <!-- Illustration -->
              <div class="mb-6 relative h-48 flex items-center justify-center">
                <svg viewBox="0 0 200 200" class="w-full h-full">
                  <!-- Desk -->
                  <rect x="40" y="120" width="120" height="8" fill="#94a3b8" rx="2"/>
                  
                  <!-- Laptop -->
                  <rect x="60" y="90" width="80" height="50" fill="#1e293b" rx="4"/>
                  <rect x="65" y="95" width="70" height="35" fill="#3b82f6" rx="2"/>
                  <path d="M 100 115 L 95 120 L 105 120 Z" fill="#60a5fa"/>
                  
                  <!-- Person (simple) -->
                  <circle cx="100" cy="60" r="15" fill="#fbbf24"/>
                  <rect x="88" y="75" width="24" height="15" fill="#3b82f6" rx="8"/>
                  
                  <!-- Coffee mug -->
                  <rect x="150" y="108" width="15" height="12" fill="#dc2626" rx="2"/>
                  <path d="M 165 112 Q 170 112 170 117" stroke="#dc2626" fill="none" stroke-width="2"/>
                  
                  <!-- Speech bubble -->
                  <circle cx="130" cy="50" r="20" fill="#fef3c7" opacity="0.9"/>
                  <path d="M 125 65 L 120 75 L 130 68 Z" fill="#fef3c7" opacity="0.9"/>
                  <text x="130" y="55" text-anchor="middle" font-size="20" fill="#92400e">💡</text>
                </svg>
              </div>
              
              <!-- Step Number -->
              <div class="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br from-blue-600 
              to-blue-700 rounded flex items-center justify-center text-white font-black text-xl">
                1
              </div>
              
              <!-- Content -->
              <h3 class="text-2xl font-black text-slate-900 mb-3">Chat</h3>
              <p class="text-slate-600 leading-relaxed">
                We discuss your goals, brand, and what you need. No tech jargon, just a friendly conversation.
              </p>
            </div>
          </div>

          <!-- Step 2: Design -->
          <div class="relative group">
            <div class="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-400 transform hover:-translate-y-2">
              <!-- Illustration -->
              <div class="mb-6 relative h-48 flex items-center justify-center">
                <svg viewBox="0 0 200 200" class="w-full h-full">
                  <!-- Canvas/Artboard -->
                  <rect x="40" y="40" width="120" height="100" fill="#f1f5f9" stroke="#64748b" stroke-width="2" rx="4"/>
                  
                  <!-- Design elements -->
                  <rect x="55" y="55" width="40" height="6" fill="#3b82f6" rx="2"/>
                  <rect x="55" y="70" width="90" height="4" fill="#cbd5e1" rx="2"/>
                  <rect x="55" y="80" width="70" height="4" fill="#cbd5e1" rx="2"/>
                  
                  <!-- Image placeholder -->
                  <rect x="55" y="95" width="35" height="35" fill="#e0e7ff" rx="4"/>
                  <circle cx="72.5" cy="110" r="8" fill="#818cf8"/>
                  <polygon points="55,130 65,120 80,125 90,130" fill="#a5b4fc"/>
                  
                  <!-- Color palette -->
                  <circle cx="110" cy="105" r="8" fill="#3b82f6"/>
                  <circle cx="128" cy="105" r="8" fill="#fbbf24"/>
                  <circle cx="146" cy="105" r="8" fill="#10b981"/>
                  
                  <!-- Pencil/Brush -->
                  <line x1="160" y1="60" x2="180" y2="40" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
                  <path d="M 180 40 L 185 35 L 190 40 L 185 45 Z" fill="#fbbf24"/>
                  
                  <!-- Sparkles -->
                  <text x="150" y="130" font-size="20">✨</text>
                  <text x="35" y="60" font-size="16">✨</text>
                </svg>
              </div>
              
              <!-- Step Number -->
              <div class="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 
              rounded flex items-center justify-center text-white font-black text-xl">
                2
              </div>
              
              <!-- Content -->
              <h3 class="text-2xl font-black text-slate-900 mb-3">Design</h3>
              <p class="text-slate-600 leading-relaxed">
                We create beautiful mockups that match your brand. You review and we refine until it's perfect.
              </p>
            </div>
          </div>

          <!-- Step 3: Build -->
          <div class="relative group">
            <div class="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-400 transform hover:-translate-y-2">
              <!-- Illustration -->
              <div class="mb-6 relative h-48 flex items-center justify-center">
                <svg viewBox="0 0 200 200" class="w-full h-full">
                  <!-- Code editor window -->
                  <rect x="30" y="50" width="140" height="100" fill="#1e293b" rx="6"/>
                  
                  <!-- Window controls -->
                  <circle cx="45" cy="65" r="4" fill="#ef4444"/>
                  <circle cx="57" cy="65" r="4" fill="#fbbf24"/>
                  <circle cx="69" cy="65" r="4" fill="#10b981"/>
                  
                  <!-- Code lines -->
                  <line x1="45" y1="85" x2="85" y2="85" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/>
                  <line x1="55" y1="95" x2="95" y2="95" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
                  <line x1="55" y1="105" x2="75" y2="105" stroke="#8b5cf6" stroke-width="3" stroke-linecap="round"/>
                  <line x1="65" y1="115" x2="105" y2="115" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>
                  <line x1="55" y1="125" x2="90" y2="125" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/>
                  <line x1="45" y1="135" x2="80" y2="135" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
                  
                  <!-- Cursor -->
                  <rect x="108" y="113" width="2" height="6" fill="#fbbf24" class="animate-pulse"/>
                  
                  <!-- Gears/cogs -->
                  <circle cx="140" cy="100" r="15" fill="none" stroke="#3b82f6" stroke-width="3"/>
                  <circle cx="140" cy="100" r="8" fill="none" stroke="#3b82f6" stroke-width="2"/>
                  <line x1="140" y1="85" x2="140" y2="92" stroke="#3b82f6" stroke-width="2"/>
                  <line x1="140" y1="108" x2="140" y2="115" stroke="#3b82f6" stroke-width="2"/>
                  <line x1="125" y1="100" x2="132" y2="100" stroke="#3b82f6" stroke-width="2"/>
                  <line x1="148" y1="100" x2="155" y2="100" stroke="#3b82f6" stroke-width="2"/>
                  
                  <!-- Progress indicator -->
                  <text x="100" y="30" text-anchor="middle" font-size="16" fill="#10b981" font-weight="bold">⚡ Building...</text>
                </svg>
              </div>
              
              <!-- Step Number -->
              <div class="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br 
              from-blue-600 to-blue-700 rounded flex items-center justify-center text-white font-black text-xl">
                3
              </div>
              
              <!-- Content -->
              <h3 class="text-2xl font-black text-slate-900 mb-3">Build</h3>
              <p class="text-slate-600 leading-relaxed">
                We code your site using modern tech. Fast, secure, and built to last. You can see progress anytime.
              </p>
            </div>
          </div>

          <!-- Step 4: Launch -->
          <div class="relative group">
            <div class="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-400 transform hover:-translate-y-2">
              <!-- Illustration -->
              <div class="mb-6 relative h-48 flex items-center justify-center">
                <svg viewBox="0 0 200 200" class="w-full h-full">
                  <!-- Rocket -->
                  <ellipse cx="100" cy="140" rx="30" ry="8" fill="#cbd5e1" opacity="0.5"/>
                  
                  <!-- Rocket body -->
                  <path d="M 100 50 L 110 120 L 90 120 Z" fill="#3b82f6"/>
                  <circle cx="100" cy="80" r="8" fill="#e0e7ff"/>
                  
                  <!-- Fins -->
                  <path d="M 90 100 L 75 120 L 90 115 Z" fill="#1e40af"/>
                  <path d="M 110 100 L 125 120 L 110 115 Z" fill="#1e40af"/>
                  
                  <!-- Fire/exhaust -->
                  <path d="M 95 120 L 90 135 L 95 130 Z" fill="#fbbf24"/>
                  <path d="M 100 120 L 98 140 L 100 135 Z" fill="#f59e0b"/>
                  <path d="M 105 120 L 110 135 L 105 130 Z" fill="#fbbf24"/>
                  
                  <!-- Stars -->
                  <text x="50" y="60" font-size="20">⭐</text>
                  <text x="140" y="80" font-size="16">⭐</text>
                  <text x="160" y="50" font-size="20">⭐</text>
                  <text x="30" y="90" font-size="16">⭐</text>
                  <text x="70" y="40" font-size="14">⭐</text>
                  <text x="130" y="110" font-size="14">⭐</text>
                  
                  <!-- Success checkmark -->
                  <circle cx="100" cy="160" r="20" fill="#10b981" opacity="0.9"/>
                  <path d="M 92 160 L 97 165 L 108 154" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              
              <!-- Step Number -->
              <div class="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br 
              from-blue-600 to-blue-700 rounded flex items-center justify-center text-white font-black text-xl">
                4
              </div>
              
              <!-- Content -->
              <h3 class="text-2xl font-black text-slate-900 mb-3">Launch</h3>
              <p class="text-slate-600 leading-relaxed">
                Your site goes live! We handle all the technical stuff. Plus, we're here for ongoing support.
              </p>
            </div>
          </div>

        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-16">
        <p class="text-lg text-slate-600 mb-6">
          Ready to get started? Let's build something amazing together.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
          @click="openContact"
           class="group inline-flex items-center justify-center gap-3 px-8 py-4 
          bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg 
          rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <span>Start Your Project</span>
            
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const emit = defineEmits(['open-contact'])
const openContact = () => {
   emit('open-contact')
}
</script>

<style scoped>
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    
    .group:hover svg {
      animation: float 2s ease-in-out infinite;
    }
</style>