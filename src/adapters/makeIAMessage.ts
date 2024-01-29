import { MESSAGE_TYPE } from '@/constants'
import {
  BHLQuestResponse,
  BHLQuestMessage,
  BHLQuestMessageReference
} from '@/types'

export function makeIAMessage(response: BHLQuestResponse): BHLQuestMessage {
  return {
    type: MESSAGE_TYPE.IA,
    summary: response.summary,
    date: +new Date(),
    references: response.results?.map(
      (item): BHLQuestMessageReference =>
        ({
          link: item.outlink,
          pageId: item.pageId,
          score: item.score,
          text: item.text,
          title: item.reference,
          pageIndex: item.pageIndex,
          pages: item.pages.map((item) => ({
            id: item.id,
            pageNumber: item.pageNum
          }))
        } || [])
    )
  }
}
