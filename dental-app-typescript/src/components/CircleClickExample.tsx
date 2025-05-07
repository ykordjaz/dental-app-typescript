import { useState } from "react";

export default function CircleClickExample() {
  const [isClicked, setIsClicked] = useState(false); // starts as false

  return (
    <svg width="200" height="200">
      <circle
        cx="100"
        cy="100"
        r="50"
        fill={isClicked ? "red" : "black"}
        onClick={() => setIsClicked(!isClicked)} // toggle true/false
        style={{ cursor: "pointer" }}
      />
    </svg>
  );
}
