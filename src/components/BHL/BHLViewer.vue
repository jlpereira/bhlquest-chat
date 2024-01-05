<template>
  <VCard class="bg- bg-zinc-700 p-4 flex flex-col gap-4">
    <BHLThumb
      v-for="pageId in pageIds"
      :key="pageId"
      :page-id="pageId"
    />
  </VCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VCard from '../VCard.vue'
import BHLThumb from './BHLThumb.vue'

interface Props {
  pageIds: number[]
}

const props = defineProps<Props>()

const currentPageId = ref<number>(props.pageIds[0])
</script>
