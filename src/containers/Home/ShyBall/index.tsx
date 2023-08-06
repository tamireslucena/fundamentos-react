// library methods
import { useEffect, useState } from "react";

// styles
import "./index.css"

function ShyBall() {

  // states
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [translate, setTranslate] = useState<string>(`translateX(${0}%) translateY(${0}%)`)


  // methods
  function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
  
  useEffect(() => {
    if (!isHovered) return
    setTranslate(`translateX(${getRandomArbitrary(20, 90)}%) translateY(${getRandomArbitrary(20, 90)}%)`)
  }, [isHovered])

  useEffect(() => {
    setIsHovered(false);
  }, [translate])

  return (
    <div className="ShyBall">
      <svg height="95%" width="100%">
        <circle cx="50" cy="50" r="40" fill="red" onMouseOver={() => setIsHovered(true)} style={{ transform: translate, transition: "transform 330ms ease-in-out" }} />
      </svg>
    </div>
  );
}

export default ShyBall;
