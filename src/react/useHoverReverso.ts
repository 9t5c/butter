import { Ref, useEffect, useRef } from 'react'
import { HoverReverso } from '@butter/core'

/**
 * 请不要使用 Flex、Grid 布局，会使结构遭到破坏
 */
export const useHoverReverso = <T extends HTMLElement>(): Ref<T> => {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (ref.current) {
      new HoverReverso(ref.current)
    }
  }, [ref.current])

  return ref
}
