<script setup>
import { ref } from 'vue'

const activeCategory = ref('general')
const searchQuery = ref('')

const categories = [
  { id: 'general', name: 'General', icon: 'pi-info-circle' },
  { id: 'pricing', name: 'Pricing & Payment', icon: 'pi-dollar' },
  { id: 'process', name: 'Process & Timeline', icon: 'pi-clock' },
  { id: 'support', name: 'Support & Updates', icon: 'pi-headphones' }
]

const faqs = ref({
  general: [
    {
      question: 'How long does it take to build a website?',
      answer: 'Most websites are completed in 7-14 days depending on complexity. Simple business websites take 7-10 days, while e-commerce sites typically take 14-21 days. We keep you updated throughout the process.',
      open: false
    },
    {
      question: 'What if I don\'t like the design?',
      answer: 'We offer multiple revision rounds (2-4 depending on your package) and work closely with you until you\'re 100% satisfied. If we can\'t meet your expectations, we offer a full refund under our money-back guarantee.',
      open: false
    },
    {
      question: 'Will my website work on mobile phones?',
      answer: 'Absolutely! All our websites are mobile-responsive by default. Since most Ghanaians browse on mobile, we design with a mobile-first approach to ensure your site looks perfect on all devices.',
      open: false
    },
    {
      question: 'Can I update my website myself after launch?',
      answer: 'Yes! We build on easy-to-use platforms like WordPress. We provide training (video tutorial + live session) so you can make basic updates yourself. For complex changes, we\'re always here to help.',
      open: false
    }
  ],
  pricing: [
    {
      question: 'Do you accept Mobile Money?',
      answer: 'Yes! We accept MTN Mobile Money, Vodafone Cash, AirtelTigo Money, bank transfers, and card payments through Paystack. Choose whatever is most convenient for you.',
      open: false
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'No hidden fees, ever. The price you see is what you pay. This includes design, development, domain (1 year), hosting (1 year), and training. Additional services like extra revisions or content writing are clearly communicated upfront.',
      open: false
    },
    {
      question: 'What payment terms do you offer?',
      answer: 'We use a 50-50 payment structure: 50% upfront to start the project, and 50% before launching your website live. For larger projects (GH₵10,000+), we can discuss custom payment plans.',
      open: false
    },
    {
      question: 'What happens after the first year of hosting?',
      answer: 'After your first year of free hosting, renewal costs approximately GH₵300-500 per year depending on your website size. We\'ll remind you 30 days before expiry and help with renewal.',
      open: false
    }
  ],
  process: [
    {
      question: 'What do I need to provide to get started?',
      answer: 'You need: your business information, logo (if you have one), text content for pages, images/photos, and preferred domain name. If you don\'t have content ready, we can help create it for an additional fee.',
      open: false
    },
    {
      question: 'How does the design process work?',
      answer: 'We start with a consultation call, then create a design mockup for your approval. Once approved, we build the website, conduct review sessions with you, make revisions, and launch when you\'re happy.',
      open: false
    },
    {
      question: 'Can I see the website before it goes live?',
      answer: 'Yes! We provide a staging link where you can review the website before launch. You can test everything, request changes, and approve it before we make it live to the public.',
      open: false
    },
    {
      question: 'What if I need to make changes during development?',
      answer: 'Minor changes are included in your revision rounds. Major changes (like completely changing the design direction) may extend the timeline and could incur additional costs, which we\'ll discuss with you first.',
      open: false
    }
  ],
  support: [
    {
      question: 'Do you provide support after launch?',
      answer: 'Yes! All packages include free support (1-2 months depending on package). After that, we offer affordable maintenance plans starting at GH₵200/month for updates, backups, and technical support.',
      open: false
    },
    {
      question: 'What if my website breaks or has issues?',
      answer: 'Contact us immediately via WhatsApp, phone, or email. For maintenance plan clients, we respond within 2 hours. For others, we typically respond within 24 hours and fix critical issues as priority.',
      open: false
    },
    {
      question: 'Can you help with SEO and Google rankings?',
      answer: 'Yes! All websites include basic SEO setup (meta tags, sitemap, speed optimization). For advanced SEO services (keyword research, content strategy, link building), we offer monthly SEO packages starting at GH₵800/month.',
      open: false
    },
    {
      question: 'How do I contact support?',
      answer: 'Reach us via WhatsApp (+233 XX XXX XXXX), email (info@boltweb.com.gh), or phone. WhatsApp is fastest for quick questions. For complex issues, email works best so we can document everything.',
      open: false
    }
  ]
})

