import "../App.css";

function SelectSound() {
  return (
    <>
      <div className="card">
        <h2>Bell goes here at top (potentially)</h2>
        <p>Pick a sound option here.</p>
        <div>
          <audio controls>
            <source src="../../public/bell1-long.mp3" type="audio/mpeg" />
            Your browser does not support this audio element.
          </audio>
        </div>

        <div>
          <audio controls>
            <source src="../../public/bell2-short.mp3" type="audio/mpeg" />
            Your browser does not support this audio element.
          </audio>
        </div>

        <div>
          <audio controls>
            <source src="../../public/singing-bowl.mp3" type="audio/mpeg" />
            Your browser does not support this audio element.
          </audio>
        </div>
      </div>
    </>
  );
}

export default SelectSound;
