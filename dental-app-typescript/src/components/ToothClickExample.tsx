import { useState } from "react";

export default function ToothClickExample() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <svg
    width="100"
    height="100"
    viewBox="0 0 200 300"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50,80 Q100,40 150,80 Q160,100 150,140 Q140,180 100,180 Q60,180 50,140 Q40,100 50,80 Z"
      fill="white"
      stroke= "black"
      strokeWidth="4"
    />
      {/* Occlusal surface */}
      <path
        d="M75,110 Q100,95 125,110 Q100,125 75,110 Z"
        fill={isClicked ? "orange" : "transparent"}
        stroke="orange"
        strokeWidth="2"
        onClick={() => setIsClicked(!isClicked)}
        cursor="pointer"
      />
  </svg>
  )

};
