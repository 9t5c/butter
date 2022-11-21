import { HoverReverso } from '@butter/core'
import type { Action } from './types'

type Props = {
  (node: HTMLElement): ReturnType<Action<any>>
}

export const hoverReverso: Props = node => {
  new HoverReverso(node)

  return {}
}
