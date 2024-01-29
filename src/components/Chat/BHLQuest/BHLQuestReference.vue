<template>
  <div>
    <div
      ref="referenceRef"
      class="flex gap-2 items-center"
    >
      <button
        type="button"
        class="rounded-full bg-primary-color text-primary-text p-1.5"
        @click="() => (isExpanded = !isExpanded)"
      >
        <IconChevronDown
          v-if="isExpanded"
          class="w-3 h-3"
        />
        <IconChevronLeft
          v-else
          class="w-3 h-3"
        />
      </button>
      <a
        :href="reference.link"
        target="_blank"
        class="text-primary-color break-all"
      >
        {{ reference.title }}
        <p
          v-if="referenceScore"
          class="text-sm text-gray-500"
        >
          Score {{ reference.score.toFixed(4) }}
        </p>
      </a>
    </div>
    <template v-if="isExpanded">
      <div
        v-for="(text, index) in reference.text"
        class="py-4 px-8"
      >
        <a
          class="text-primary-color"
          :href="`https://www.biodiversitylibrary.org/page/${
            reference.pages[reference.pageIndex + index].id
          }`"
          >Page #{{
            reference.pages[reference.pageIndex + index].pageNumber
          }}</a
        >
        <component
          :is="textComponent"
          class="text-wrap font-main"
          v-html="parseOCRText(text)"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { BHLQuestMessageReference } from '@/types'
import { useSettings } from '@/store'
import IconChevronLeft from '@/components/Icon/IconChevronLeft.vue'
import IconChevronDown from '@/components/Icon/IconChevronDown.vue'

interface Props {
  index: number
  reference: BHLQuestMessageReference
}

defineProps<Props>()
const referenceRef = ref<HTMLElement | null>(null)
const { referencePreformattedText, referenceExpanded, referenceScore } =
  useSettings()

const textComponent = computed(() =>
  referencePreformattedText.value ? 'pre' : 'p'
)
const isExpanded = ref(true)

function parseOCRText(text: string) {
  return text
    .replace(/(\r?\r){2,}/g, '')
    .replace(/(\r\n)+/g, '\r\n')
    .trim()
}

watch(
  referenceExpanded,
  (newVal) => {
    isExpanded.value = newVal
  },
  { immediate: true }
)
</script>

<style>
em {
  background-color: rgb(var(--text-highlight-color));
}
</style>
