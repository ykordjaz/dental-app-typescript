import { useState } from "react";

const surfaceColors: any = {
  mesial: "blue",
  distal: "green",
  occlusal: "orange",
  vestibular: "purple",
  lingual: "yellow",
  cervical: "red",
};

const surfacePaths: any = {
  mesial: "M50,80 Q75,60 100,80 L100,140 Q75,160 50,140 Z",
  distal: "M100,80 Q125,60 150,80 L150,140 Q125,160 100,140 Z",
  occlusal: "M75,110 Q100,95 125,110 Q100,125 75,110 Z",
  cervical: "M50,140 L150,140 L145,145 L55,145 Z",
  lingual: "M50,180 L90,180 L90,220 L50,220 Z",
  vestibular: "M110,180 L150,180 L150,220 L110,220 Z"
};

const Tooth = ({ id, isAdult, isMissing, fdiNumber, surfaces = [] }: any) => {
  const [selectedSurface, setSelectedSurface]  = useState<string | null>(null);

  return (
    <div>
      <svg
        width="100"
        height="100"
        viewBox="0 0 200 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50,80 Q100,40 150,80 Q160,100 150,140 Q140,180 100,180 Q60,180 50,140 Q40,100 50,80 Z"
          fill="white"
          stroke="black"
          strokeWidth="4"
        />

        {/* Milk teeth with pink roots */}
        {isAdult ? (
          <path
            d="M 50 140 Q 60 210 82 216 Q 101 224 118 216 Q 140 212 150 140 Z"
            fill="white"
            stroke="black"
            strokeWidth="4"
          />
        ):
        <path
          d="M 50 140 Q 60 210 82 216 Q 101 224 118 216 Q 140 212 150 140 Z"
          fill="pink"
          stroke="black"
          strokeWidth="4"
        />
        }


        {Object.entries(surfacePaths).map(([surfaceName, surfacePath]: any) => (
          <path
            key={surfaceName}
            d={surfacePath}
            fill={surfaceColors[surfaceName]}
            fillOpacity={selectedSurface === surfaceName ? "1" : "0.5"}
            stroke="none"
            onClick={() => setSelectedSurface(surfaceName)}
            cursor="pointer"
          />

        ))};


        Overlay: missing tooth marker
        {isMissing && (
          <text
            x="30"
            y="60"
            fontSize="50"
            fill="gray"
            fontWeight="bold"
            textAnchor="middle">
            F
          </text>
        )}
      </svg>
    </div>
  );
};

export default Tooth;
