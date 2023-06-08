import { Routes, Route } from "react-router-dom";
import "./App.css";

import TimerSettingsPage from "./pages/TimerSettingsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/timer-settings" element={<TimerSettingsPage />} />"
      </Routes>
    </>
  );
}

export default App;
