import { ChatMessage } from './ChatMessage'

export type BHLQuestMessageReference = {
  link: string
  text: string[]
  title: string
  pageIndex: number
  pageId: number
  pages: Page[]
}

type Page = {
  id: number
  pageNumber: number
}

export type BHLQuestMessage = ChatMessage & {
  summary: string
  references: BHLQuestMessageReference[]
}
