import { MESSAGE_TYPE } from '@/constants'
import { BHLQuestResponse, BHLQuestMessage } from '@/types'

export function makeIAMessage(response: BHLQuestResponse): BHLQuestMessage {
  return {
    type: MESSAGE_TYPE.IA,
    text: response.summary,
    date: +new Date(),
    references: response.results.map((item) => ({
      link: item.outlink,
      text: item.text,
      pageStartId: item.pageStart,
      pageEndId: item.pageEnd
    }))
  }
}
