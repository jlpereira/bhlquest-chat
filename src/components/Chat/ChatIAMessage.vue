<template>
  <div>
    <div class="sender">BHL Quest</div>
    <div
      class="message"
      v-html="message.message"
    />
  </div>
</template>

<script setup lang="ts">
import { BHLQuestMessege } from '@/types'

type Props = {
  message: BHLQuestMessege
}

defineProps<Props>()
</script>

<style scoped>
.sender {
  color: var(--primary-color);
  font-weight: bold;
}

.message {
  white-space: pre-wrap;
}
</style>
