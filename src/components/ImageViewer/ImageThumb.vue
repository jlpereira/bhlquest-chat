<template>
  <img
    :src="`https://www.biodiversitylibrary.org/pagethumb/${pageId},${imageWidth},${imageHeight}`"
  />
</template>

<script setup lang="ts">
interface Props {
  pageId: number
  imageWidth: number
  imageHeight: number
}

withDefaults(defineProps<Props>(), {
  imageWidth: 500,
  imageHeight: 300
})
</script>
