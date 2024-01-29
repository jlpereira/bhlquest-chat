export type StoreSettings = {
  keepChat: boolean
  openSettings: boolean
  referenceExpanded: boolean
  referencePreformattedText: boolean
  referenceScore: boolean
  parameters: RequestParameters
}

type RequestParameters = {
  maxResults: number
  scoreThreshold: number
}
