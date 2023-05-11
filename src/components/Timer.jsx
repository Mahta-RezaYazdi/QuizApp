import { useEffect, useState } from "react";

function Timer() {
  const [secondsPassed, setSecondsPassed] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsPassed((s) => s + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const hours = Math.floor(secondsPassed / 3600);
  const minutes = Math.floor((secondsPassed % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (secondsPassed % 60).toString().padStart(2, "0");

  return (
    <>
      <p>
        Timer:{" "}
        <b>
          {" "}
          {hours}:{minutes}:{seconds}
        </b>
      </p>
    </>
  );
}

export default Timer;
