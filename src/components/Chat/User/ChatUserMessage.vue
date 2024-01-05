<template>
  <div>
    <div class="font-bold text-lg">You</div>
    <div class="whitespace-pre-wrap font-semibold text-2xl">
      {{ message.text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChatMessage } from '@/types'

type Props = {
  message: ChatMessage
}

defineProps<Props>()
</script>
