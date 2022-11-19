import { useState } from "react";
import "./App.css";
import { useMagnetic } from "./hooks/useMagnetic";

function App() {
  const [show, setShow] = useState(true);
  const [buttonRef1, setButtonRef1] = useState<HTMLElement | null>(null);
  const [buttonRef2, setButtonRef2] = useState<HTMLElement | null>(null);

  const magneted1 = useMagnetic<HTMLElement>(buttonRef1!, 100);
  const magneted2 = useMagnetic(buttonRef2!, 100);

  return (
    <div className="App">
      {show && <button ref={setButtonRef1}>button</button>}
      <br />
      <br />

      <br />
      {magneted1 ? "true" : "false"}
      <br />

      <br />

      <button onClick={() => setShow(!show)}>close</button>

      <br />
      <br />
      <br />
      <br />
      <br />

      <button ref={setButtonRef2}>button2</button>

      <br />

      {magneted2 ? "true" : "false"}
    </div>
  );
}

export default App;
