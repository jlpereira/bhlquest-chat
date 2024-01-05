<template>
  <img :src="`https://www.biodiversitylibrary.org/pageimage/${pageId}`" />
</template>

<script setup lang="ts">
interface Props {
  pageId: number
}

defineProps<Props>()
</script>
