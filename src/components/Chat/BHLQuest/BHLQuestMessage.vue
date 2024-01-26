<template>
  <div>
    <div class="font-bold text-lg text-primary-color">BHL Quest</div>
    <div
      v-if="message.text"
      class="whitespace-pre-wrap"
      v-html="message.text"
    />
    <div v-else>I cannot provide an answer to your question.</div>
    <template v-if="message.references">
      <h3 class="my-2 font-semibold">References</h3>
      <ul>
        <li
          v-for="(reference, index) in message.references"
          :key="message.date"
          class="my-2"
        >
          <ChatAIReference
            :reference="reference"
            :index="index"
          />
        </li>
      </ul>
    </template>
  </div>
</template>

<script setup lang="ts">
import { BHLQuestMessage } from '@/types'
import ChatAIReference from './BHLQuestReference.vue'

type Props = {
  message: BHLQuestMessage
}

defineProps<Props>()
</script>
