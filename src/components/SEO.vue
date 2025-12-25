<script setup>
import { useHead } from '@vueuse/head'

const props = defineProps({
  title: {
    type: String,
    default: 'BoltWeb Ghana'
  },
  description: {
    type: String,
    default: 'BoltWeb Ghana delivers fast websites for business in no time. Get your business online in small time with few cedis.'
  },
  image: {
    type: String,
    default: 'https://boltweb.onrender.com/images/og-image.jpg' // Default Open Graph image
  },
  url: {
    type: String,
    default: 'https://boltweb.onrender.com'
  },
  type: {
    type: String,
    default: 'website'
  }
})

useHead({
  title: props.title,
  meta: [
    // Basic Meta Tags
    { name: 'description', content: props.description },
    { name: 'keywords', content: 'BoltWeb Ghana, website design Sunyani, web development Ghana, BoltWeb Accra, professional websites Ghana' },
    { name: 'author', content: 'Emmanuel' },
    
    // Open Graph / Facebook
    { property: 'og:title', content: props.title },
    { property: 'og:description', content: props.description },
    { property: 'og:image', content: props.image },
    { property: 'og:url', content: props.url },
    { property: 'og:type', content: props.type },
    { property: 'og:site_name', content: 'BoltWeb Ghana' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: props.title },
    { name: 'twitter:description', content: props.description },
    { name: 'twitter:image', content: props.image },
    { name: 'twitter:site', content: '@manuel_tamme' },
    
    // WhatsApp (uses Open Graph)
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
  ],
  link: [
    { rel: 'canonical', href: props.url }
  ]
})
</script>

<template>
  <div></div>
</template>