import { Magnetic } from '@butter/core'
import type { Action } from './types'

type Props = {
  (node: HTMLElement, triggerArea?: number): ReturnType<Action<any>>
}

export const magnetic: Props = (node, triggerArea) => {
  const instance = new Magnetic(node, triggerArea)

  const callback = (e: boolean) => {
    node.dispatchEvent(new CustomEvent('magnetized', { detail: e }))
  }

  instance.render(callback)

  return {
    destroy() {
      instance.destory()
    },
  }
}
