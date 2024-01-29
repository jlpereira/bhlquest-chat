<template>
  <div>
    <div class="font-bold text-lg text-primary-color">BHL Quest</div>
    <div
      v-if="message.summary"
      class="whitespace-pre-wrap"
      v-html="message.summary"
    />
    <div v-else>I cannot provide an answer to your question.</div>
    <template v-if="message.references">
      <h3 class="mt-4 font-semibold text-lg">References</h3>
      <ul>
        <li
          v-for="(reference, index) in message.references"
          :key="message.date"
          class="my-2"
        >
          <BHLQuestReference
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
import BHLQuestReference from './BHLQuestReference.vue'

type Props = {
  message: BHLQuestMessage
}

defineProps<Props>()
</script>
