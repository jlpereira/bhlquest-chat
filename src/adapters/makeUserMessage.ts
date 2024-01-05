import { MESSAGE_TYPE } from '@/constants'
import { ChatMessage } from '@/types'

export function makeUserMessage(message: string): ChatMessage {
  return {
    type: MESSAGE_TYPE.User,
    text: message,
    date: +new Date()
  }
}
