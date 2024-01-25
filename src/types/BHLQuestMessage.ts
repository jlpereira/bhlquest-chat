import { ChatMessage } from './ChatMessage'

export type BHLQuestMessageReference = {
  link: string
  text: string[]
  title: string
  pageIndex: number
  pageId: number
  pages: number[]
}

export type BHLQuestMessage = ChatMessage & {
  references: BHLQuestMessageReference[]
}
