import { reactive, toRefs } from 'vue'

type RequestParameters = {
  maxResults: number
  scoreThreshold: number
}

type State = {
  keepChat: boolean
  referenceExpanded: boolean
  openSettings: boolean
  referencePreformattedText: boolean
  parameters: RequestParameters
}

const state = reactive<State>({
  keepChat: false,
  openSettings: true,
  referenceExpanded: true,
  referencePreformattedText: true,
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
