import { reactive, toRefs } from 'vue'
import { StoreSettings } from '@/types'

const state = reactive<StoreSettings>({
  keepChat: false,
  openSettings: true,
  referenceExpanded: true,
  referencePreformattedText: true,
  referenceScore: true,
  parameters: {
    scoreThreshold: 0.65,
    maxResults: 5
  }
})

export function useSettings() {
  return {
    ...toRefs(state)
  }
}
