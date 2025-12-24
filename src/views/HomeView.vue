<template>
  <div class="min-h-screen bg-gray-900">
    <SEO 
      title="BoltWeb - Fast & Affordable Websites"
      description="Get your business online quickly with BoltWeb's fast and affordable website solutions."
      image="https://boltweb.onrender.com/images/og-image.jpg"
      url="https://boltweb.onrender.com"
    />
    <StructuredData 
      type="Organization"
      :data="{
        name: 'BoltWeb',
        url: 'https://boltweb.onrender.com',
        logo: 'https://boltweb.onrender.com/og-image.jpg',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+233-55-251-0654',
          contactType: 'customer service'
        },
        sameAs: [
          'https://facebook.com/yourpage',
          'https://x.com/manuel_tamme',
          'https://instagram.com/eddwats'
        ]
      }"
    />
    <!-- Content -->
    <HeroSection @open-contact="emit('open-contact')"/>
    <div id="pricing" class="scroll-mt-20">
      <Pricing />
    </div>
    <FAQsSection @open-contact="emit('open-contact')"/>
    <TeamSection />
    <Workflow @open-contact="emit('open-contact')"/>
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import FAQsSection from '../components/FAQs.vue'
import SEO from '../components/SEO.vue'
import TeamSection from '../components/TeamSection.vue'
import StructuredData from '../components/StructuredData.vue'
import Pricing from '../components/Pricing.vue'
import Workflow from '../components/Workflow.vue'

const emit = defineEmits(['open-contact'])
</script>