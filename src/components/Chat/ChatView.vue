<template>
  <div class="flex flex-col gap-10 h-full">
    <component
      v-for="message in messages"
      :key="message.uuid"
      :is="components[message.type]"
      :message="message"
    />
    <LoadingMessage v-if="isLoading" />
  </div>
</template>

<script setup lang="ts">
import ChatUserMessage from './User/ChatUserMessage.vue'
import ChatIAMessage from './BHLQuest/BHLQuestMessage.vue'
import LoadingMessage from './LoadingMessage.vue'
import { MESSAGE_TYPE } from '@/constants'

type Props = {
  messages: any[]
  isLoading: boolean
}

const components = {
  [MESSAGE_TYPE.User]: ChatUserMessage,
  [MESSAGE_TYPE.IA]: ChatIAMessage
}

defineProps<Props>()
</script>
