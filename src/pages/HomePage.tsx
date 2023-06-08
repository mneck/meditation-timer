import SetTimer from "../components/SetTimer";
import SelectSound from "../components/SelectSound";

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>Meditation Timer</h1>
      <h2>Bell goes here at top (potentially)</h2>
      <h2>Time adjustment settings go here (potentially)</h2>

      <h2>Signup and Login stuff goes here</h2>
      <h3>
        <Link to="/timer-settings">Timer Settings</Link>
      </h3>

      <SetTimer />
      <SelectSound />
    </>
  );
}

export default HomePage;
