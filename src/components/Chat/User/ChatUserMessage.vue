<template>
  <div>
    <div class="font-bold text-lg">You</div>
    <div class="whitespace-pre-wrap font-semibold text-2xl flex items-center">
      {{ message.parameters.ask }}
      <a :href="url">
        <IconLink class="w-6 h-6 text-primary-color" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { UserChatMessage } from '@/types'
import IconLink from '@/components/Icon/IconLink.vue'

type Props = {
  message: UserChatMessage
}

const props = defineProps<Props>()

const url = computed(() => {
  const urlParameters = new URLSearchParams()

  Object.entries(props.message.parameters).forEach(([key, value]) => {
    urlParameters.set(key, value.toString())
  })

  return '?' + urlParameters.toString()
})
</script>
