import { useRef, useState } from "react";
import "./App.css";
import { useHoverReverso } from "./hooks/useHoverReverso";

function App() {
  const triggerRef = useHoverReverso<HTMLDivElement>();

  return (
    <div className="App">
      <div className="wrap">
        <div ref={triggerRef} className="box">
          Menu
        </div>

        <p>hello</p>
      </div>
    </div>
  );
}

export default App;