const toggleFaq = (category, index) => {
  faqs.value[category][index].open = !faqs.value[category][index].open
}

const filteredFaqs = (category) => {
  if (!searchQuery.value) return faqs.value[category]
  
  const query = searchQuery.value.toLowerCase()
  return faqs.value[category].filter(faq => 
    faq.question.toLowerCase().includes(query) || 
    faq.answer.toLowerCase().includes(query)
  )
}
</script>

<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-secondary-50">
    <div class="max-w-7xl mx-auto">
      
      <!-- Header -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
          <i class="pi pi-question-circle"></i>
          <span>Frequently Asked Questions</span>
        </div>
        
        <h2 class="text-4xl sm:text-5xl font-black text-secondary-900 mb-4">
          Got Questions?
        </h2>
        
        <p class="text-xl text-secondary-600 max-w-2xl mx-auto mb-8">
          Find answers to common questions about our services, pricing, and process
        </p>

        <!-- Search Bar -->
        <div class="max-w-2xl mx-auto">
          <div class="relative">
            <i class="pi pi-search absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400"></i>
            <input 
              v-model="searchQuery"
              type="text"
              placeholder="Search questions..."
              class="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-secondary-200 focus:border-primary-500 focus:outline-none transition-colors text-secondary-900 placeholder-secondary-400"
            />
          </div>
        </div>
      </div>

      <!-- Category Tabs -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="activeCategory = category.id"
          :class="[
            'flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200',
            activeCategory === category.id
              ? 'bg-primary-600 text-white shadow-lg'
              : 'bg-white text-secondary-700 border-2 border-secondary-200 hover:border-primary-300'
          ]"
        >
          <i :class="['pi', category.icon]"></i>
          <span>{{ category.name }}</span>
        </button>
      </div>

      <!-- FAQ Items -->
      <div class="max-w-4xl mx-auto">
        <div 
          v-if="filteredFaqs(activeCategory).length === 0"
          class="text-center py-12"
        >
          <i class="pi pi-search text-6xl text-secondary-300 mb-4"></i>
          <p class="text-xl text-secondary-600">No questions found matching "{{ searchQuery }}"</p>
          <button 
            @click="searchQuery = ''"
            class="mt-4 text-primary-600 hover:text-primary-700 font-semibold"
          >
            Clear search
          </button>
        </div>

        <div v-else class="space-y-4">
          <div
            v-for="(faq, index) in filteredFaqs(activeCategory)"
            :key="index"
            class="bg-white rounded-xl border-2 border-secondary-100 overflow-hidden transition-all duration-200 hover:border-primary-200 hover:shadow-md"
          >
            <button
              @click="toggleFaq(activeCategory, index)"
              class="w-full flex items-center justify-between p-6 text-left group"
            >
              <span class="font-bold text-lg text-secondary-900 pr-4 group-hover:text-primary-600 transition-colors">
                {{ faq.question }}
              </span>
              <div 
                :class="[
                  'w-8 h-8 flex items-center justify-center rounded-lg bg-primary-100 text-primary-600 flex-shrink-0 transition-all duration-200',
                  faq.open ? 'rotate-180' : ''
                ]"
              >
                <i class="pi pi-chevron-down"></i>
              </div>
            </button>
            
            <div
              v-show="faq.open"
              class="px-6 pb-6 text-secondary-600 leading-relaxed"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Support CTA -->
      <div class="mt-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 sm:p-12 text-center">
        <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
          <i class="pi pi-comments text-white text-3xl"></i>
        </div>
        
        <h3 class="text-3xl font-black text-white mb-4">
          Still Have Questions?
        </h3>
        
        <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Can't find what you're looking for? Our team is here to help you get the answers you need.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2">
            <i class="pi pi-whatsapp text-xl"></i>
            <span>Chat on WhatsApp</span>
          </button>
          <button class="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 font-bold px-8 py-4 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2">
            <i class="pi pi-phone"></i>
            <span>Call Us Now</span>
          </button>
        </div>

        <div class="flex items-center justify-center gap-6 mt-8 text-primary-100 text-sm">
          <div class="flex items-center gap-2">
            <i class="pi pi-check-circle"></i>
            <span>Quick Response</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="pi pi-check-circle"></i>
            <span>Expert Support</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="pi pi-check-circle"></i>
            <span>No Obligation</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>