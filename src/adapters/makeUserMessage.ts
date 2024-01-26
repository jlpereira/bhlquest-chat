import { MESSAGE_TYPE } from '@/constants'
import { AskParameters, UserChatMessage } from '@/types'

export function makeUserMessage(parameters: AskParameters): UserChatMessage {
  return {
    type: MESSAGE_TYPE.User,
    date: +new Date(),
    parameters
  }
}
