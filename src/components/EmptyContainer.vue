<template>
  <div>
    <h2>Hello there!</h2>
    <p>Ask a question about birds and see links to relevant BHL pages.</p>
    <div class="examples">
      <VCard
        v-for="example in ASK_EXAMPLES"
        :key="example"
        @click="emit('select')"
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

<style scoped>
.card {
  border: 1px solid var(--border-color);
  padding: 1rem;
}

.examples {
  display: grid;
  grid-template-columns: 1ft 1ft;
  gap: 1rem;
  cursor: pointer;
}
</style>
