import { MESSAGE_TYPE } from '@/constants'
import { BHLQuestResponse, BHLQuestMessage } from '@/types'

export function makeIAMessage(response: BHLQuestResponse): BHLQuestMessage {
  return {
    type: MESSAGE_TYPE.IA,
    message: response.summary,
    date: new Date()
  }
}
