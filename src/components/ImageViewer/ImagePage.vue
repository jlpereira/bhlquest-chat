<template>
  <div
    class="relative"
    :style="{ width: imageWidth + 'px' }"
  >
    <img
      class="object-contain"
      :style="{ 'max-height': imageHeight + 'px', 'max-width': imageWidth }"
      :width="imageWidth"
      v-if="renderImage"
      :src="`https://www.biodiversitylibrary.org/pagethumb/${pageId},${imageWidth},${imageHeight}`"
      @load="
        () => {
          isLoading = false
        }
      "
    />
    <div
      v-if="isLoading"
      class="bg-white absolute min-w-fit h-full left-0 top-0"
      :style="{
        'min-height': imageHeight + 'px',
        'min-width': imageWidth + 'px',
        height: props.imageHeight + 'px',
        left: 0,
        top: 0
      }"
    >
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2">
        <div class="flex flex-col justify-center gap-4 items-center">
          <span class="text-xl">Loading page {{ pageIndex + 1 }}</span>
          <Loading />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
import Loading from '../Loading.vue'

interface Props {
  pageIndex: number
  pageId: number
  imageWidth: number
  imageHeight: number
}

const props = withDefaults(defineProps<Props>(), {
  imageWidth: 500,
  imageHeight: 300
})

const isLoading = ref<boolean>(true)
const renderImage = ref<boolean>(false)

const timeoutId = setTimeout(() => {
  renderImage.value = true
}, 500)

onBeforeUnmount(() => {
  clearTimeout(timeoutId)
})
</script>
