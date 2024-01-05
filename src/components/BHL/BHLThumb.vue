<template>
  <img
    :src="`https://www.biodiversitylibrary.org/pagethumb/${pageId},${width},${height}`"
  />
</template>

<script setup lang="ts">
interface Props {
  pageId: number
  width: number
  height: number
}

withDefaults(defineProps<Props>(), {
  width: 500,
  height: 300
})
</script>
