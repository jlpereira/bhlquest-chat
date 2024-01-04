import { MESSAGE_TYPE } from '@/constants'
import { BHLQuestResponse, BHLQuestMessege } from '@/types'

export function makeIAMessage(response: BHLQuestResponse): BHLQuestMessege {
  return {
    type: MESSAGE_TYPE.IA,
    message: response.summary,
    date: new Date()
  }
}
