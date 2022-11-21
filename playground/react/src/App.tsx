import { useHoverReverso, useRipple } from '@butter/react'

function App() {
  const ref = useHoverReverso()

  return (
    <button>
      <div style={{ width: '100%', height: '100%' }} ref={ref}>
        this is button
      </div>
    </button>
  )
}

export default App
