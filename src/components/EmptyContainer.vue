<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">Hello there!</h2>
    <p class="my-4">
      Ask a question about birds and see links to relevant BHL pages.
    </p>
    <div class="grid grid-cols-2 gap-4">
      <VCard
        v-for="example in ASK_EXAMPLES"
        :key="example"
        class="cursor-pointer"
        @click="emit('select', example)"
      >
        {{ example }}
      </VCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import VCard from '@/components/VCard.vue'

const ASK_EXAMPLES = [
  'Do Bald Eagles migrate?',
  'Do woodpeckers suffer from concussions?',
  'What does a cassowary eat?',
  'What adaptations allow humming birds to hover?'
]

const emit = defineEmits(['select'])
</script>
