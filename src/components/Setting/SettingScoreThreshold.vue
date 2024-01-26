<template>
  <label class="block">Score threshold</label>
  <input
    class="text-black rounded-sm py-1 px-4 w-20"
    type="number"
    step="0.05"
    min="0.1"
    max="1.0"
    v-between-numbers="[0.1, 1]"
    v-model.number="scoreThreshold"
  />
</template>

<script setup lang="ts">
import { vBetweenNumbers } from '@/directives'
const scoreThreshold = defineModel<number>()
</script>
