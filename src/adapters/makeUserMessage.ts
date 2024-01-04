import { MESSAGE_TYPE } from '@/constants'

export function makeUserMessage(message: string) {
  return {
    type: MESSAGE_TYPE.User,
    message,
    date: new Date()
  }
}
