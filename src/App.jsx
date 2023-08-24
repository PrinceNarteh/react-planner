import { useState } from "react";
import { ReactPlanner } from "./index";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ReactPlanner />
    </>
  );
}

export default App;
