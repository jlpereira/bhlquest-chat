<template>
  <div class="bhl-container">
    <h1>BHL Quest IA</h1>

    <ChatView
      v-if="messages.length"
      :messages="messages"
    />
    <EmptyContainer v-else />
    <div
      v-if="isAsking"
      class="loading-request"
    >
      <Loading />
    </div>
    <UserInput
      :disabled="isAsking"
      @submit="askBHL"
    />
  </div>
</template>

<script setup lang="ts">
import { defineOptions, ref } from 'vue'
import { makeIAMessage, makeUserMessage } from '@/adapters'
import { ChatBHL } from './services'
import EmptyContainer from '@/components/EmptyContainer.vue'
import ChatView from '@/components/Chat/ChatView.vue'
import UserInput from '@/components/UserInput.vue'
import Loading from '@/components/Loading.vue'

defineOptions({
  name: 'ChatBHL'
})

const messages = ref<any[]>([])
const isAsking = ref<boolean>(false)

async function askBHL(question: string) {
  isAsking.value = true
  messages.value.push(makeUserMessage(question))

  try {
    const response = await ChatBHL.ask({ question })

    messages.value.push(makeIAMessage(response))
    isAsking.value = false
  } catch (e) {
    isAsking.value = false
    console.log(e)
  }
}
</script>

<style>
.loading-request {
  display: flex;
  justify-content: center;
  transform: scale(0.5);
}

.bhl-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 0 2rem;
}
</style>
