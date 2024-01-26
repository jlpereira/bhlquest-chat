import { AskParameters, AskParametersPayload } from '@/types'

export function makeAskPayload(data: AskParameters): AskParametersPayload {
  return {
    ask: data.ask,
    'max-results': data.maxResults,
    'score-threshold': data.scoreThreshold
  }
}
