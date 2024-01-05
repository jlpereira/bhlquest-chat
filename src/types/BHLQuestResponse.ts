export type BHLQuestResponse = {
  metadata: Metadata
  summary: string
  results: Result[]
}

type Metadata = {
  question: string
  maxResultsNum: number
  scoreThreshold: number
  queryTime: number
  version: string
}

type Result = {
  chunkId: number
  itemId: number
  pageStart: number
  pageEnd: number
  score: number
  crossScore: number
  outlink: string
  text: string
}