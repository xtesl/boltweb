<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'success', // success, error, warning, info
    validator: (value) => ['success', 'error', 'warning', 'info'].includes(value)
  },
  message: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    default: 3000 // Auto close after 3 seconds
  }
})

const emit = defineEmits(['close'])

const visible = ref(props.show)

watch(() => props.show, (newVal) => {
  visible.value = newVal
  if (newVal && props.duration > 0) {
    setTimeout(() => {
      closeToast()
    }, props.duration)
  }
})

const closeToast = () => {
  visible.value = false
  emit('close')
}

const toastConfig = {
  success: {
    icon: 'pi-check-circle',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-500',
    iconColor: 'text-green-600',
    textColor: 'text-green-900'
  },
  error: {
    icon: 'pi-times-circle',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-500',
    iconColor: 'text-red-600',
    textColor: 'text-red-900'
  },
  warning: {
    icon: 'pi-exclamation-triangle',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-500',
    iconColor: 'text-amber-600',
    textColor: 'text-amber-900'
  },
  info: {
    icon: 'pi-info-circle',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-500',
    iconColor: 'text-blue-600',
    textColor: 'text-blue-900'
  }
}

const config = toastConfig[props.type]
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="translate-y-[-100px] opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-[-100px] opacity-0"
  >
    <div
      v-if="visible"
      :class="[
        'fixed top-4 right-4 left-4 sm:left-auto sm:min-w-[400px] sm:max-w-md z-[9999] rounded-xl shadow-2xl border-l-4 p-4 flex items-start gap-4',
        config.bgColor,
        config.borderColor
      ]"
      role="alert"
    >
      <!-- Icon -->
      <div class="flex-shrink-0">
        <div :class="['w-10 h-10 rounded-full bg-white flex items-center justify-center', config.iconColor]">
          <i :class="['pi text-xl', config.icon]"></i>
        </div>
      </div>

      <!-- Content -->
      <div class="flex-1 pt-1">
        <p :class="['font-semibold leading-relaxed', config.textColor]">
          {{ message }}
        </p>
      </div>

      <!-- Close Button -->
      <button
        @click="closeToast"
        :class="['flex-shrink-0 w-8 h-8 rounded-lg hover:bg-white/50 transition-colors flex items-center justify-center', config.iconColor]"
        aria-label="Close notification"
      >
        <i class="pi pi-times text-sm"></i>
      </button>
    </div>
  </Transition>
</template>