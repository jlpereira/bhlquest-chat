import { ChatMessage } from './ChatMessage'

export type BHLQuestMessageReference = {
  link: string
  text: string
  pageStartId: number
  pageEndId: number
}

export type BHLQuestMessage = ChatMessage & {
  references: BHLQuestMessageReference[]
}
