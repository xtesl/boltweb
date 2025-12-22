import { ref } from 'vue'

const toastState = ref({
  show: false,
  type: 'success',
  message: '',
  duration: 3000
})

export function useToast() {
  const showToast = (type, message, duration = 3000) => {
    toastState.value = {
      show: true,
      type,
      message,
      duration
    }
  }

  const success = (message, duration = 3000) => {
    showToast('success', message, duration)
  }

  const error = (message, duration = 4000) => {
    showToast('error', message, duration)
  }

  const warning = (message, duration = 3500) => {
    showToast('warning', message, duration)
  }

  const info = (message, duration = 3000) => {
    showToast('info', message, duration)
  }

  const close = () => {
    toastState.value.show = false
  }

  return {
    toastState,
    success,
    error,
    warning,
    info,
    close
  }
}