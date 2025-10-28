import { useEffect, useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((t) => t + 1);
      console.log("interval is running");
    }, 1000);

    console.log("interval id:", intervalId);

    // clean up function
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>Timer: {timer}</div>;
}
