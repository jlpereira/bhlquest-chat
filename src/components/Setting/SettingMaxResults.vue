<template>
  <div>
    <label class="block">Max results</label>
    <input
      class="text-black rounded-sm py-1 px-4 w-20"
      type="number"
      v-between-numbers="[1, 5]"
      v-model="maxResults"
    />
  </div>
</template>

<script setup lang="ts">
import { vBetweenNumbers } from '@/directives'
const maxResults = defineModel<number>()
</script>
