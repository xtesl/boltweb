import { createI18n } from 'vue-i18n'
import en from './locales/en'
import fr from './locales/fr'
import es from './locales/es'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    fr,
    es
  }
})

export default i18n