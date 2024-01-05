<template>
  <div class="flex flex-row pb-8">
    <textarea
      ref="promptInput"
      class="p-4 rounded-l-xl border border-base-border w-full resize-none focus:outline-none"
      type="text"
      v-model="message"
      :rows="rows"
      :disabled="disabled"
      placeholder="Ask something..."
      autofocus
      @keydown.enter.exact.prevent="submitPrompt"
    />
    <button
      class="btn-send bg-primary-color text-primary-text px-4 rounded-r-xl disabled:bg-gray-300 border-primary-color border disabled:border-gray-400"
      type="button"
      :disabled="disabled"
      @click="submitPrompt"
    >
      Send
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'

interface Props {
  disabled: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['submit'])

const MAX_ROWS = 5
const promptInput = ref<HTMLElement>(null)
const message = ref<string>('')

const rows = computed(() => {
  const size = message.value.split('\n').length || 1

  return size < MAX_ROWS ? size : MAX_ROWS
})

function submitPrompt() {
  if (message.value.length) {
    emit('submit', message.value)
    message.value = ''
  }
}

watch(
  () => props.disabled,
  (newVal) => {
    if (!newVal) {
      nextTick(() => {
        promptInput.value.focus()
      })
    }
  }
)
</script>
