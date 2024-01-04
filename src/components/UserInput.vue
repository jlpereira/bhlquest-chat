<template>
  <div class="input-container">
    <textarea
      class="prompt-field"
      type="text"
      v-model="message"
      :rows="rows"
      :disabled="disabled"
      placeholder="Ask something..."
      autofocus
      @keydown.enter.exact.prevent="submitPrompt"
    />
    <button
      class="btn-send"
      type="button"
      :disabled="disabled"
      @click="submitPrompt"
    >
      Send
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  disabled: boolean
}

defineProps<Props>()

const MAX_ROWS = 5

const emit = defineEmits(['submit'])
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
</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: row;
  items-align: center;
  padding: 2rem 0;
}
.prompt-field {
  padding: 1rem;
  width: 100%;
  border: 1px solid #9ca3af;
  border-radius: 0.9rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 1rem;
  resize: none;
}

.prompt-field:focus {
  outline: none;
}

.btn-send {
  border-radius: 0.9rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  color: white;
  background: var(--primary-color);
}

.btn-send:disabled {
  background: var(--btn-disabled-color);
}
</style>
