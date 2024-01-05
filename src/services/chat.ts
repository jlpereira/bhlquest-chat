import { makeRequest } from '@/utils'
import { type AskParameters, type BHLQuestResponse } from '@/types'

export class BHLQuest {
  static ask(parameters: AskParameters): Promise<BHLQuestResponse> {
    const { question, ...rest } = parameters

    return makeRequest(
      `https://bhlquest.globalnames.org/api/v1/ask/${parameters.question}`,
      { parameters: rest }
    )
  }
}
