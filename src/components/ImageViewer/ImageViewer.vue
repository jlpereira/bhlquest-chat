<template>
  <VCard class="bg- bg-zinc-700 p-4 flex flex-col gap-4">
    <div
      v-bind="containerProps"
      :style="{ height: imageHeight + 'px' }"
    >
      <div v-bind="wrapperProps">
        <div
          v-for="item in list"
          :key="item.index"
          class="my-2 flex justify-center"
          :style="{ height: imageHeight + 'px' }"
        >
          <ImagePage
            :image-height="imageHeight"
            :image-width="imageWidth"
            :page-index="item.index"
            :height="imageHeight + 'px'"
            :style="{ 'max-height': imageHeight + 'px' }"
            :page-id="item.data"
          />
        </div>
      </div>
    </div>
  </VCard>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useVirtualList, useWindowSize } from '@vueuse/core'
import VCard from '../VCard.vue'
import ImagePage from './ImagePage.vue'

interface Props {
  pageIds: number[]
  pageIndex: number
}

const props = defineProps<Props>()

const { height } = useWindowSize()
const imageHeight = computed(() => height.value - 250)
const imageWidth = computed(() => Math.trunc(imageHeight.value * 0.75))
const { list, containerProps, wrapperProps, scrollTo } = useVirtualList(
  props.pageIds,
  {
    itemHeight: imageHeight.value
  }
)

onMounted(() => {
  scrollTo(props.pageIndex)
})
</script>
