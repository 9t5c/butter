import { Collapse } from '@butter/core'
import React, { CSSProperties, useEffect, useRef } from 'react'

type CollapseProps = {
  [key: string]: unknown
  style?: CSSProperties
}

export const useCollapse = <T extends HTMLElement, C extends HTMLElement>() => {
  const triggerRef = useRef<T>(null)
  const collapseRef = useRef<C>(null)

  function getTriggerProps(): any {
    return {
      ref: triggerRef,
    }
  }

  function getCollapseProps({ style, ...reset }: CollapseProps = {}): any {
    return {
      ref: collapseRef,
      ...reset,
    }
  }

  useEffect(() => {
    if (collapseRef.current && triggerRef.current) {
      new Collapse({
        container: collapseRef.current,
        trigger: triggerRef.current,
      })
    }
  }, [triggerRef.current, collapseRef.current])

  return { getTriggerProps, getCollapseProps }
}
