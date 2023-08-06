// library methods
import { useEffect, useState } from "react";

// utilities
import { formatTime } from "../../../utils/dateHelper";

// styles
import "./index.css"

function Clock() {
  const [clock, setClock] = useState<Date>(new Date());

  const updateClock = () => { 
    setClock(new Date());
  };

  useEffect(() => {
    // update the clock state every 1s
    const interval = setInterval(updateClock, 1000);

    return () => {
      clearInterval(interval)
    };
  }, []);

  return (
    <div className="Clock" data-testid="clock">
      {formatTime(clock)}
    </div>
  );
}

export default Clock;
