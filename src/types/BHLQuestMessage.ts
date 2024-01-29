import { ChatMessage } from './ChatMessage'

export type BHLQuestMessageReference = {
  link: string
  pageId: number
  pageIndex: number
  pages: Page[]
  score: number
  text: string[]
  title: string
}

type Page = {
  id: number
  pageNumber: number
}

export type BHLQuestMessage = ChatMessage & {
  summary: string
  references: BHLQuestMessageReference[]
}
