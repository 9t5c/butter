import { Ref, useEffect, useRef } from 'react'
import { Ripple } from '@butter/core'
import { RippleOptions } from '@butter/core/Ripple'

export const useRipple = <T extends HTMLElement>(
  options?: RippleOptions
): Ref<T> => {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (ref.current) {
      const instance = new Ripple(ref.current, options)

      return () => instance.destory()
    }
  }, [ref.current])

  return ref
}
