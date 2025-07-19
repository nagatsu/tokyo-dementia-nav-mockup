<template>
  <div class="contact-card bg-white rounded-xl shadow-md p-6 border-l-4" :class="borderColorClass">
    <div class="flex items-center mb-4">
      <div class="w-12 h-12 rounded-lg flex items-center justify-center mr-4" :class="iconBgClass">
        <component :is="iconComponent" class="w-6 h-6" :class="iconColorClass" />
      </div>
      <div>
        <h3 class="text-lg font-bold text-gray-900">{{ title }}</h3>
        <span class="px-2 py-1 text-xs font-medium rounded" :class="typeClass">{{ type }}</span>
      </div>
    </div>
    
    <p class="text-gray-600 mb-6">{{ description }}</p>
    
    <div class="space-y-4">
      <div v-for="(contact, index) in contacts" :key="index" class="border border-gray-200 rounded-lg p-4">
        <div class="flex items-center justify-between">
          <div class="flex-1">
            <h4 class="font-semibold text-gray-900 mb-1">{{ contact.name }}</h4>
            <p class="text-sm text-gray-600">{{ contact.note }}</p>
          </div>
          <div class="text-right">
            <div v-if="contact.number" class="text-xl font-bold" :class="numberColorClass">
              {{ contact.number }}
            </div>
            <div v-else class="text-sm text-gray-500">
              地域検索
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { 
  ExclamationTriangleIcon,
  HeartIcon,
  PhoneIcon
} from '@heroicons/vue/24/outline'

interface Contact {
  name: string
  number: string
  note: string
}

interface Props {
  type: string
  title: string
  description: string
  contacts: Contact[]
  icon: 'emergency' | 'support' | 'phone'
  color: 'red' | 'support' | 'blue'
}

const props = defineProps<Props>()

const iconComponent = computed(() => {
  const iconMap = {
    emergency: ExclamationTriangleIcon,
    support: HeartIcon,
    phone: PhoneIcon
  }
  return iconMap[props.icon]
})

const colorClasses = computed(() => {
  const colorMap = {
    red: {
      border: 'border-red-500',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      type: 'bg-red-100 text-red-700',
      number: 'text-red-600'
    },
    support: {
      border: 'border-support-500',
      iconBg: 'bg-support-100',
      iconColor: 'text-support-600',
      type: 'bg-support-100 text-support-700',
      number: 'text-support-600'
    },
    blue: {
      border: 'border-blue-500',
      iconBg: 'bg-blue-100', 
      iconColor: 'text-blue-600',
      type: 'bg-blue-100 text-blue-700',
      number: 'text-blue-600'
    }
  }
  return colorMap[props.color]
})

const borderColorClass = computed(() => colorClasses.value.border)
const iconBgClass = computed(() => colorClasses.value.iconBg)
const iconColorClass = computed(() => colorClasses.value.iconColor)
const typeClass = computed(() => colorClasses.value.type)
const numberColorClass = computed(() => colorClasses.value.number)
</script>

<style scoped>
.contact-card {
  transition: all 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>