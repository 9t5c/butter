import { useCallback, useEffect, useRef, useState } from 'react'
import { Magnetic } from '@butter/core'

export const useMagnetic = <T extends HTMLElement>(
  trigger: T,
  triggerArea: number = 200
): boolean => {
  const magneticRef = useRef<Magnetic | null>(null)
  const [magneted, setMagneted] = useState(false)

  const handleMagnetState = useCallback((val: boolean) => {
    setMagneted(val)
  }, [])

  useEffect(() => {
    if (trigger) {
      const instance = new Magnetic(trigger, triggerArea)
      magneticRef.current = instance
      instance.render(handleMagnetState)

      return () => {
        magneticRef.current?.destory()
      }
    }
  }, [trigger, triggerArea])

  return magneted
}
