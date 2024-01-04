<template>
  <div class="chat-view">
    <component
      v-for="message in messages"
      :key="message.date.toString()"
      class="message"
      :is="components[message.type]"
      :message="message"
    />
  </div>
</template>

<script setup lang="ts">
import ChatUserMessage from './ChatUserMessage.vue'
import ChatIAMessage from './ChatIAMessage.vue'
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

<style>
.chat-view {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  overflow-y: auto;
}
</style>
