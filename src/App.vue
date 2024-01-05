<template>
  <div class="flex flex-col h-full justify-between">
    <div
      class="max-w-7xl container mx-auto flex justify-between items-center px-4"
    >
      <h1 class="text-5xl py-6 font-bold">BHL Quest AI</h1>
      <button
        type="button"
        class="rounded-full bg-primary-color text-primary-text p-2"
        title="New chat"
        @click="() => (messages = [])"
      >
        <IconPlus class="w-6 h-6" />
      </button>
    </div>

    <div
      ref="chatContainer"
      class="overflow-y-auto h-full border-t scroll scrollbar-gutter-stable"
    >
      <ChatView
        class="max-w-7xl container mx-auto px-6 py-4"
        v-if="messages.length"
        :messages="messages"
      />
      <EmptyContainer
        v-else
        class="max-w-7xl container mx-auto h-full flex-col flex justify-center px-4"
        @select="askBHL"
      />
    </div>

    <div
      v-if="isAsking"
      class="flex flex-row justify-center scale-50"
    >
      <Loading />
    </div>

    <UserInput
      class="max-w-7xl container mx-auto px-4"
      :disabled="isAsking"
      @submit="askBHL"
    />
  </div>
</template>

<script setup lang="ts">
import { defineOptions, ref, nextTick } from 'vue'
import { makeIAMessage, makeUserMessage } from '@/adapters'
import { BHLQuest } from './services'
import EmptyContainer from '@/components/EmptyContainer.vue'
import ChatView from '@/components/Chat/ChatView.vue'
import UserInput from '@/components/Chat/User/ChatUserInput.vue'
import Loading from '@/components/Loading.vue'
import IconPlus from './components/Icon/IconPlus.vue'

defineOptions({
  name: 'ChatBHL'
})

const messages = ref<any[]>([])
const isAsking = ref<boolean>(false)
const chatContainer = ref(null)

async function askBHL(question: string) {
  isAsking.value = true
  messages.value.push(makeUserMessage(question))
  nextTick(scrollToBottom)

  try {
    const response = await BHLQuest.ask({ question })

    messages.value.push(makeIAMessage(response))
    isAsking.value = false
    nextTick(scrollToBottom)
  } catch (e) {
    isAsking.value = false
    console.log(e)
  }
}

function scrollToBottom() {
  chatContainer.value.scrollTop = chatContainer.value.scrollHeight
}
</script>

<style>
.scrollbar-gutter-stable {
  scrollbar-gutter: stable both-edges;
}
</style>
