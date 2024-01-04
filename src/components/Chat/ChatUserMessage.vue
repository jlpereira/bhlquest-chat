<template>
  <div>
    <div class="sender">You</div>
    <div class="message">{{ message.message }}</div>
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
  color: black;
  font-weight: bold;
}

.message {
  white-space: pre-wrap;
}
</style>
