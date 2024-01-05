<template>
  <div class="flex flex-col gap-10 h-full">
    <component
      v-for="message in messages"
      :key="message.uuid"
      :is="components[message.type]"
      :message="message"
    />
  </div>
</template>

<script setup lang="ts">
import ChatUserMessage from './User/ChatUserMessage.vue'
import ChatIAMessage from './AI/ChatAIMessage.vue'
import { MESSAGE_TYPE } from '@/constants'

type Props = {
  messages: any[]
}

const components = {
  [MESSAGE_TYPE.User]: ChatUserMessage,
  [MESSAGE_TYPE.IA]: ChatIAMessage
}

defineProps<Props>()
</script>
