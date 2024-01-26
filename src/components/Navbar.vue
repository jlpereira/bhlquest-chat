<template>
  <div
    class="max-w-7xl container mx-auto flex justify-between items-center px-4"
  >
    <h1
      class="text-4xl py-4 font-semibold bg-gradient-to-r from-[#4679a4] to-primary-color bg-clip-text text-transparent"
    >
      BHL Quest <span class="text-[#ffd3a8]">AI</span>
    </h1>
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
