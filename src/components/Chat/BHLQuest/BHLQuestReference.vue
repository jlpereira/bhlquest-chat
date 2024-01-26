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
          v-html="text.trim()"
        />
      </div>
      <div
        v-if="isImageViewerVisible"
        class="mt-2"
      >
        <ImageViewer
          :page-ids="reference.pages"
          :page-index="reference.pageIndex"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, watch, computed } from 'vue'
import { BHLQuestMessageReference } from '@/types'
import { useSettings } from '@/store'
import IconChevronLeft from '@/components/Icon/IconChevronLeft.vue'
import IconChevronDown from '@/components/Icon/IconChevronDown.vue'
import ImageViewer from '@/components/ImageViewer/ImageViewer.vue'

interface Props {
  index: number
  reference: BHLQuestMessageReference
}

const props = defineProps<Props>()
const referenceRef = ref<HTMLElement | null>(null)
const { referencePreformattedText, referenceExpanded } = useSettings()

const textComponent = computed(() =>
  referencePreformattedText.value ? 'pre' : 'p'
)

const isExpanded = ref(true)
const isImageViewerVisible = ref(false)
watch(isExpanded, () => {
  if (isExpanded) {
    nextTick(() => {
      referenceRef.value?.scrollIntoView()
    })
  }
})

watch(referenceExpanded, (newVal) => {
  isExpanded.value = newVal
})
</script>

<style>
em {
  background-color: rgb(var(--text-highlight-color));
}
</style>
