<template>
  <VCard class="bg- bg-zinc-700 p-4 flex flex-col gap-4">
    <div
      v-bind="containerProps"
      :style="{ height: MAX_HEIGHT + 'px' }"
    >
      <div v-bind="wrapperProps">
        <div
          v-for="item in list"
          :key="item.index"
          class="my-2 flex justify-center"
          :style="{ height: MAX_HEIGHT + 'px' }"
        >
          <ImageThumb
            class="object-contain"
            :image-height="MAX_HEIGHT"
            :image-width="MAX_HEIGHT"
            :height="MAX_HEIGHT + 'px'"
            :style="{ 'max-height': MAX_HEIGHT + 'px' }"
            :page-id="item.data"
          />
        </div>
      </div>
    </div>
  </VCard>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useVirtualList } from '@vueuse/core'
import VCard from '../VCard.vue'
import ImageThumb from './ImageThumb.vue'

interface Props {
  pageIds: number[]
  pageIndex: number
}

const props = defineProps<Props>()

const MAX_HEIGHT = computed(() => window.innerHeight - 300)

const { list, containerProps, wrapperProps, scrollTo } = useVirtualList(
  props.pageIds,
  {
    itemHeight: MAX_HEIGHT.value
  }
)

onMounted(() => {
  scrollTo(props.pageIndex)
})
</script>
