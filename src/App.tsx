import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
