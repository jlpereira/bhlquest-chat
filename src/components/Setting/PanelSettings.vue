<template>
  <div
    v-if="openSettings"
    class="h-screen w-full fixed sm:relative sm:w-96 text-white bg-zinc-700 bg-opacity-100 transform translate-x-0 transition-transform duration-300 ease-in-out"
  >
    <div
      class="border-b border-zinc-500 flex justify-between items-center py-5 px-6"
    >
      <h1 class="text-xl">Settings</h1>
      <IconClose
        class="w-6 h-6 text-white sm:hidden"
        @click="() => (openSettings = false)"
      />
    </div>
    <div class="px-6 py-4">
      <div class="mb-6">
        <h2 class="text-lg font-semibold my-2">Chat</h2>
        <ul>
          <li>
            <label>
              <input
                type="checkbox"
                v-model="keepChat"
              />
              Keep chat history
            </label>
          </li>
        </ul>
      </div>
      <div class="mb-6">
        <h2 class="text-lg font-semibold my-2">References</h2>
        <ul>
          <li>
            <label>
              <input
                type="checkbox"
                v-model="referenceExpanded"
              />
              Expand
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                v-model="referencePreformattedText"
              />
              Preformatted text
            </label>
          </li>
        </ul>
      </div>
      <div class="mb-4">
        <h2 class="text-lg font-semibold my-2">Request</h2>
        <SettingMaxRecords v-model="parameters.maxResults" />
        <SettingScoreThreshold v-model="parameters.scoreThreshold" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSettings } from '@/store'
import SettingScoreThreshold from './SettingScoreThreshold.vue'
import SettingMaxRecords from './SettingMaxResults.vue'
import IconClose from '../Icon/IconClose.vue'

const {
  keepChat,
  openSettings,
  referenceExpanded,
  referencePreformattedText,
  parameters
} = useSettings()
</script>
