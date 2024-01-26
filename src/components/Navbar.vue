<template>
  <div
    class="max-w-7xl container mx-auto flex justify-between items-center px-4"
  >
    <h1 class="text-4xl py-4 font-semibold">BHL Quest AI</h1>
    <button
      type="button"
      class="rounded-full bg-primary-color text-primary-text p-2"
      title="New chat"
      @click="() => (openSettings = !openSettings)"
    >
      <IconSettings class="w-5 h-5" />
    </button>
  </div>
</template>
<script setup>
import IconSettings from '@/components/Icon/IconSettings.vue'
import { useSettings } from '@/store'

const { openSettings } = useSettings()
</script>
