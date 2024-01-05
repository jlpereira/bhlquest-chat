<template>
  <div>
    <div class="flex gap-2 items-center">
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
        {{ reference.link }}
      </a>
    </div>
    <div
      v-if="isExpanded"
      class="mt-2"
    >
      <BHLViewer :page-ids="pageIds" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { BHLQuestMessageReference } from '@/types'
import IconChevronLeft from '@/components/Icon/IconChevronLeft.vue'
import IconChevronDown from '@/components/Icon/IconChevronDown.vue'
import BHLViewer from '@/components/BHL/BHLViewer.vue'

interface Props {
  index: number
  reference: BHLQuestMessageReference
}

const props = defineProps<Props>()

const isExpanded = ref(false)
const pageIds = computed<number[]>(() => {
  const { pageEndId, pageStartId } = props.reference

  return Array.from(
    { length: pageEndId - pageStartId + 1 },
    (_, index) => pageStartId + index
  )
})
</script>
