import "../App.css";

function SelectSound() {
  return (
    <>
      <div className="card">
        <h3>Pick a sound option here.</h3>
        <div>
          <p>Long, higher pitch</p>
          <audio controls>
            <source src="../../public/bell1-long.mp3" type="audio/mpeg" />
            Your browser does not support this audio element.
          </audio>
        </div>

        <div>
          <p>Short, higher pitch</p>
          <audio controls>
            <source src="../../public/bell2-short.mp3" type="audio/mpeg" />
            Your browser does not support this audio element.
          </audio>
        </div>

        <div>
          <p>Longer, multiple bells</p>
          <audio controls>
            <source src="../../public/bell3-multi.mp3" type="audio/mpeg" />
            Your browser does not support this audio element.
          </audio>
        </div>

        <div>
          <p>Singing bowl, higher pitch</p>
          <audio controls>
            <source
              src="../../public/bell4-singing-bowl1.mp3"
              type="audio/mpeg"
            />
            Your browser does not support this audio element.
          </audio>
        </div>

        <div>
          <p>Singing bowl, lower pitch</p>
          <audio controls>
            <source
              src="../../public/bell5-singing-bowl2.mp3"
              type="audio/mpeg"
            />
            Your browser does not support this audio element.
          </audio>
        </div>
      </div>
    </>
  );
}

export default SelectSound;
