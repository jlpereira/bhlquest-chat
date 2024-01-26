<template>
  <div class="relative z-0 flex h-full w-full overflow-hidden">
    <PanelSettings />
    <div class="flex flex-col h-full justify-between w-full">
      <div class="w-full bg-secondary-color">
        <Navbar />
      </div>
      <div
        ref="chatContainer"
        class="overflow-y-auto h-full border-t scroll scrollbar-gutter-stable"
      >
        <ChatView
          class="max-w-7xl container mx-auto px-6 py-4"
          v-if="messages.length"
          :messages="messages"
          :is-loading="isAsking"
        />
        <EmptyContainer
          v-else
          class="max-w-7xl container mx-auto h-full flex-col flex justify-center px-4"
          @select="askBHL"
        />
      </div>

      <UserInput
        class="max-w-7xl container mx-auto px-4"
        :disabled="isAsking"
        @submit="askBHL"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineOptions, ref, nextTick, onBeforeMount } from 'vue'
import { makeIAMessage, makeUserMessage } from '@/adapters'
import { BHLQuest } from './services'
import { MESSAGE_TYPE } from './constants'
import { useSettings } from './store'
import EmptyContainer from '@/components/EmptyContainer.vue'
import ChatView from '@/components/Chat/ChatView.vue'
import UserInput from '@/components/Chat/User/ChatUserInput.vue'
import Navbar from '@/components/Navbar.vue'
import PanelSettings from '@/components/Setting/PanelSettings.vue'
defineOptions({
  name: 'ChatBHL'
})

const messages = ref<any[]>([])
const isAsking = ref<boolean>(false)
const chatContainer = ref<HTMLElement | null>(null)
const { keepChat, parameters } = useSettings()

async function askBHL(question: string) {
  const userMessage = makeUserMessage(question)

  messages.value = keepChat.value
    ? [...messages.value, userMessage]
    : [userMessage]

  nextTick(scrollToBottom)

  isAsking.value = true

  try {
    const response = await BHLQuest.ask({ question, ...parameters.value })

    messages.value.push(makeIAMessage(response))
    nextTick(scrollToBottom)
    isAsking.value = false
  } catch (e) {
    isAsking.value = false
    console.log(e)
  }
}

function scrollToBottom() {
  if (chatContainer.value) {
    const index = messages.value.findLastIndex(
      (m) => m.type === MESSAGE_TYPE.User
    )
    const element = chatContainer.value.firstChild.children[index]
    const distance = element.offsetTop - chatContainer.value.offsetTop - 16

    chatContainer.value.scrollTop = distance
  }
}

onBeforeMount(() => {
  const queryString = window.location.search
  const parameters = new URLSearchParams(queryString)
  const ask = parameters.get('ask')

  if (ask) {
    askBHL(ask)
  }
})
</script>

<style>
.scrollbar-gutter-stable {
  scrollbar-gutter: stable both-edges;
}
</style>
