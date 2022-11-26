import { useCollapse } from '@butter/react'
import { useRef, useState } from 'react'

function App() {
  const { getTriggerProps, getCollapseProps } = useCollapse()

  const [show, setShow] = useState(true)

  return (
    <div>
      <button onClick={() => setShow(prev => !prev)}>show</button>

      <button {...getTriggerProps()}>trigger</button>

      <div {...getCollapseProps()}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magni
        aspernatur quas! Saepe ullam delectus velit magnam culpa provident,
        perspiciatis, ea nihil quidem harum sequi at, quaerat consequatur
        dolorum! Necessitatibus.
      </div>
    </div>
  )
}

export default App
