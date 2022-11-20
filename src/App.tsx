import "./App.css";

import { useRipple } from "./hooks/useRipple";

function App() {
  const triggerRef = useRipple<HTMLButtonElement>();

  return (
    <div className="App">
      <button className="button" ref={triggerRef}>
        this is a button
      </button>
    </div>
  );
}

export default App;
