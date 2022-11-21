import { useRipple } from '@butter/react'

function App() {
  const ref = useRipple()

  return <button ref={ref}>this is button</button>
}

export default App
