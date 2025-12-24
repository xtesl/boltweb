import { useRouter, useRoute } from 'vue-router'

export function useScrollTo() {
  const router = useRouter()
  const route = useRoute()

  const scrollToSection = (sectionId) => {

    if (route.path === '/') {
     
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    } else {
    
      router.push({ path: '/', hash: `#${sectionId}` })
    }
  }

  return { scrollToSection }
}