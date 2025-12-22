<script setup>
import { useHead } from '@vueuse/head'

const props = defineProps({
  type: {
    type: String,
    default: 'Organization'
  },
  data: {
    type: Object,
    required: true
  }
})

const structuredData = {
  '@context': 'https://schema.org',
  '@type': props.type,
  ...props.data
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(structuredData)
    }
  ]
})
</script>

<template>
  <div></div>
</template>