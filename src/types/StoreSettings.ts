export type StoreSettings = {
  keepChat: boolean
  referenceExpanded: boolean
  openSettings: boolean
  referencePreformattedText: boolean
  parameters: RequestParameters
}

type RequestParameters = {
  maxResults: number
  scoreThreshold: number
}
