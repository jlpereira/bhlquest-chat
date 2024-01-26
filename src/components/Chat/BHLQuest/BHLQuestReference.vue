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
      </a>
    </div>
    <div
      v-if="isExpanded"
      class="mt-2"
    >
      <ImageViewer
        :page-ids="reference.pages"
        :page-index="reference.pageIndex"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { BHLQuestMessageReference } from '@/types'
import IconChevronLeft from '@/components/Icon/IconChevronLeft.vue'
import IconChevronDown from '@/components/Icon/IconChevronDown.vue'
import ImageViewer from '@/components/ImageViewer/ImageViewer.vue'

interface Props {
  index: number
  reference: BHLQuestMessageReference
}

const props = defineProps<Props>()
const referenceRef = ref<HTMLElement | null>(null)

const isExpanded = ref(false)

watch(isExpanded, () => {
  if (isExpanded) {
    nextTick(() => {
      referenceRef.value?.scrollIntoView()
    })
  }
})
</script>
