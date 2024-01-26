<template>
  <div>
    <div class="font-bold text-lg">You</div>
    <div class="whitespace-pre-wrap font-semibold text-2xl flex items-center">
      {{ message.text }}
      <a :href="`?ask=${message.text}`">
        <IconLink class="w-6 h-6 text-primary-color" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ChatMessage } from '@/types'
import IconLink from '@/components/Icon/IconLink.vue'

type Props = {
  message: ChatMessage
}

defineProps<Props>()
</script>
