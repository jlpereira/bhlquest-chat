import { AskParameters } from '.'

export type ChatMessage = {
  date: number
  type: string
}

export type UserChatMessage = ChatMessage & {
  parameters: AskParameters
}
