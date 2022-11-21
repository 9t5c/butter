import { useHoverReverso, useMagnetic, useRipple } from '@butter/react'
import { useState } from 'react'

function App() {
  const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null)

  const isMagnetic = useMagnetic<HTMLButtonElement>(buttonRef!)

  return (
    <div>
      <button ref={setButtonRef}>hello</button>
      <p>{isMagnetic ? 'true' : 'false'}</p>
    </div>
  )
}

export default App
