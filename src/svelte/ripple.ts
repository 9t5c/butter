import { Ripple } from '@butter/core'
import { RippleOptions } from '@butter/core/Ripple'
import type { Action } from './types'

type Props = {
  (node: HTMLElement, options?: RippleOptions): ReturnType<Action<any>>
}

export const ripple: Props = (node, options) => {
  const instance = new Ripple(node, options)

  return {
    destroy() {
      instance.destory()
    },
  }
}
