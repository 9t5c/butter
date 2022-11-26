type CollapseProps = {
  container: HTMLElement
  trigger: HTMLElement
  options?: {
    maxHeight: number
    defaultExpanded: boolean
    duration: number
  }
}

export class Collapse {
  container: HTMLElement
  trigger: HTMLElement
  expanded: boolean = false
  maxHeight = 0
  duration = 0.2 // unit: s

  init = () => {
    this.container.style.transition = `max-height ${this.duration}s`

    if (this.expanded) {
      this.container.style.maxHeight = 'auto'
    } else {
      this.container.style.maxHeight = this.maxHeight + 'px'
      this.container.style.overflow = 'hidden'
    }

    this.trigger.addEventListener('click', this.changeExpanded)
  }

  destory = () => {
    this.trigger.removeEventListener('click', this.changeExpanded)
  }

  changeExpanded = () => {
    let height = this.expanded ? 0 : this.container.scrollHeight
    this.container.style.maxHeight = height + 'px'
    this.expanded = !this.expanded
  }

  constructor(props: CollapseProps) {
    this.container = props.container
    this.trigger = props.trigger

    this.maxHeight = props.options?.maxHeight ?? this.maxHeight
    this.expanded = props.options?.defaultExpanded ?? this.expanded
    this.duration = props.options?.duration ?? this.duration

    this.init()
  }
}
